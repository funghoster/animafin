import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { resetAnimeContent } from "@store/animeListSlice";
import getAnimeThunk from "@store/thunks/getAnime";

import style from "./AnimePage.module.scss";
import Skeleton from "@components/Skeleton/Skeleton";
import { ErrorPage } from "..";
import { Collapse } from "antd";
import CustomPlayer from "@components/CustomPlayer/CustomPlayer";
import Title from "antd/es/typography/Title";

const AnimePage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.animeList.animeContent);
  console.log(data);
  useEffect(() => {
    dispatch(getAnimeThunk(id));
    return () => {
      dispatch(resetAnimeContent());
    };
  }, []);
  if (!data.finish) {
    return (
      <div className={style.wrapper}>
        <div className={style.image}>
          <Skeleton />
        </div>
        <div className={style.player}>
          <Skeleton />
        </div>
        <div className={style.footer}>
          <Skeleton />
        </div>
      </div>
    );
  }
  if (data.error) {
    return <ErrorPage />;
  }
  return (
    <>
      <div className={style.titleWrapper}>
        <Title className={style.title}>{data.data?.name}</Title>
        {data.data?.subname && (
          <Title level={2} style={{ fontSize: 18 }} className={style.subTitle}>
            {data.data?.subname}
          </Title>
        )}
      </div>
      <div className={style.wrapper}>
        <CustomPlayer />
        <div className={style.footer}>
          <Collapse
            size="large"
            items={[
              {
                key: "1",
                label: "Описание",
                children: (
                  <div className={style.imageWrapper}>
                    <img
                      className={style.image}
                      src={data.data?.poster}
                      alt="poster"
                      loading="lazy"
                    />
                  </div>
                ),
              },
            ]}
          />
          <Collapse
            size="large"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: "Сезоны",
                children: <p>hey</p>,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default AnimePage;
