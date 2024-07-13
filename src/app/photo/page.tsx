import Image from "next/image";
import React from "react";

import dog1 from "../../../public/image/dog1.png";
import dog2 from "../../../public/image/dog2.png";
import dog3 from "../../../public/image/dog3.png";
import dog4 from "../../../public/image/dog4.png";

const PhotoPage = () => {
  return (
    <div className="container">
      <h1 className="text-2xl mb-8 font-semibold">My Photos</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative h-60 overflow-hidden">
          <Image
            fill
            src={dog1}
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vh,50vh"
            priority={true}
            placeholder="blur"
          />
        </div>
        <div className="relative h-60 overflow-hidden">
          <Image
            fill
            src={dog2}
            className="object-cover w-full h-full"
            priority={true}
            placeholder="blur"
          />
        </div>
        <div className="relative h-60 overflow-hidden">
          <Image
            fill
            src={dog3}
            className="object-cover w-full h-full"
            placeholder="blur"
          />
        </div>
        <div className="relative h-60 overflow-hidden">
          <Image
            fill
            src={dog4}
            className="object-cover w-full h-full"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
