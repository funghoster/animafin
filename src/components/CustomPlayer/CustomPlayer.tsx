import ReactPlayer from "react-player";
import style from "./CustomPlayer.module.scss";
import { useResize } from "@hooks/useResize";

const CustomPlayer = () => {
  const { width } = useResize();
  console.log(width);
  return (
    <div className={style.wrapper}>
      <div className={style.playerWrapper}>
        <ReactPlayer
          className={style.reactPlayer}
          height={"100%"}
          width={"100%"}
          url="https://www.youtube.com/watch?v=EohPsrO6qZ0"
        />
      </div>
      <div className={style.route}>Серии</div>
    </div>
  );
};

export default CustomPlayer;
