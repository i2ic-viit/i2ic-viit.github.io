import Image from "next/image";
import i2icLogo from "@/public/i2ic-logo.png";
import viLogo from "@/public/vi-logo.png";

export default function Logo({ 
    height = 48,
    vi = false,
    i2ic = false,
 }: { height?: number, vi?: boolean, i2ic?: boolean }) {
    return (
        <div className="flex">
            {(!i2ic) && <Image
                src={viLogo}
                alt="VI Logo"
                className="mr-2"
                width={Math.round((height * 2) / 3)}
                height={height}
                priority
            />}
            {(!vi) && <Image
                src={i2icLogo}
                alt="I2IC Logo"
                className="mr-2"
                width={height}
                height={height}
                priority
            />}
        </div>
    );
}
