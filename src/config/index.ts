const DARK = "DARK";
const LIGHT = "LIGHT";

// svestkovka : const INIT_LATITUDE = 50.449825;
const INIT_LATITUDE = 49.1189258133652;
// svestkovka : const INIT_LONGITUDE = 13.89995;
const INIT_LONGITUDE = 20.0650115221105;

const INIT_ZOOM = 16;
const INIT_PITCH = 60;

const MAP_FULL_WIDTH = "100vw";
const MAP_FULL_HEIGHT = "100vh";
const MAP_SHRINKED_HEIGHT = (1080 / 1920) * 100 + "vh"; // height of map / height of display * 100 (730 is to be centered)

const DIRECTION_FROM = "Odkud";
const DIRECTION_TO = "Kam";

export {
  DARK,
  LIGHT,
  INIT_LATITUDE,
  INIT_LONGITUDE,
  INIT_ZOOM,
  MAP_FULL_WIDTH,
  MAP_FULL_HEIGHT,
  MAP_SHRINKED_HEIGHT,
  INIT_PITCH,
  DIRECTION_FROM,
  DIRECTION_TO
};
