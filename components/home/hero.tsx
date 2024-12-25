import Image from "next/image";

export default function HeroSection() {
    const src = "/images/hero.png";

    return (
        <section className="h-[calc(100vh-64px)] bg-primary">
            {/* <div className="hidden md:block h-full">
                <div className="relative grid h-full grid-cols-2">
                    <div className="relative z-10 flex items-center justify-end text-primary-foreground">
                        <h1 className="text-right text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl pr-4">
                            Empowering Students: <br />
                            Connecting Education <br />
                            with Industry for Success
                        </h1>
                    </div>

                    <div className="absolute right-0 top-0 h-full w-[55%] overflow-hidden">
                        <div className="relative h-full w-full">
                            <Image
                                src={src}
                                alt="Students and Industry"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/50" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Mobile Layout - md:hidden */}
            <div className="relative h-full">
                <Image
                    src={src}
                    alt="Students and Industry"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex h-full items-center px-4">
                    <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl text-center mx-auto">
                        Empowering Students: <br />
                        Connecting Education <br />
                        with Industry for Success
                    </h1>
                </div>
            </div>
        </section>
    );
}
