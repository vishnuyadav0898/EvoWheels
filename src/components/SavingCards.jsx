function SavingCards({ image, title, cost, savings, text }) {
    return (
      <div className="flex flex-col h-full justify-center items-center text-center ">
        <img
          src={image}
          alt="savingcard"
          className="w-full h-auto object-contain rounded-lg"
        />
        <h1 className="text-2xl font-extrabold mt-5 mx-4 2xl:text-4xl">{title}</h1>
        <p className="opacity-50 font-semibold mt-5 2xl:text-2xl xl:text-xl">{text.perday}</p>
        <h1 className="text-3xl font-bold">{cost.daily}</h1>
        {savings && (
          <>
            <p className="text-green-600 mt-2 2xl:text-2xl  xl:text-xl">{savings.savingperc}</p>
          </>
        )}
        <p className="opacity-50 font-semibold mt-5 2xl:text-xl">{text.perkm}</p>
        <h1 className="text-3xl font-bold">{cost.perKm}</h1>
  
        {savings && (
          <p className="text-green-600 mt-2 2xl:text-xl">{savings.savingperkm}</p>
        )}
      </div>
    );
  }
  
  export default SavingCards;
  