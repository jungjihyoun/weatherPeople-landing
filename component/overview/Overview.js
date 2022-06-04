import { useRef, useEffect } from "react";
import style from "./Overview.module.scss";

const Overview = () => (
  <section className={style['overview']}>
    <text className={style['overview__title']}>Over view</text>

    <div className={style['overview__text-group']}>
      <p className={style['overview__text--bold']}>“웨더피플은 날씨에 관련된 경험을 공유하고, 소통하는 서비스 입니다.” </p>
      <p className={style['overview__text--light']}>사람들이 직접 경험한 오늘의 날씨정보를 토대로 옷차림을 공유한다면, <br/>
        내가 직접 느낀 날씨를 기록할 수 있다면 어떨까요?</p>
      <p className={style['overview__text--light']}>다양한 경험을 토대로 날씨정보의 오차를 좁히며 오늘의 옷차림을 빠르게 제안합니다.</p>
    </div>
  </section>

)

export default Overview