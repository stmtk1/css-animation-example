"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

function FirstExample() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(!isVisible), 3000);
  }, [setIsVisible, isVisible])
  const divClassName = "block transition-transform duration-300";
  return (
    <h1 className="flex overflow-hidden">
      <div className={clsx(divClassName, {"translate-y-full" :isVisible})}>T</div>
      <div className={clsx(divClassName, "delay-6", {"translate-y-full" :isVisible})}>E</div>
      <div className={clsx(divClassName, "delay-12", {"translate-y-full" :isVisible})}>X</div>
      <div className={clsx(divClassName, "delay-18", {"translate-y-full" :isVisible})}>T</div>
      <div>&nbsp;</div>
      <div className={clsx(divClassName, "delay-30", {"translate-y-full" :isVisible})}>A</div>
      <div className={clsx(divClassName, "delay-36", {"translate-y-full" :isVisible})}>N</div>
      <div className={clsx(divClassName, "delay-42", {"translate-y-full" :isVisible})}>I</div>
      <div className={clsx(divClassName, "delay-48", {"translate-y-full" :isVisible})}>M</div>
      <div className={clsx(divClassName, "delay-54", {"translate-y-full" :isVisible})}>A</div>
      <div className={clsx(divClassName, "delay-60", {"translate-y-full" :isVisible})}>T</div>
      <div className={clsx(divClassName, "delay-66", {"translate-y-full" :isVisible})}>I</div>
      <div className={clsx(divClassName, "delay-72", {"translate-y-full" :isVisible})}>O</div>
      <div className={clsx(divClassName, "delay-78", {"translate-y-full" :isVisible})}>N</div>
    </h1>
  )
}

function SecondExample() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(!isVisible), 2100);
  }, [setIsVisible, isVisible])
  return (
    <h1 className={clsx("overflow-hidden transition-transform duration-1000", {"-translate-x-full": !isVisible})}>
      <div className={clsx("transition-transform duration-1000", {"translate-x-full": !isVisible})}>TEXT ANIMATION</div>
    </h1>
  )
}

export default function Home() {
  return (
    <main>
      <FirstExample />
      <SecondExample />
    </main>
  )
}