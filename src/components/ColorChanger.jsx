import React, { useState } from "react";

function ColorChanger({ product, colour }) {
 
  const [selectedColor, setSelectedColor] = useState("MIDNIGHTBLUE");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  
  const hasColors = product.Colours && Object.keys(product.Colours).length > 0;
  const hasImages = product.images && Object.keys(product.images).length > 0;

  const isDefaultImageOnly = hasImages && Object.keys(product.images).length === 1;

  return (
    <div className="p-4  mt-10">
     
      <div className="mb-3">
       
        <img
          src={hasImages && !isDefaultImageOnly ? product.images[selectedColor] : product.images["default"]}
          alt={selectedColor}
          className="w-full h-72 object-contain rounded-md"
        />
      </div>

      {hasColors && !isDefaultImageOnly && (
        <div className="flex flex-wrap gap-4">
          {Object.entries(product.Colours).map(([colorName, colorCode], index) => (
            <button
              key={index}
              onMouseOver={() => handleColorChange(colorName)}
              className="w-10 h-10 rounded-full border-2 border-gray-400 transition-all hover:scale-110"
              style={{
                backgroundColor: colorCode,
                borderColor: selectedColor === colorName ? "black" : "gray",
              }}
            >
              <span className="sr-only">{colorName}</span>
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">
          {selectedColor.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default ColorChanger;