import { Carousel, ConfigProvider } from "antd";
import style from "./AppCarousel.module.scss";
import FullCard from "../Cards/FullCard/FullCard";

const AppCarousel = () => {
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
      <Carousel autoplay className={style.carousel} speed={1000}>
        <div>
          <FullCard />
        </div>
        <div>
          <FullCard />
        </div>
        <div>
          <FullCard />
        </div>
        <div>
          <FullCard />
        </div>
      </Carousel>
    </ConfigProvider>
  );
};

export default AppCarousel;
