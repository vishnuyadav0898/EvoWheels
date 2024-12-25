import React from 'react'
import GeneralSection from './GeneralSection';
import AboutMain from './AboutMain';
import AboutEng from './AboutEng';
import AboutFutureSection from './AboutFutureSection';
import AboutOurPeople from './AboutOurPeople';
import AboutBlog from './AboutBlog';
import Footerimagesection from './Footerimagesection';
import{Data} from "../ComponentData/AboutData"

function About() {
  return (<>
    <div id='about' className='p-1 mt-3  '>
      <h1 className='text-4xl font-medium px-5  mb-2 2xl:text-6xl 2xl:px-20  xl:text-5xl xl:px-16  lg:text-5xl lg:px-14'>{Data.header.title}</h1>
      <p className='px-5 pb-3 2xl:text-4xl 2xl:px-20 2xl:pb-10 xl:text-3xl xl:px-16 xl:pb-10 lg:text-3xl lg:px-14 lg:pb-10'>{Data.header.description}</p>
      <GeneralSection stats={Data.header.stats}title={Data.header.imagetitle}subtitle={Data.header.imagesubtitle}images={Data.header.images}/>
      {/* mainsection */}
      <div className='flex justify-center items-center  2xl:px-40 2xl:mt-16  xl:px-32 xl:mt-16  lg:px-28 lg:mt-10'>
         <h1 className='text-xl px-4    2xl:text-5xl  2xl:leading-normal   xl:text-4xl  xl:leading-normal  lg:text-4xl  lg:leading-normal  '>{Data.header.headerdescription}</h1>
     </div>
     
      <AboutMain title={Data.mainsection.title}sections={Data.mainsection.sections}images={Data.mainsection.images}btpara={Data.mainsection.bottompara}/>
    </div>
    <div className='p-4 bg-black text-white'>
      {/* engineeringsection */}
      <AboutEng title={Data.keyspecdata.title}description={Data.keyspecdata.description}stats={Data.keyspecdata.Stats}para={Data.keyspecdata.para}/>
      {/* aboutfuturesection */}
      <AboutFutureSection title={Data.futureReadydata.title}data={Data.futureReadydata.Data}/>
      {/* Our People Section */}
      <AboutOurPeople title={Data.peopleData.title}description={Data.peopleData.description}image={Data.peopleData.imgSrc}/>
      {/* Blogs Section */}
      <AboutBlog title={Data.blogsdata.title}data={Data.blogsdata.Data}/>
      {/* Footer Section */}
      <Footerimagesection title={Data.footerSectionData.title}para={Data.footerSectionData.description}images={Data.footerSectionData.image}/>
    </div>
    </> )
}
export default About

