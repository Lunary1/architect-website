import house from '../public/house.webp';
import Image from 'next/image';


const pic = "https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB"




export default function Section() {
    return (

        <div className="container px-4 md:mx-auto mt-20 text-white">
            <div className="md:flex justify-between">
                <div className="left">
                    <h2 className="text-white bg-black uppercase px-1 h-0 md:h-auto">Chapter NO. 01</h2>
                </div>
                <div className="right font-serif italic border-t-2 pt-2 text-xl">
                    <p>In 1939, Holger Nielsen wrote the first chapter of the Vipp <br/> story when he crafted a pedal bin for his wife&apos;s hairdressing <br/> salon.</p>
                </div>
            </div>
            <div className="text-center">
                <h1 className="font-serif text-5xl my-16">Paul Kindt</h1>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div className="col-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper arcu non orci tristique finibus.  Mauris eu laoreet dui. Proin aliquam mi in venenatis fermentum. Quisque tempus dapibus augue, non viverra arcu convallis at. Vivamus laoreet fermentum est sed mattis. Quisque volutpat cursus neque, eu faucibus diam accumsan sed.</p>
                    <br />
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a ante quis purus ultricies gravida ac sit amet nisl. </p>
                </div>
                <div className="col-2">
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a ante quis purus ultricies gravida ac sit amet nisl. <strong>Pellentesque tempus nunc eu quam sagittis pulvinar. Donec vitae nibh purus.</strong>  Sed pretium augue nec scelerisque ultrices. Phasellus in dapibus justo. Etiam gravida vel lorem eget placerat.</p>
                    <br/>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a ante quis purus ultricies gravida ac sit amet nisl. Pellentesque tempus nunc eu quam sagittis pulvinar. Donec vitae nibh purus. Sed pretium augue nec scelerisque ultrices. Phasellus in dapibus justo. Etiam gravida vel lorem eget placerat.</p>
                </div>
                <div className="col-3">
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a ante quis purus ultricies gravida ac sit amet nisl. Pellentesque tempus nunc eu quam sagittis pulvinar. Donec vitae nibh purus. Sed pretium augue nec scelerisque ultrices. Phasellus in dapibus justo. Etiam gravida vel lorem eget placerat.</p>
                </div>
            </div>

            <div className="text-center">
                <h1 className="font-serif text-5xl my-8 md:my-16">Recente projecten</h1>
            </div>

            <div className="grid grid-cols-1 gap-2 my-8 md:grid-cols-3">
                <div className="carousel col-span-3">
                    <div className="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2" alt="Burger" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB" alt="Burger" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6" alt="Burger" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693" alt="Burger" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7" alt="Burger" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094" alt="Burger" />
                    </div> 
                    <div className="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A" alt="Burger" />
                    </div>
                </div>
            </div>
        </div>




    )
}