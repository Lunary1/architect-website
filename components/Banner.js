import Image from "next/image"
import banner from "../public/banner.jpg"

const Banner = () => {
    return (


        <>
        
        <div className="flex justify-center max-w-[20vw] m-auto py-12">
            <Image src={banner}  />

        </div>
        
        </>
    )
}

export default Banner