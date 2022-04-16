import house from '../public/house.webp';
import Image from 'next/image';




export default function Section() {
    return (

        <div className="container mx-auto mt-20 md:px-4">
            <div className="flex justify-between">
                <div className="left">
                    <h2 className="text-white bg-black uppercase px-1">Chapter NO. 01</h2>
                </div>
                <div className="right font-serif italic border-t-2 pt-2">
                    <p>In 1939, Holger Nielsen wrote the first chapter of the Vipp <br/> story when he crafted a pedal bin for his wife's hairdressing <br/> salon.</p>
                </div>
            </div>
            <div className="text-center">
                <h1 className="font-serif text-5xl mt-12">Paul Kindt</h1>
            </div>
            <div className="grid grid-cols-1 gap-10 my-12 md:grid-cols-3">
                <div className="col-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper arcu non orci tristique finibus.  Mauris eu laoreet dui. Proin aliquam mi in venenatis fermentum. Quisque tempus dapibus augue, non viverra arcu convallis at. Vivamus laoreet fermentum est sed mattis. Quisque volutpat cursus neque, eu faucibus diam accumsan sed.</p>
                </div>
                <div className="col-2">
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a ante quis purus ultricies gravida ac sit amet nisl. Pellentesque tempus nunc eu quam sagittis pulvinar. Donec vitae nibh purus. Sed pretium augue nec scelerisque ultrices. Phasellus in dapibus justo. Etiam gravida vel lorem eget placerat.</p>
                </div>
                <div className="col-3">
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a ante quis purus ultricies gravida ac sit amet nisl. Pellentesque tempus nunc eu quam sagittis pulvinar. Donec vitae nibh purus. Sed pretium augue nec scelerisque ultrices. Phasellus in dapibus justo. Etiam gravida vel lorem eget placerat.</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 my-3">
                <div className='house-bg'>
                </div>
                <div className="col-span-2 player-wrapper">
                    <iframe className="react-player" width="100%" height="100%" src="https://www.youtube.com/embed/dAc9Lej-3Nc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>




    )
}