import { useRef, useEffect } from "react";
import { FullPage, Slide } from 'react-full-page';
import Main from 'component/main/Main'
import Overview from 'component/overview/Overview'
import Background from "../component/background/Background";


export default function Home() {

  return (
    <FullPage duration={1700} controls controlsProps={{className: 'controls'}}>
      <Slide><Main /></Slide>
      <Slide><Overview /></Slide>
      <Slide><Background /></Slide>
    </FullPage>
  )
}
