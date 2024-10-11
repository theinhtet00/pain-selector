import React from "react";
import Assets from "../assets";
import { POSITION } from "../model/Position";
import { useNavigate } from "react-router-dom";
import { NavigationScreen } from "../model/routes";
import useAreaSelector from "../hooks/useAreaSelector";

const areaData = {
  epi: { 
    highlighted: Assets.abdomen.epigastrium.highlight, 
    caption: Assets.abdomen.epigastrium.caption, 
    position: { top: "49.5%", left: "51.5%" } 
  },
  luq: { 
    highlighted: Assets.abdomen.luq.highlight, 
    caption: Assets.abdomen.luq.caption, 
    position: { top: "51%", left: "52%" } 
  },
  llq: { 
    highlighted: Assets.abdomen.llq.highlight, 
    caption: Assets.abdomen.llq.caption, 
    position: { top: "47%", left: "53%" } 
  },
  umb: { 
    highlighted: Assets.abdomen.umbilicus.highlight, 
    caption: Assets.abdomen.umbilicus.caption, 
    position: { top: "53%", left: "48.5%" } 
  },
  sup: { 
    highlighted: Assets.abdomen.suprapubic.highlight, 
    caption: Assets.abdomen.suprapubic.caption, 
    position: { top: "54%", left: "51.5%" } 
  },
  rlq: { 
    highlighted: Assets.abdomen.rlq.highlight, 
    caption: Assets.abdomen.rlq.caption, 
    position: { top: "44%", left: "44%" } 
  },
  rup: { 
    highlighted: Assets.abdomen.ruq.highlight, 
    caption: Assets.abdomen.ruq.caption, 
    position: { top: "51%", left: "47%" } 
  },
};


const clickableAreas = [
  { position: POSITION.epi, top: "41%", left: "48.2%", width: "30px", height: "30px" },
  { position: POSITION.luq, top: "47%", left: "58%", width: "30px", height: "30px" },
  { position: POSITION.llq, top: "58%", left: "59%", width: "30px", height: "33px" },
  { position: POSITION.umb, top: "53%", left: "48.5%", width: "30px", height: "30px" },
  { position: POSITION.sup, top: "63.5%", left: "48.5%", width: "30px", height: "35px" },
  { position: POSITION.rlq, top: "58%", left: "38%", width: "35px", height: "35px" },
  { position: POSITION.rup, top: "48%", left: "38%", width: "34px", height: "35px" },
];

const AbdomenSelector: React.FC = () => {
  const navigate = useNavigate();
  const { selectedAreas, toggleArea } = useAreaSelector();

  const handleAreaClick = (area: keyof typeof areaData) => {
    const newSelection = areaData[area];
    toggleArea(newSelection);
  };

  const allAreasSelected = selectedAreas.length === Object.keys(areaData).length;

  return (
    <div className="relative max-w-sm mx-auto">
      {/* Base Abdominal image */}
      <img src={Assets.abdomen.default} alt="Abdomen Pain Map" className="w-full" />

      {/* Overlay clickable areas */}
      {clickableAreas.map(({ position, top, left, width, height }) => (
        <div
          key={position}
          onClick={() => handleAreaClick(position as keyof typeof areaData)}
          className="absolute bg-transparent cursor-pointer"
          style={{
            top,
            left,
            width,
            height,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Render all highlighted areas */}
      {selectedAreas.map((selection, index) => (
        <img
          key={index}
          src={selection.highlighted}
          alt={`Selected Area Highlighted ${index}`}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        />
      ))}

      {/* Render captions if not all areas are selected */}
      {!allAreasSelected &&
        selectedAreas.map((selection, index) => (
          <img
            key={index}
            src={selection.caption}
            alt={`Selected Area Caption ${index}`}
            className="absolute w-full h-full pointer-events-none"
            style={{
              zIndex: 2,
              top: selection.position.top,
              left: selection.position.left,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

      {/* Show all highlighted areas if all are selected */}
      {allAreasSelected && (
        <div onClick={() => navigate(NavigationScreen.Home)} className="cursor-pointer">
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
