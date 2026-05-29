"use client";

import { useState, useRef } from "react";
import DomeGallery from "@/components/DomeGallery";
import InteractionFlow from "@/components/InteractionFlow";

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const startAudio = () => {
    audioRef.current?.play();
  };

  const userImages = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpg",
    "/7.GIF",
    "/8.gif",
    "/9.jpg",
    "/10.jpg",
    "/11.jpeg",
    "/12.jpeg",
    "/13.gif",
    "/14.jpeg",
    "/15.jpeg",
  ];

  return (
    <main onClick={startAudio} className="w-screen h-screen bg-[#060010]">
      <audio ref={audioRef} loop className="hidden">
        <source src="/pretty.mp3" type="audio/mp3" />
      </audio>
      <DomeGallery
        images={userImages}
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale={false}
        autoRotationSpeed={0.1}
      />
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <></>
      )}
    </main>
  );
}
