"use client";

import React from "react";

import { contractAddress } from "@/constants";

const ContractAddress = () => {
  return (
    <input
      className="w-full bg-gray-100 p-4 pe-24 text-sm sm:text-base md:text-2xl font-stopbuck font-medium rounded-xl text-ellipsis text-black inline-block"
      contentEditable={false}
      value={contractAddress}
    />
  );
};

export default ContractAddress;
