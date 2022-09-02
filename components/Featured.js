import Image from 'next/image';
import house from '../public/house.webp';
import ReactPlayer from "react-player"




export default function Featured() {
    return (

        <div className="container mx-auto py-28 px-16">
            <div className="c-header flex justify-between">
                <p className="text-6xl leading-snug text-white">Architect Paul Kindt makes a <br/> difference by engineering <br/> smooth experiences.</p>
                <div className="c-btn-container self-end">
                    <button><span>Contact</span></button>
                </div>
            </div>
        </div>


    )
}