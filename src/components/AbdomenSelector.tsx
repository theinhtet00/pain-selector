// src/components/AbdomenSelector.tsx

import React from "react";
import Assets from "../assets";
import { POSITION } from "../model/Position";
import { useNavigate } from "react-router-dom";
import { NavigationScreen } from "../model/routes";
import useAreaSelector from "../hooks/useAreaSelector";

const AbdomenSelector: React.FC = () => {
  const navigate = useNavigate();
  const { selectedAreas, toggleArea } = useAreaSelector();

  const handleAreaClick = (area: string) => {
    let newSelection = {
      highlighted: "",
      caption: "",
      position: { top: "0", left: "0" },
    };

    switch (area) {
      case POSITION.epi:
        newSelection = {
          highlighted: Assets.abdomen.epigastrium.highlight,
          caption: Assets.abdomen.epigastrium.caption,
          position: { top: "49.5%", left: "51.5%" },
        };
        break;
      case POSITION.luq:
        newSelection = {
          highlighted: Assets.abdomen.luq.highlight,
          caption: Assets.abdomen.luq.caption,
          position: { top: "51%", left: "52%" },
        };
        break;
      case POSITION.llq:
        newSelection = {
          highlighted: Assets.abdomen.llq.highlight,
          caption: Assets.abdomen.llq.caption,
          position: { top: "47%", left: "53%" },
        };
        break;
      case POSITION.umb:
        newSelection = {
          highlighted: Assets.abdomen.umbilicus.highlight,
          caption: Assets.abdomen.umbilicus.caption,
          position: { top: "53%", left: "48.5%" },
        };
        break;
      case POSITION.sup:
        newSelection = {
          highlighted: Assets.abdomen.suprapubic.highlight,
          caption: Assets.abdomen.suprapubic.caption,
          position: { top: "54%", left: "51.5%" },
        };
        break;
      case POSITION.rlq:
        newSelection = {
          highlighted: Assets.abdomen.rlq.highlight,
          caption: Assets.abdomen.rlq.caption,
          position: { top: "44%", left: "44%" },
        };
        break;
      case POSITION.rup:
        newSelection = {
          highlighted: Assets.abdomen.ruq.highlight,
          caption: Assets.abdomen.ruq.caption,
          position: { top: "51%", left: "47%" },
        };
        break;
      default:
        return;
    }

    toggleArea(newSelection);
  };
  const allAreasSelected = selectedAreas.length === 7; // Adjust based on the total number of selectable areas

  return (
    <div className="relative max-w-sm mx-auto">
      {/* Base Abdominal image */}
      <img
        src={Assets.abdomen.default}
        alt="Abdomen Pain Map"
        className="w-full"
      />

      {/* Overlay clickable areas with precise positioning */}
      <div
        onClick={() => handleAreaClick(POSITION.epi)}
        className="absolute left-[48.2%] top-[41%] w-[30px] h-[30px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }} // epi
      />
      <div
        onClick={() => handleAreaClick(POSITION.luq)}
        className="absolute left-[58%] top-[47%] w-[30px] h-[30px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
      <div
        onClick={() => handleAreaClick(POSITION.llq)}
        className="absolute left-[59%] top-[58%] w-[30px] h-[33px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }} // llq
      />
      <div
        onClick={() => handleAreaClick(POSITION.umb)}
        className="absolute left-[48.5%] top-[53%] w-[30px] h-[30px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }} // umb
      />
      <div
        onClick={() => handleAreaClick(POSITION.sup)}
        className="absolute left-[48.5%] top-[63.5%] w-[30px] h-[35px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }} // sup
      />
      <div
        onClick={() => handleAreaClick(POSITION.rlq)}
        className="absolute left-[38%] top-[58%] w-[35px] h-[35px] bg-transparent cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }} // sup
      />
      <div
        onClick={() => handleAreaClick(POSITION.rup)}
        className="absolute left-[38%] top-[48%] w-[34px] h-[35px] bg-right-top cursor-pointer"
        style={{ transform: "translate(-50%, -50%)" }} // rup
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
          onClick={() => navigate(NavigationScreen.Home)}
          className="cursor-pointer"
        >
          <img
            src={Assets.abdomen.allOverHighligted}
            alt="Highlighted Button"
            className="absolute w-full h-full inset-0"
          />
        </div>
      )}
    </div>
  );
};

export default AbdomenSelector;
