import Image from "next/image";
import i2icLogo from "@/public/i2ic-logo.svg";
import viLogo from "@/public/vi-logo.png";
import { Separator } from "./ui/separator";

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

            {
                /* add a separator from shadcn if both logos are present */
                (!i2ic && !vi) && <Separator orientation="vertical" className="mx-1 min-h-12 h-full w-px bg-muted-foreground" />
            }

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
