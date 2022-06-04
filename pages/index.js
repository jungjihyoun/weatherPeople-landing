import { useRef, useEffect } from "react";
import Main from 'component/main/Main'
import Overview from 'component/overview/Overview'
import Background from "../component/background/Background";


export default function Home() {
  return (
    <div>
        <Main />
        <Overview />
        <Background />
    </div>
  )
}
