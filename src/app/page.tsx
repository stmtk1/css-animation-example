"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(!isVisible), 3000);
  }, [setIsVisible, isVisible])
  return (
    <main className="flex overflow-hidden">
      <div className={clsx("block transition-transform duration-300", {"translate-y-full" :isVisible})}>T</div>
      <div className={clsx("block transition-transform duration-300 delay-6", {"translate-y-full" :isVisible})}>E</div>
      <div className={clsx("block transition-transform duration-300 delay-12", {"translate-y-full" :isVisible})}>X</div>
      <div className={clsx("block transition-transform duration-300 delay-18", {"translate-y-full" :isVisible})}>T</div>
      <div>&nbsp;</div>
      <div className={clsx("block transition-transform duration-300 delay-30", {"translate-y-full" :isVisible})}>A</div>
      <div className={clsx("block transition-transform duration-300 delay-36", {"translate-y-full" :isVisible})}>N</div>
      <div className={clsx("block transition-transform duration-300 delay-42", {"translate-y-full" :isVisible})}>I</div>
      <div className={clsx("block transition-transform duration-300 delay-48", {"translate-y-full" :isVisible})}>M</div>
      <div className={clsx("block transition-transform duration-300 delay-54", {"translate-y-full" :isVisible})}>A</div>
      <div className={clsx("block transition-transform duration-300 delay-60", {"translate-y-full" :isVisible})}>T</div>
      <div className={clsx("block transition-transform duration-300 delay-66", {"translate-y-full" :isVisible})}>I</div>
      <div className={clsx("block transition-transform duration-300 delay-72", {"translate-y-full" :isVisible})}>O</div>
      <div className={clsx("block transition-transform duration-300 delay-78", {"translate-y-full" :isVisible})}>N</div>
    </main>
  )
}
