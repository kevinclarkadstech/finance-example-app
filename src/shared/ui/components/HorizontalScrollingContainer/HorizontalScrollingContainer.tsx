import React from "react";
import "./HorizontalScrollingContainer.css";

export function HorizontalScrollingContainer({
  children,
  spaceBetweenItems,
}: {
  children: React.ReactNode[] | React.ReactNode;
  spaceBetweenItems?: string;
}) {
  return (
    <div
      className="horizontal-scrolling-container"
      style={{ marginRight: spaceBetweenItems ?? "16px" }}
    >
      {children}
    </div>
  );
}
