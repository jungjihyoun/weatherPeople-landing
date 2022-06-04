import { useRef, useEffect } from "react";
import style from "./Background.module.scss";

const Background = () => (
  <section className={style['Background']} id="container">
    <text className={style['Background__title']}>Background</text>

    <div className={style['Background__text-group']}>
      <img src={"/images/background-cloud.png"} alt="cloud"/>

      <p className={style['Background__text--bold']}>“On a digital platform, <br/>
        individuals act as creators as well as content consumers through records.”</p>
      <p className={style['Background__text--mid']}>수많은 디지털 플랫폼에서 개인은 기록을 통해 콘텐츠 소비자 뿐 아니라 창작자로 활동합니다. </p>
      <p className={style['Background__text--light']}>네이버에 따르면, 2021년 새로 생성된 블로그 수는 2020년보다 7.14% 증가한 약 200만개로 집계됐습니다. 회사 측에 따르면 현재 전체 네이버 블로그 운영자 중 약 70%가 MZ세대 인 것으로 나타났습니다. 예쁜 사진으로 ‘자랑' 하는 것이 아닌 글로 자신의 일상을 ‘기록' 하고 싶어하는 MZ세대가 늘어난 것으로 볼 수 있습니다. (출처 / 한국일보 정혜린기자, “자랑에서 ‘기록'으로 나만의 일기장이 된 sns” </p>
    </div>
  </section>

)

export default Background