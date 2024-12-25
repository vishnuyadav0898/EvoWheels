import React from 'react'

function LeaderCard({data}) {
  return (
    <div className="p-6 text-center text-white">
        <img
      src={data.rankImage}
      alt={data.rankImage}
      className="w-16 h-16 mx-auto mb-4 2xl:h-[7rem] 2xl:w-[7rem]  xl:h-[7rem] xl:w-[7rem]  lg:h-[7rem] lg:w-[7rem]"/>
      <h2 className="text-lg font-semibold 2xl:text-3xl xl:text-2xl lg:text-2xl">{data.name}</h2>
      <p className="text-sm text-gray-100 mb-2 2xl:text-base  xl:text-base">{data.location}</p>
      <h3 className="text-xl font-bold">{data.amountEarned} earned!</h3>
      <p className="text-sm 2xl:text-base  xl:text-base">{data.referrals} successful referrals</p>
              </div>
  )
}

export default LeaderCard