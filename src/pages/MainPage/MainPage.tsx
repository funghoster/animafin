import AppCarousel from "@components/AppCarousel/AppCarousel";
import { useAppSelector } from "@hooks/hooks";

const MainPage = () => {
  const data = useAppSelector((state) => state.animeList.animePosters);
  console.log(data);
  return <AppCarousel data={data} />;
};

export default MainPage;
