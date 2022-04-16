import house from '../public/house.webp';
import Image from 'next/image';




export default function Section() {
    return (

        <div className="container mx-auto mt-20 md:px-4">
            <div className="flex justify-between">
                <div className="left">
                    <h2 className="text-white bg-black uppercase px-1">Chapter NO. 01</h2>
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
                <h1 className="font-serif text-5xl my-16">Media</h1>
            </div>

            <div className="grid grid-cols-3 gap-2 my-3">
                <div className="carousel">
                    <div className="carousel-item w-full">
                        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div> 
                    <div className="carousel-item w-full">
                        <img src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A" className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                </div>
                <div className="col-span-2 player-wrapper">
                    <iframe className="react-player" width="100%" height="100%" src="https://www.youtube.com/embed/dAc9Lej-3Nc?version=3&vq=hd720" title="Architect Paul Kindt Reportage" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>




    )
}