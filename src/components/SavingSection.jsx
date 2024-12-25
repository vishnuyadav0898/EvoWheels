import React from 'react'
import CommonBtn from './CommonBtn'
import SavingCards from './SavingCards'

function SavingSection({title,description,cards,bottomtext}) {
  
  return (
   <div className="px-4 mt-5 2xl:p-20  xl:p-20  lg:p-14">
    <h1 className="text-2xl font-semibold w-3/4 2xl:text-6xl  xl:text-5xl  lg:text-5xl">{title}</h1>
    <p className="opacity-70 mt-2 2xl:text-4xl xl:text-3xl lg:text-3xl">{description}</p>
    <CommonBtn btnText={"Calculate Savings"}/>
    <div className="flex gap-2 mt-5 justify-center items-center">
    {cards.map((card, index) => (
    <div
    key={index}
    className="bg-gray-100 w-[300px] h-[33rem] flex flex-col justify-center items-center rounded-xl pb-5   2xl:w-[30rem] 2xl:h-[55rem]  xl:h-[50rem] xl:w-[27rem]  lg:h-[40rem] md:h-[40rem]" >
    <SavingCards image={card.image}title={card.title}cost={card.cost}savings={card.saving}text={card.text}/>
    </div>
    ))}
    </div>
    <div className='  flex justify-center'>
        <p className='text-sm  opacity-50 2xl:text-2xl mt-5 '>{bottomtext}</p>
    </div>
   
</div>
 

  )
}

export default SavingSection