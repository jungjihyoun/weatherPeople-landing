import { useRef, useEffect } from "react";
import style from "./Main.module.scss";

const Main = () => (
  <section className={style['main-section']}>
    <div className={style.texts}>
      <text>Weather people</text>
      <text>
        “웨더피플은 날씨에 관련된 경험을 공유하고, 소통하는 서비스 입니다.” <br/>
        다양한 경험을 토대로 날씨정보의 오차를 좁히며 오늘의 옷차림을 빠르게 제안합니다. </text>
    </div>

    <span className={style.images}>
      <img alt="main" src="/images/main-msg.png"/>
      <img alt="main" src="/images/main-people.png"/>
    </span>

  </section>

)

export default Main