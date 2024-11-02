import Albums from "@/features/landing/components/Albums";
import Join from "@/features/landing/components/Join";
import Studios from "@/features/landing/components/Studios";
import Testimonials from "@/features/landing/components/Testimonials";
import { Button } from "@scrollz/ui";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      {/* Header */}
      <header className="relative w-[100%] h-[100svh]">
        <Image
          width={1000}
          height={1000}
          src="https://res.cloudinary.com/dplxh8dad/image/upload/v1704603640/scrollz/Section_dfu9te.png"
          alt="home-page header background"
          className="w-full h-[100svh] object-cover lg:bg-top"
        />
        <article className="absolute px-[60px] top-0 pt-[10px] w-full h-full flex flex-row items-center justify-between">
          <div className="w-full ml-[70px]">
            <h1 className="w-full">
              <span className="text-[#120A2B] font-bold text-7xl">
                Discover,{" "}
              </span>
              <Button>lorem</Button>
              <span className="text-red-500 font-bold text-7xl">explore</span>
              <span className="text-[#120A2B] font-bold text-7xl">
                , <br /> and{" "}
              </span>
              <span className="text-red-500 font-bold text-7xl">
                rediscover
              </span>{" "}
              <br />
              <span className="text-[#120A2B] font-bold text-7xl">
                {" "}
                music like never
              </span>
              <br />
              <span className="text-[#120A2B] font-bold text-7xl">before</span>
            </h1>
          </div>
          <div className="w-full lg:h-[100%] flex flex-col items-center justify-end pr-[60px]">
            <div className="w-full flex flex-row justify-end">
              <Image
                src="https://res.cloudinary.com/dplxh8dad/image/upload/v1708355420/scrollz/div.image_container__ENOPp_1_gmwvfg.png"
                alt=""
                width={1000}
                height={1000}
                className="w-[177px] h-[177px] lg:w-[353px] lg:h-[353px] float-right"
              />
            </div>
            <div className="w-full flex flex-row">
              <Image
                src="https://res.cloudinary.com/dplxh8dad/image/upload/v1708355421/scrollz/div.image_container__ENOPp_t9lpcz.png"
                className=" float-end w-[280px] h-[187px] lg:w-[355px] lg:h-[255px]"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </article>
      </header>

      <main className="px-[120px]">
        {/* Studios */}
        <Studios />

        {/* Join us */}
        <Join />

        {/* Albums */}
        <Albums />

        {/* Tstimonails */}
        <Testimonials />
      </main>
    </section>
  );
}
