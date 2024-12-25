import React from "react";
import ColorChanger from "./ColorChanger";
import BackButton from "./BackButton"
function DetailedSpecifications({ product, closeDetails }) {
  const specifications = product.specifications || {};
  const modes = product?.specifications?.Modes || [];
 
  const specFields = [
    { label: "Fast Charging", value: specifications.fastcharging },
    { label: "Boot Space", value: specifications.BootSpace },
    { label: "Bluetooth", value: specifications.Bluetooth },
    { label: "GPS Connectivity", value: specifications.GPSConnectivity },
    { label: "Key Type", value: specifications.KeyType },
    { label: "Peak Power", value: specifications.PeakPower },
    { label: "Motor Type", value: specifications.MotorType },
    { label: "Charger Type & Capacity", value: specifications.ChargerTypeCapacity },
    { label: "Warranty", value: specifications.warranty },
    { label: "Instrument Cluster", value: specifications.Instrumentcluster },
    { label: "Brake Type", value: specifications.BrakeType },
    { label: "Wheel Type", value: specifications.WheelType },
    { label: "Tyre Type", value: specifications.tyretype },
    { label: "ADAS", value: specifications.ADAS },
    { label: "Cruise Control", value: specifications.CruiseControl },
  ];
  return (
    <div className="fixed top-0 left-0 w-full h-full  bg-gray-100 z-30 overflow-y-auto flex flex-col items-center">
      <div className="bg-white flex flex-col items-center gap-4 mx-auto w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[50vw] p-4 rounded-lg shadow-lg">
        <ColorChanger product={product} colour={product.Colours} />
        <h2 className="text-lg sm:text-xl md:text-2xl border border-zinc-700 py-3 px-5 rounded-xl w-full text-center">
          {product.name}
        </h2>
        {product.variants.length > 1 ? (
          <div className="grid grid-cols-3 gap-3 md:grid-cols-3 w-full">
            {product.variants.map((variant, index) => (
              <div key={index} className="border border-zinc-400 p-3 rounded-md flex flex-col gap-2 text-sm sm:text-base">
                <div>
                  <span className="block">Battery</span>
                  <span className="font-semibold">{variant.battery}</span>
                  <hr />
                </div>
                <div>
                  <span className="block">Price Ex.</span>
                  <span className="font-semibold">{variant.price}</span>
                <hr />
                </div>
                <div>
                  <span className="block">Range IDC</span>
                  <span className="font-semibold">{variant.range}</span>
                  <hr />
                </div>
                <div>
                  <span className="block">Top Speed</span>
                  <span className="font-semibold">{variant.topspeed}</span>
                  <hr />
                </div>
                <div>
                  <span className="block">Charging</span>
                  <span className="font-semibold">{variant.chargingTime}</span>
                  <hr />
                </div>
                <div>
                  <span className="block">0 To 40</span>
                  <span className="font-semibold">{variant.acceleration}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          product.variants.map((variant, index) => (
            <div key={index} className="w-full flex flex-col gap-5">
              <div className="border flex flex-col justify-center items-center border-zinc-400 p-4 rounded-md">
                <span className="block text-base sm:text-lg">Price Ex.</span>
                <span className="text-lg font-bold">{variant.price}</span>
              </div>
              <div className="border flex flex-col justify-center items-center border-zinc-400 p-4 rounded-md">
                <span className="block text-base sm:text-lg">Range IDC</span>
                <span className="text-lg font-bold">{variant.range}</span>
              </div>
              <div className="border flex flex-col justify-center items-center border-zinc-400 p-4 rounded-md">
                <span className="block text-base sm:text-lg">Top Speed</span>
                <span className="text-lg font-bold">{variant.topspeed}</span>
              </div>
              <div className="border flex flex-col justify-center items-center border-zinc-400 p-4 rounded-md">
                <span className="block text-base sm:text-lg">Battery</span>
                <span className="text-lg font-bold">{variant.battery}</span>
              </div>
              <div className="border flex flex-col justify-center items-center border-zinc-400 p-4 rounded-md">
                <span className="   block text-base sm:text-lg">ChargingTime</span>
                <span className="text-lg font-bold">{variant.chargingTime}</span>
              </div>
              <div className="border flex flex-col justify-center items-center border-zinc-400 p-4 rounded-md">
                <span className="block text-base sm:text-lg">Acceleration</span>
                <span className="text-lg font-bold">{variant.acceleration}</span>
              </div>
            </div>
          ))
        )}

        {modes.length > 0 && (
          <div className="w-full border  justify-center items-center border-zinc-400 p-4 rounded-md flex flex-wrap gap-3">
            {modes.map((mode, index) => (
              <span key={index} className="border  border-zinc-300 p-2 rounded-md text-sm">
                {mode}
              </span>
            ))}
          </div>
        )}

        {specFields.map((field, index) =>
          field.value ? (
            <div key={index} className="w-full flex flex-col justify-center items-center border border-zinc-400 p-4 rounded-md">
              <span className="block text-base sm:text-lg">{field.label}</span>
              <span className="text-lg font-semibold">{field.value}</span>
            </div>
          ) : null
        )}

       
          <BackButton onClose={closeDetails} />
        
      </div>
    </div>
  );
}
export default DetailedSpecifications;


