"use client";

import React from "react";

export const PrintableOffer = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="p-10 bg-white ">
      <h1 className="text-2xl font-bold mb-4">Offer Letter</h1>

      <p className="mb-2">
        This is your PDF content. You can style everything with Tailwind.
      </p>

      <img
        src="/hope.png"
        className="w-32 mb-4"
        alt="Company logo"
      />

      <p>More content here…</p>
    </div>
  );
});
