import abdomenDefault from "./images/default-abs.png";
import allOverHighligted from "./images/all-over-highlight.png";
import epiHighlighted from "./images/epigastrium-highlight.png";
import epigastriumCaption from "./images/epigastrium-active.png";
import luqHighlighted from "./images/luq-highlight.png";
import luqCaption from "./images/luq-active.png";
import llqHigilighted from "./images/llq-highlight.png";
import llqCaption from "./images/llq-active.png";
import umbilicusHighlighted from "./images/umbilicus-highlight.png";
import umbilicusCaption from "./images/umbilicus-active.png";
import suprapubicHighlighted from "./images/suprapubic-highlight.png";
import suprapubicCaption from "./images/suprapubic-active.png";
import rlqHighlighted from "./images/rlq-highlight.png";
import rlqCaption from "./images/rlq-active.png";
import rupHighlighted from "./images/ruq-highlight.png";
import rupCaption from "./images/ruq-active.png";

import fingerDefault from "./images/default-finger.png";
import otherHighlighted from "./images/others-highlight.png";
import dipHighlighted from "./images/dip-highlight.png";
import dipCaption from "./images/dip-active.png";
import mcpHighlighted from "./images/mcp-highlight.png";
import mcpCaption from "./images/mcp-active.png";
import pipHighlighted from "./images/pip-highlight.png";
import pipCaption from "./images/pip-active.png";

import favicon from "./images/favicon.ico";

const Assets = {
  abdomen: {
    default: abdomenDefault,
    allOverHighligted,
    epigastrium: {
      highlight: epiHighlighted,
      caption: epigastriumCaption,
    },
    luq: {
      highlight: luqHighlighted,
      caption: luqCaption,
    },
    llq: {
      highlight: llqHigilighted,
      caption: llqCaption,
    },
    umbilicus: {
      highlight: umbilicusHighlighted,
      caption: umbilicusCaption,
    },
    suprapubic: {
      highlight: suprapubicHighlighted,
      caption: suprapubicCaption,
    },
    rlq: {
      highlight: rlqHighlighted,
      caption: rlqCaption,
    },
    ruq: {
      highlight: rupHighlighted,
      caption: rupCaption,
    },
  },
  finger: {
    default: fingerDefault,
    other: {
      highlight: otherHighlighted,
    },
    dip: {
      highlight: dipHighlighted,
      caption: dipCaption,
    },
    mcp: {
      highlight: mcpHighlighted,
      caption: mcpCaption,
    },
    pip: {
      highlight: pipHighlighted,
      caption: pipCaption,
    },
  },
  favicon,
};

export default Assets;
