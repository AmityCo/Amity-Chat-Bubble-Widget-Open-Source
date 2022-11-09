import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import "./WidgetTest.css";
export const WidgetTest = () => {
  return (
    <div className="frame-wrap">
      <Iframe
        url=""
        width="372px"
        height="600px"
        id=""
        className="frame"
        display="block"
        position="relative"
      />
    </div>
  );
};
