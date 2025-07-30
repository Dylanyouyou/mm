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
        <div
          className="bg-white bg-opacity-20 rounded-lg p-4 cursor-pointer hover:bg-opacity-30 transition-all border border-white border-opacity-30"
          onClick={copyToClipboard}
        >
          <p className="text-sm font-medium mb-2 text-center">Contract Address (Click to Copy)</p>
          <p className="text-xs font-mono break-all text-center select-all">
            {contractAddress}
          </p>
        </div>

        {copySuccess && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <p className="text-sm font-medium bg-green-500 text-white px-3 py-1 rounded">
              Copied!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
