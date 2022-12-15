import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import "./WidgetTest.css";
export const WidgetTest = () => {
  return (
    <div className="frame-wrap">
      <Iframe
        url="http://localhost:3000/register?apiKey={apiKey}&userId={userId}&displayName={displayName}"
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
