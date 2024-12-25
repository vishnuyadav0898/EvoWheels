import React, { useState } from 'react';
import AccesDetails from './AccesDetails';
import{Data} from "../ComponentData/AccessoryStoreData"

function AccessoryStore() {
  // Data for accessories


  const [AcceDetail, setAcceDetail] = useState(false);

  return (
    <div id='Accessories' className="p-4 mt-3">
      <h1 className="text-4xl font-medium 2xl:text-6xl 2xl:px-20 xl:text-6xl xl:px-20 lg:text-6xl lg:px-20">AccessoryStore</h1>
      
      <div className="flex  gap-2 justify-center items-center flex-wrap mt-5 bg-gray-100 2xl:gap-10  xl:mt-16 lg:mt-14 ">
        {Data.accessoryData.map((accessory, index) => (
          <div key={index}>  <img
           
            src={accessory.image}
            alt={accessory.alt}
            className="  rounded-md w-[44vw] 2xl:w-[40vw]"
          />
          
          </div>
        
          
        ))}
      </div>
      
      <button
        onClick={() => setAcceDetail(true)}
        className="p-2 ml-2 rounded-md bg-black text-white mt-1 2xl:ml-40  xl:ml-14  lg:ml-10"
      >
        SEE MORE
      </button>

      {AcceDetail && (
        <AccesDetails  Data={Data.accessories} onClose={() => setAcceDetail(false)} />
      )}
    </div>
  );
}

export default AccessoryStore;
