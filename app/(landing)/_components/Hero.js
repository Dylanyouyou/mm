"use client";

import React, { useState } from "react";
import { contractAddress } from "@/constants";

const Hero = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="h-dvh flex flex-col items-center justify-center gap-8" style={{color: 'rgba(119, 79, 79, 1)', backgroundColor: 'rgba(251, 180, 180, 1)'}}>
      <h1 className="text-6xl font-bold font-stopbuck text-center">$KITTY</h1>

      <div className="relative max-w-lg w-full px-4">
        <div className="flex items-center gap-2">
          <input
            className="inline-block bg-gray-100 rounded-xl text-black text-ellipsis w-full font-stopbuck font-medium text-lg sm:text-2xl"
            contentEditable={false}
            value={contractAddress}
            style={{padding: "16px 96px 16px 16px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
