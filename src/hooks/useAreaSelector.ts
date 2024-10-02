// src/hooks/useAreaSelector.ts
import { useState } from "react";

interface Selection {
  highlighted: string;
  caption: string;
  position: { top: string; left: string };
}

const useAreaSelector = () => {
  const [selectedAreas, setSelectedAreas] = useState<Selection[]>([]);

  const toggleArea = (newSelection: Selection) => {
    const exists = selectedAreas.some(
      (selection) => selection.highlighted === newSelection.highlighted
    );

    if (exists) {
      // Remove the area if it's already selected
      setSelectedAreas(
        selectedAreas.filter(
          (selection) => selection.highlighted !== newSelection.highlighted
        )
      );
    } else {
      // Add the area if it's not selected
      setSelectedAreas([...selectedAreas, newSelection]);
    }
  };

  return { selectedAreas, toggleArea };
};

export default useAreaSelector;
