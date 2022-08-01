import React from "react";
import { OverlayPanel } from "primereact/overlaypanel";

const OverlayPopup = ({ op }) => {
  return (
    <OverlayPanel
      ref={op}
      breakpoints={{ "960px": "75vw", "640px": "100vw" }}
      style={{ width: "450px" }}
    >
      Content
    </OverlayPanel>
  );
};

export default OverlayPopup;
