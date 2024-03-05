import { Carousel, ConfigProvider } from "antd";

import FullCard from "../Cards/FullCard/FullCard";
import IAppCarouselProps from "./AppCarousel.types";
import Skeleton from "@components/Skeleton/Skeleton";

import style from "./AppCarousel.module.scss";
const AppCarousel = ({ data }: IAppCarouselProps) => {
  if (!data) {
    return <Skeleton />;
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
