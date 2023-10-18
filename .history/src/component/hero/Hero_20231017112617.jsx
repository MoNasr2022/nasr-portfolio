import "./hero.scss";
import { motion } from "framer-motion";


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
}
export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Mohamed Nasr</h2>
          <h1>Web developer and UI designer</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="scroll" />
        </div>
      </div>

      <div className="slidingTextContainer">
        Software Developer | Bridging Tech and Engineering | Petroleum
        Engineering Background
      </div>
      <div className="heroImage">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
}
