import React from "react";
import Assets from "../assets";
import { FINGER } from "../model/Position";
import { useNavigate } from "react-router-dom";
import { NavigationScreen } from "../model/routes";
import useAreaSelector from "../hooks/useAreaSelector";

const FingerSelector: React.FC = () => {
  const navigate = useNavigate();
  const { selectedAreas, toggleArea } = useAreaSelector();

  const handleClick = (area: string) => {
    let newSelection = {
      highlighted: "",
      position: { top: "0", left: "0" },
      caption: "",
    };

    switch (area) {
      case FINGER.dip:
        newSelection = {
          highlighted: Assets.finger.dip.highlight,
          caption: Assets.finger.dip.caption,
          position: { top: "50.5%", left: "50%" },
        };
        break;
      case FINGER.mcp:
        newSelection = {
          highlighted: Assets.finger.mcp.highlight,
          caption: Assets.finger.mcp.caption,
          position: { top: "50%", left: "50%" },
        };
        break;
      case FINGER.pip:
        newSelection = {
          highlighted: Assets.finger.pip.highlight,
          caption: Assets.finger.pip.caption,
          position: { top: "50%", left: "50%" },
        };
    }

    toggleArea(newSelection);
  };
  const allAreasSelected = selectedAreas.length === 3; // Adjust based on the total number of selectable areas

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <img
        src={Assets.finger.default}
        alt="Finger Pain Map"
        className="w-full"
      />

      <div
        onClick={() => handleClick(FINGER.dip)}
        className="absolute left-[23.5%] top-[26%] w-[15px] h-[15px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.dip)}
        className="absolute left-[36%] top-[15%] w-[15px] h-[15px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.dip)}
        className="absolute left-[46.5%] top-[10.8%] w-[17px] h-[15px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.dip)}
        className="absolute left-[58.5%] top-[13%] w-[17px] h-[15px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      <div
        onClick={() => handleClick(FINGER.pip)}
        className="absolute left-[58.5%] top-[23%] w-[19px] h-[15px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.pip)}
        className="absolute left-[47.3%] top-[22%] w-[19px] h-[15px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.pip)}
        className="absolute left-[36.5%] top-[25.5%] w-[19px] h-[15px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.pip)}
        className="absolute left-[27%] top-[33.3%] w-[19px] h-[15.5px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.pip)}
        className="absolute left-[79%] top-[43%] w-[17px] h-[15.5px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      <div
        onClick={() => handleClick(FINGER.mcp)}
        className="absolute left-[31.5%] top-[43%] w-[19px] h-[17px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.mcp)}
        className="absolute left-[40%] top-[39.5%] w-[22px] h-[17px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.mcp)}
        className="absolute left-[48.5%] top-[37%] w-[22px] h-[19px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.mcp)}
        className="absolute left-[58%] top-[37.3%] w-[22px] h-[19px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        onClick={() => handleClick(FINGER.mcp)}
        className="absolute left-[72%] top-[54.5%] w-[22px] h-[19px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Render all highlighted areas */}
      {selectedAreas.map((selection, index) => (
        <React.Fragment key={index}>
          <img
            src={selection.highlighted}
            alt={`Selected Area Highlighted ${index}`}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }} // Ensure the highlighted image is above the base image
          />
        </React.Fragment>
      ))}

      {/* Render captions only if not all areas are selected */}
      {!allAreasSelected &&
        selectedAreas.map((selection, index) => (
          <img
            key={index}
            src={selection.caption}
            alt={`Selected Area Caption ${index}`}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              zIndex: 2,
              top: selection.position.top,
              left: selection.position.left,
              transform: "translate(-50%, -50%)", // Center the caption
            }}
          />
        ))}

      {allAreasSelected && (
        <div
          className="cursor-pointer"
          onClick={() => navigate(NavigationScreen.Home)}
        >
          <img
            src={Assets.finger.other.highlight}
            className="absolute w-full h-full inset-0"
          />
        </div>
      )}
    </div>
  );
};

export default FingerSelector;
