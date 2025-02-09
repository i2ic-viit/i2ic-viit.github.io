"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import { useDotButton } from "./EmblaCarouselDotButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import "./embla.css";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const tweenFactor = useRef(0);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current =
            TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenOpacity = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const slidesInView = emblaApi.slidesInView();
            const isScrollEvent = eventName === "scroll";

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex))
                        return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget =
                                        scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget =
                                        scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    const tweenValue =
                        1 - Math.abs(diffToTarget * tweenFactor.current);
                    const opacity = numberWithinRange(
                        tweenValue,
                        0,
                        1
                    ).toString();
                    emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
                });
            });
        },
        []
    );

    useEffect(() => {
        if (!emblaApi) return;

        setTweenFactor(emblaApi);
        tweenOpacity(emblaApi);
        emblaApi
            .on("reInit", setTweenFactor)
            .on("reInit", tweenOpacity)
            .on("scroll", tweenOpacity)
            .on("slideFocus", tweenOpacity);
    }, [emblaApi, tweenOpacity, setTweenFactor]);

    return (
        <div className="embla max-w-5xl relative">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="relative w-full h-[350px]">
                                <Image
                                    className="embla__slide__img"
                                    src={`https://picsum.photos/600/350?v=${index}`}
                                    alt="Carousel image"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority={index === 0}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent" />
            </div>

            <div className="flex flex-wrap justify-center align-center mt-6">
                <Button
                    disabled={prevBtnDisabled}
                    onClick={onPrevButtonClick}
                    variant={"ghost"}
                    className="size-4 mx-1 rounded-full my-0"
                >
                    <ArrowLeft />
                </Button>

                {scrollSnaps.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => onDotButtonClick(i)}
                        className={`mx-1 h-4 w-4 cursor-pointer rounded-full border border-gray-300 transition-colors block ${
                            i === selectedIndex
                                ? "bg-primary border-primary"
                                : "bg-white hover:bg-gray-100"
                        }`}
                    />
                ))}

                <Button
                    disabled={nextBtnDisabled}
                    onClick={onNextButtonClick}
                    variant={"ghost"}
                    className="size-4 mx-1 rounded-full my-0"
                >
                    <ArrowRight />
                </Button>
            </div>
        </div>
    );
};

export default EmblaCarousel;
