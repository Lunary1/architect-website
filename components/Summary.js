import Image from 'next/image';
import house from '../public/house.webp';



export default function Summary() {
    return (

        <>
        <div className="container mx-auto">
            <div className="c-summary__title py-28">
                <span className="text-5xl text-white leading-snug font-medium">Enjoy some of <br/> my projects</span>
            </div>

            <div className="c-summary__grid grid grid-cols-2 mt-10 text-white">
                <div className="c-summary__grid-item pr-14">
                    <figure className="hover-rotate">
                        <Image src={house}/>
                    </figure>
                </div>
                <div className="c-summary__grid-item pl-14 mt-28">
                    <Image src={house}/>
                </div>
            </div>
        </div>
        </>


    )
}