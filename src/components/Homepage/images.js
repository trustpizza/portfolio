import arloBackpack from "../../assets/fun-imgs/arlo-backpack.png";
import arloVTSunset from "../../assets/fun-imgs/arlo-vt-sunset.png";
import arloWhiteRiver from "../../assets/fun-imgs/arlo-white-river.png";
import flatirons from "../../assets/fun-imgs/flatirons.png";
import forestMtns from "../../assets/fun-imgs/forest-mtns.png";
import forest from "../../assets/fun-imgs/forest.png";
import grandCanyonShoes from "../../assets/fun-imgs/grand-canyon-shoes.png";
import grandCanyon from "../../assets/fun-imgs/grand-canyon.png";
import pemiSelfie from "../../assets/fun-imgs/pemi-selfie.png";
import redrocksVT from "../../assets/fun-imgs/redrocks-vt.png";
import sailboat from "../../assets/fun-imgs/sailboat.png";
import sistersWesternLookout from "../../assets/fun-imgs/sisters-western-lookout.png";
import skiMtn from "../../assets/fun-imgs/ski-mtn.png";
import waterfall from "../../assets/fun-imgs/waterfall.png";
import westernLookoutCouple from "../../assets/fun-imgs/western-lookout-couple.png";
import gcSitting from "../../assets/fun-imgs/gcSitting.jpeg";
import gcColRiver from "../../assets/fun-imgs/gc-colorado-river.jpg";
import gcWaterfall from "../../assets/fun-imgs/gc-waterfall.jpg";

const images = [
  arloBackpack,
  arloVTSunset,
  arloWhiteRiver,
  flatirons,
  forestMtns,
  forest,
  grandCanyonShoes,
  grandCanyon,
  pemiSelfie,
  redrocksVT,
  sailboat,
  sistersWesternLookout,
  skiMtn,
  waterfall,
  westernLookoutCouple,
  gcSitting,
  gcColRiver,
  gcWaterfall,
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledImages = shuffleArray(images);

export default shuffledImages;
