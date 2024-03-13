"use client";

import useScreenSize from "@/hooks/use-screen-size";
import { BtnList } from "@/lib/utils";
import NavigationButton from "./navigation-button";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="w-full flex justify-center items-center h-screen fixed">
      <div className="flex items-center justify-center hover:pause relative animate-spin-slow group">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = isLarge
            ? "calc(20vw - 1rem)"
            : isMedium
            ? "calc(30vw - 1rem)"
            : "calc(40vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;

          return <NavigationButton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
