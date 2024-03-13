import RenderModel from "@/components/RenderModel";
import FireFliesBackground from "@/components/fire-flies-background";
import Navigation from "@/components/navigation";
import WizardModel from "@/components/wizard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between relative">
      <Image
        priority
        src="/background/home-background.png"
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      /
      <div className="w-full h-full">
        <FireFliesBackground />
        <Navigation />
        <RenderModel>
          <WizardModel />
        </RenderModel>
      </div>
    </main>
  );
}
