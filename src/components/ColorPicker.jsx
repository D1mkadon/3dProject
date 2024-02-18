import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChangeComplete={(color) => (state.color = color.hex)}
        presetColors={[
          "#010101",
          "#fff",
          "#6A6A68",

          "#CD0027",
          "#EDA7C1",
          "#EEA187",
          "#FFE001",
          "#97D0A7",
          "#006347",
          "#56187D",
          "#1D57A9",
          "#BBDAF6",
        ]}
      />
      <SketchPicker
        color={snap.colorSecond}
        disableAlpha
        onChangeComplete={(color) => (state.colorSecond = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
