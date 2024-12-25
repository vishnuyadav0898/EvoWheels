import React, { useState } from "react";

function EVvsICEComparison() {
  const [dailyDistance, setDailyDistance] = useState(15);

  
  const fixedCostICE = 3000;
  const maintenanceICE = 1500;

  const fixedCostEV = 2500;
  const maintenanceEV = 1000;

 
  const runningCostICE = dailyDistance * 2 * 30; 
  const runningCostEV = dailyDistance * 0.25 * 30; 

 
  const totalCostICE = fixedCostICE + maintenanceICE + runningCostICE;
  const totalCostEV = fixedCostEV + maintenanceEV + runningCostEV;


  const monthlySavings = totalCostICE - totalCostEV;
  const annualSavings = monthlySavings * 12;




  return (
    <>
      <div className="p-5">
        <div className=" 2xl:mx-16 xl:mx-16 lg:mx-10 md:mx-5 ">
          <h1 className="text-4xl 2xl:text-6xl xl:text-5xl lg:text-4xl font-medium">
            Buying an EV is Money in the bank.
          </h1>
          <p className="mt-3 2xl:text-3xl  xl:text-2xl lg:text-xl">Don't believe us? Calculate for yourself.</p>
          <hr className="bg-black mt-2" />
          <div className="flex justify-start items-center gap-8 mt-5">
            <div className="flex flex-col gap-2">
              <span className="text-green-500 text-2xl 2xl:text-4xl xl:text-3xl lg:text-2xl  font-bold">
                ₹{annualSavings.toLocaleString()}
              </span>
              <p className="text-md 2xl:text-4xl xl:text-3xl lg:text-2xl ">Annual Savings</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-green-500 text-2xl 2xl:text-4xl xl:text-3xl lg:text-2xl  font-bold">
                ₹{monthlySavings.toLocaleString()}
              </span>
              <p className="text-md 2xl:text-4xl xl:text-3xl lg:text-2xl ">Monthly Savings</p>
            </div>
          </div>
          <hr className="bg-black mt-2" />
        </div>

        <h2 className="text-green-500 2xl:mx-16 xl:mx-16 lg:mx-10 md:mx-5 text-2xl 2xl:text-4xl xl:text-3xl lg:text-2xl  font-semibold mt-3 mb-5">
          Talk To our Experts.
        </h2>
        <h3 className="text-xl font-semibold mb-4 
               2xl:text-4xl 2xl:mx-16 
               xl:text-3xl xl:mx-16 
               lg:text-2xl lg:mx-10 
               md:mx-5">
  Daily Distance: <span className="text-green-600">{dailyDistance} km</span>
  </h3>
  <input
      type="range"
       min="15"
       max="150"
       value={dailyDistance}
       onChange={(e) => setDailyDistance(parseInt(e.target.value))}
       className="w-full mb-6 2xl:mx-16 xl:mx-16 lg:mx-10 md:mx-5"
  />


        {/* Bar Chart */}
        <div className="flex items-end space-x-8 w-full justify-center mt-10">
          {/* ICE Scooter */}
          <div className="text-center">
            <div className=" h-64 w-[6rem] sm:w-[7rem] lg:w-[7rem] xl:w-[7rem] 2xl:w-[8rem] bg-gray-200 flex flex-col justify-end">
              {/* Savings */}
              <div
                className="bg-green-500 "
                style={{
                  height: `${(monthlySavings > 0 ? monthlySavings : 0) / 10000 * 100}%`,
                }}
                title={`Savings: ₹${monthlySavings > 0 ? monthlySavings : 0}`}
              ></div>
              {/* Running Cost */}
              <div
                className="bg-violet-500"
                style={{
                  height: `${runningCostICE / 10000 * 100}%`,
                }}
                title={`Running Cost: ₹${runningCostICE}`}
              ></div>
              {/* Fixed Cost & Maintenance */}
              <div
                className="bg-black"
                style={{
                  height: `${(fixedCostICE + maintenanceICE) / 10000 * 100}%`,
                }}
                title={`Fixed Cost: ₹${fixedCostICE + maintenanceICE}`}
              ></div>
            </div>
            <p className="text-sm mt-2 font-medium">ICE Scooter</p>
          </div>

          {/* EV Scooter */}
          <div className="text-center">
            <div className=" h-64 w-[6rem] sm:w-[7rem] lg:w-[7rem] xl:w-[7rem] 2xl:w-[8rem] bg-gray-200 flex flex-col justify-end">
              {/* Savings */}
              <div
                className="bg-green-500"
                style={{
                  height: `${(monthlySavings > 0 ? monthlySavings : 0) / 10000 * 100}%`,
                }}
                title={`Savings: ₹${monthlySavings > 0 ? monthlySavings : 0}`}
              ></div>
              {/* Running Cost */}
              <div
                className="bg-violet-500"
                style={{
                  height: `${runningCostEV / 10000 * 100}%`,
                }}
                title={`Running Cost: ₹${runningCostEV}`}
              ></div>
              {/* Fixed Cost + Maintenance */}
              <div
                className="bg-black"
                style={{
                  height: `${(fixedCostEV + maintenanceEV) / 10000 * 100}%`,
                }}
                title={`Fixed Cost: ₹${fixedCostEV + maintenanceEV}`}
              ></div>
            </div>
            <p className="text-sm mt-2 font-medium">Ola Scooter</p>
          </div>
        </div>

       
        <div className="flex justify-center space-x-4 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-4 bg-black rounded-full"></div>
            <span className="text-sm 2xl:text-2xl xl:text-xl lg:text-lg">Fixed Cost + Maintenance</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-4 bg-violet-500 rounded-full"></div>
            <span className="text-sm 2xl:text-2xl xl:text-xl lg:text-lg">Running Cost</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <span className="text-sm 2xl:text-2xl xl:text-xl lg:text-lg">Savings</span>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm 2xl:px-10   xl:px-8   lg:px-6 mt-6 2xl:text-2xl xl:text-xl lg:text-lg text-gray-500 w-full">
          * The estimated total monthly cost includes EMI,
           maintenance, and running expenses calculated for the price of S1 X(2kWh). 
           Based on electricity and fuel prices in Bangalore as of August 2023, 
           with a daily distance of 30 km.
        </p>
      </div>
      
    </>
  );
}

export default EVvsICEComparison;
