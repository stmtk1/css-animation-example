"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function BgAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(!isVisible), 2000);
  }, [setIsVisible, isVisible]);

    return (
        <main>
            <div className={clsx("block absolute top-0 left-0 w-full h-screen bg-[#a33e46] transition-transform duration-700 z-0", { "translate-y-full": !isVisible})}></div>
            <div className={clsx("flex flex-col justify-center items-center relative w-full h-screen text-white z-50" )}>
            <div className={clsx("block delay-1000", {"opacity-0": !isVisible})} style={{transition: "opacity ease-out 0.7s"}}>
                <h1 className={clsx("delay-700 text-xl overflow-hidden h-min", {"translate-y-full": !isVisible})} style={{transition: "transform ease-out 1s"}}>background</h1>
                <h2 className={clsx("delay-1000 text-3xl overflow-hidden h-min", {"translate-y-full": !isVisible})} style={{transition: "transform ease-out 1s"}}>animation</h2>
            </div>
            </div>
        </main>
    )
}