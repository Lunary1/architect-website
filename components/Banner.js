import Image from "next/legacy/image";
import banner from "../public/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="flex justify-center max-w-[20vw] m-auto py-12">
        <Image src={banner} alt={banner} />
      </div>
    </>
  );
};

export default Banner;
