import { useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHex() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbColor = `rgb(${r},${g}, ${b})`;
    setColor(rgbColor);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => {
          setColorType("hex");
          handleRandomHex();
        }}
        style={{
          ...btn,
          backgroundColor: colorType == "hex" ? "red" : "black",
          padding: colorType == "hex" ? "20px" : "12px",
        }}
      >
        Create Hex
      </button>
      <button
        onClick={() => {
          setColorType("rgb");
          handleRandomRGB();
        }}
        style={{
          ...btn,
          backgroundColor: colorType == "rgb" ? "red" : "black",
          padding: colorType == "rgb" ? "20px" : "12px",
        }}
      >
        Create RGB
      </button>
      <button
        style={btn}
        onClick={colorType === "hex" ? handleRandomHex : handleRandomRGB}
      >
        Generate random color
      </button>
      <span style={btn}>{color}</span>
    </div>
  );
}

const btn = {
  padding: "12px",
  fontWeight: "bold",
  margin: "10px",
  color: "white",
  background: "black",
  borderRadius: "8px",
  cursor: "pointer",
};
