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
          <div className="bg-white bg-opacity-20 rounded-lg p-4 border border-white border-opacity-30 text-center select-all break-all text-xs font-mono flex-1">
            {contractAddress}
          </div>
          <button
            onClick={copyToClipboard}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 border border-white border-opacity-30 rounded-lg p-4 transition-all text-lg"
          >
            📋
          </button>
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
