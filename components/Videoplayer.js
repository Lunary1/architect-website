import ReactPlayer from "react-player"
import dynamic from 'next/dynamic'
import house from '../public/house.webp'
import Image from "next/image"


export default function Videoplayer() {
    return (

            <div className="c-video">
              <Image src={house} width={1920} height={1080} />
            </div>


    )
}


