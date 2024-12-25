import Image from "next/image";
import i2icLogo from "@/public/i2ic-logo.png";
import viLogo from "@/public/vi-logo.png";

export default function Logo({ height }: { height?: number }) {
    height = height || 48;

    return (
        <div className="flex">
            <Image
                src={viLogo}
                alt="VI Logo"
                className="mr-2"
                width={Math.round((height * 2) / 3)}
                height={height}
                priority
            />
            <Image
                src={i2icLogo}
                alt="I2IC Logo"
                className="mr-2"
                width={height}
                height={height}
                priority
            />
        </div>
    );
}
