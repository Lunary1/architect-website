import Image from 'next/image';
import house from '../public/house.webp';
import ReactPlayer from "react-player"



export default function Featured() {
    return (

        <div className="container mx-auto">
            <div className="c-header flex justify-between px-16">
                <p className="text-5xl font-semibold  leading-normal text-white">Architect Paul Kindt makes a <br/> difference by engineering <br/> smooth experiences.</p>
                <div className="c-btn-container self-end">
                    <button><span>Contact</span></button>
                </div>
            </div>
        </div>


    )
}