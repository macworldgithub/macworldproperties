import video from "../../../assets/video/video.mp4";
import Filters from "./Filters";
const Hero = () => {
  return (
    <div className="relative">
      <div className="relative h-screen flex items-center justify-center   overflow-hidden">
        {/* <video
          id="v"
          poster=""
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          className="w-full" // Use "w-full" to make it responsive
          alt=""
          width="640" // Set the width of your video
          height="160" // Set the height of your video
        >
          <source
            src={video} // Use the imported video file as the source
            type="video/mp4"
          />
        </video> */}

        <div
          className="absolute inset-0 h-full"
          style={{
            backgroundImage: "url('/hero-banner.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="inset-0 flex flex-col items-center h-full justify-center align-center mx-auto"
          // style={{ }
          >
            <div className="mx-auto lg:mt-[15vh] backdrop-blur-[3px] p-6">
              <h1 className="text-center heading-h1 2xla:text-5xl">
                SAFEST WAY TO BUY, RENT & SELL YOUR PROPERTIES
              </h1>
              <h5 className="justify-center text-center	 sub-heading1 align-center mx-auto 2xla:text-3xl pb-1">
                Indulge in extravagance with our opulent and luxurious real estate
                properties!
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 lg:my-0 lg:absolute  lg:bottom-10 w-full">
        <Filters />
      </div>
    </div>
  );
};

export default Hero;
