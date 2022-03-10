import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function NFTCard(props) {
  const router = useRouter()
  function onClickCard(e) {
    router.push('/nft')
    e.preventDefault()
  }
  return (
    <div
      className={`bg-gradient-to-t from-darkest_gold to-medium_gold inline-block p-[20px] rounded-[16px] ${props.className}`}
      onClick={e => onClickCard(e)}
    >
      <video width="690" autoPlay="autoplay" muted="muted" defaultMuted="defaultmuted" loop="loop" metadata playsinline>
        <source src="gd-token.mp4" type="video/mp4" />
        <source src="gd-token.mp4" type="video/ogg" />
        Your browser does not support HTML video.
      </video>

      <div className="text-center font-bold text-white my-[28px] space-y-[10px]">
        <p>MINT PRICE</p>
        {/* <p className="text-[15pt]">1 ETH (2,624.28$)</p> */}
        <p className="text-[15pt]">1 ETH</p>
      </div>
    </div>
  )
}
