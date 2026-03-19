import { useEffect, useState } from "react";
import "../styles/colour-palette.css";

const ColourPalette = () => {
  const [colours, setColours] = useState<string[]>(
    Array.from({ length: 6 }, () => generateColour()),
  );

  function generateColour(): string {
    const letters = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleCopy = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      alert(`Copied ${color}`);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  function handleGenerate() {
    setColours(Array.from({ length: 6 }, generateColour));
  }
  return (
    <div className="container">
      <h1>Colour Palette Generator</h1>
      <button className="generate-btn" onClick={handleGenerate}>
        🔄️Generate
      </button>
      <div className="palette-container">
        {colours.map((item) => (
          <div
            onClick={() => handleCopy(item)}
            key={item}
            className="color-box"
            title="click to copy">
            <div className="color" style={{ backgroundColor: item }}></div>
            <div className="color-info">
              <span>{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColourPalette;
