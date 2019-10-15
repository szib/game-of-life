import React from "react";

import Buttons from "./Buttons";
import SizeControl from "./SizeControl";
import SpeedControl from "./SpeedControl";

const ControlPanel = props => {
  return (
    <div id="controlPanel">
      <Buttons {...props} />
      <SizeControl {...props} />
      <SpeedControl {...props} />
    </div>
  );
};

export default ControlPanel;
