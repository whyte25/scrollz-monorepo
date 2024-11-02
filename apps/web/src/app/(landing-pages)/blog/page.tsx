import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <div className="flex-grow p-4 flex flex-col gap-5">
      <div className="mt-3 flex items-center justify-between">
        <div className=" space-y-2">
          <p className="text-xl font-semibold text-black">Blog</p>
        </div>
      </div>
    </div>
  );
}