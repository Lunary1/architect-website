import Image from 'next/image';
import house from '../public/house.webp';



export default function Summary() {
    return (

        <>
        <div className="mx-auto py-20">
            <div className="c-summary__title text-center mb-12">
                <span className="text-3xl text-white uppercase">Projects</span>
            </div>
            <div className="c-summary__grid grid lg:grid-cols-3 sm:grid-cols-2 text-white">
                <div className="c-summary__grid-item">
                    <figure className="hover-rotate">
                        <Image src={house}/>
                    </figure>
                </div>
                <div className="c-summary__grid-item">
                    <figure className="hover-rotate">
                        <Image src={house}/>
                    </figure>
                </div>
                <div className="c-summary__grid-item">
                    <figure className="hover-rotate">
                        <Image src={house}/>
                    </figure>
                </div>
            </div>
        </div>
        </>


    )
}