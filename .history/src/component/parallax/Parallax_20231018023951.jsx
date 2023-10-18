import { useRef } from 'react';
import  './parallax.scss'
import {motion, useScroll} from "framer-motion"
export default function Parallax({ type }) {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        
    })

  return (
    <div
          className="parallax"
          ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <h1>{type === "services" ? "What We Do?" : "What We Did?"}</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
}
