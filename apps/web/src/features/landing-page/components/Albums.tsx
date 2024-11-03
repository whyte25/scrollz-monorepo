import { albums } from "@/constants/display-albums";
import { Button, Card, CardDescription, CardTitle } from "@scrollz/ui";

import Image from "next/image";

const Albums = () => {
  return (
    <section className="py-[60px]">
      <h2 className="text-[#120A2B] font-bold text-6xl">
        Unwind and enjoy musical sensations with our upcoming events
      </h2>
      <div className="grid grid-cols-2 gap-[50px] w-full my-[32px]">
        {albums.map((el, index) => (
          <Card key={index} className="w-full border-none">
            <Image
              width={1000}
              height={1000}
              className="w-[100%] lg:h-[544px] 4xl:h-[532.36px] rounded-[22.28px]"
              src={el.src}
              alt="album"
            />
            <CardTitle className="text-[#E34747] font-medium text-2xl mt-[24px]">
              {el.name}
            </CardTitle>
            <CardDescription className="text-[#000000] font-medium text-2xl">
              {el.desc}
            </CardDescription>
          </Card>
        ))}
      </div>
      <Button className="">Register your event</Button>
    </section>
  );
};

export default Albums;
