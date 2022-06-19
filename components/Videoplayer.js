import ReactPlayer from "react-player"
import dynamic from 'next/dynamic'


export default function Videoplayer() {
    return (

            <div className="c-video my-32">
              <ReactPlayer url="https://vimeo.com/721970052" width={1920} />
            </div>


    )
}


