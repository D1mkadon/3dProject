import { proxy } from "valtio";
const state = proxy({
  intro: true,
  color: "#fff",
  colorSecond: "#fff",
  isLogoTexture: false,
  isFullTexture: true,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});
export default state;
