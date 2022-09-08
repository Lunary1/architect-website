import Image from 'next/image';
import house from '../public/house.webp';
import Link from 'next/link';



export default function Summary() {
    return (

        <>
        <div className="projects bg-white">
            <div className="mx-auto">
                <div className="c-summary__title text-center py-8">
                    <span className="text-3xl text-black uppercase">Stijlen</span>
                </div>
                <div className="c-summary__grid grid lg:grid-cols-3 sm:grid-cols-2 gap-1 text-white">
                    <Link href={`/contact`} passHref>
                        <div className="c-summary__grid-item">
                            <figure className="hover-rotate">
                                <Image className='c-summary__grid-image' src={house}/>
                                <div className="c-summary__grid-overlay">
                                    <div className="c-summary__grid-text">Residentieel modern</div>
                                </div>
                            </figure>
                        </div>
                    </Link>
                    <Link href={`/contact`} passHref>
                        <div className="c-summary__grid-item">
                            <figure className="hover-rotate">
                                <Image className='c-summary__grid-image' src={house}/>
                                <div className="c-summary__grid-overlay">
                                    <div className="c-summary__grid-text">Residentieel klassiek</div>
                                </div>
                            </figure>
                        </div>
                    </Link>
                    <Link href={`/contact`} passHref>
                        <div className="c-summary__grid-item">
                            <figure className="hover-rotate">
                                <Image className='c-summary__grid-image' src={house}/>
                                <div className="c-summary__grid-overlay">
                                    <div className="c-summary__grid-text">Kantoor- en industriebouw</div>
                                </div>
                            </figure>
                        </div>
                    </Link>
                    <Link href={`/contact`} passHref>
                        <div className="c-summary__grid-item">
                            <figure className="hover-rotate">
                                <Image className='c-summary__grid-image' src={house}/>
                                <div className="c-summary__grid-overlay">
                                    <div className="c-summary__grid-text">Interieur</div>
                                </div>
                            </figure>
                        </div>
                    </Link>
                </div>
            </div>    
        </div>
        </>


    )
}