// import React, { useState, useEffect, useRef } from "react";
// import{Data} from "../ComponentData/HeroVideoData"

// function HeroVideo() {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const videoRef = useRef(null);

//   // Auto-advance video
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideoIndex((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
//     }, 20000);
//     return () => clearInterval(interval);
//   }, []);

//   // Sync video play/pause state
//   useEffect(() => {
//     if (videoRef.current) {
//       isPlaying ? videoRef.current.play() : videoRef.current.pause();
//     }
//   }, [isPlaying]);

//   const toggleMute = () => setIsMuted((prev) => !prev);

//   const togglePlayPause = () => setIsPlaying((prev) => !prev);

//   const nextVideo = () => {
//     setCurrentVideoIndex((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
//   };

//   const previousVideo = () => {
//     setCurrentVideoIndex((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
//   };

//   return (
//     <div className="mt-1">
//       {/* Video Element */}
//       <video
//         ref={videoRef}
//         src={Data[currentVideoIndex]}
//         autoPlay
//         muted={isMuted}
//         loop
//         className="h-[35rem] w-full rounded-xl object-cover"
//       ></video>

//       {/* Controls */}
//       <div className="relative bottom-9 left-3 flex gap-3 items-center">
//         {/* Mute/Unmute */}
//         <button onClick={toggleMute} aria-label="Toggle Mute">
//           {isMuted ? (
//             <i className="fa-solid fa-volume-xmark text-2xl text-red-500 cursor-pointer"></i>
//           ) : (
//             <i className="fa-solid fa-volume-high text-2xl text-white cursor-pointer"></i>
//           )}
//         </button>

//         {/* Play/Pause */}
//         <button onClick={togglePlayPause} aria-label="Toggle Play/Pause">
//           {isPlaying ? (
//             <i className="fa-solid fa-pause text-3xl text-white cursor-pointer"></i>
//           ) : (
//             <i className="fa-solid fa-play text-3xl text-white cursor-pointer"></i>
//           )}
//         </button>

//         {/* Previous/Next */}
//         <div className="flex items-center justify-around w-full">
//           <button onClick={previousVideo} aria-label="Previous Video">
//             <i className="fa-regular fa-circle-left text-2xl opacity-30 hover:opacity-100 text-white cursor-pointer"></i>
//           </button>
//           <button onClick={nextVideo} aria-label="Next Video">
//             <i className="fa-regular fa-circle-right text-2xl opacity-30 hover:opacity-100 text-white cursor-pointer"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroVideo;
import React, { useState, useEffect, useRef } from "react";
import { Data } from "../ComponentData/HeroVideoData";

function HeroVideo() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Auto-advance video
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  // Sync video play/pause state
  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  const toggleMute = () => setIsMuted((prev) => !prev);

  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[20rem] 2xl:h-screen xl:h-[50rem] lg:h-[40rem] sm:h-[30rem]">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={Data[currentVideoIndex]}
        autoPlay
        muted={isMuted}
        loop
        className="h-full w-full object-cover "
      ></video>

      {/* Overlay Controls */}
      <div className="absolute bottom-5 left-5 flex flex-col sm:flex-row sm:gap-5 gap-2 items-center">
        {/* Mute/Unmute */}
        <button onClick={toggleMute} aria-label="Toggle Mute">
          {isMuted ? (
            <i className="fa-solid fa-volume-xmark text-2xl text-red-500 cursor-pointer"></i>
          ) : (
            <i className="fa-solid fa-volume-high text-2xl text-white cursor-pointer"></i>
          )}
        </button>

        {/* Play/Pause */}
        <button onClick={togglePlayPause} aria-label="Toggle Play/Pause">
          {isPlaying ? (
            <i className="fa-solid fa-pause text-3xl text-white cursor-pointer"></i>
          ) : (
            <i className="fa-solid fa-play text-3xl text-white cursor-pointer"></i>
          )}
        </button>

        {/* Previous/Next */}
        <div className="flex items-center justify-between gap-3">
          <button onClick={previousVideo} aria-label="Previous Video">
            <i className="fa-regular fa-circle-left text-2xl opacity-50 hover:opacity-100 text-white cursor-pointer"></i>
          </button>
          <button onClick={nextVideo} aria-label="Next Video">
            <i className="fa-regular fa-circle-right text-2xl opacity-50 hover:opacity-100 text-white cursor-pointer"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroVideo;
