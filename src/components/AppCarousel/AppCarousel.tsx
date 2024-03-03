import { useEffect, useState } from "react";
import { Carousel, ConfigProvider } from "antd";

import FullCard from "../Cards/FullCard/FullCard";
import { IAnimeBlock, animeList } from "../Cards/constans/card";

import style from "./AppCarousel.module.scss";

const AppCarousel = () => {
  const [data, setData] = useState<IAnimeBlock[] | null>(null);
  useEffect(() => {
    setTimeout(() => setData(animeList), 5000);
  }, []);

  if (!data) {
    return <div className={style.skeleton}></div>;
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotActiveWidth: 48,
            dotWidth: 8,
          },
        },
      }}
    >
      <Carousel autoplay className={style.carousel} autoplaySpeed={5000}>
        {data.map((item) => (
          <FullCard key={item.id} data={item} />
        ))}
      </Carousel>
    </ConfigProvider>
  );
};

export default AppCarousel;
