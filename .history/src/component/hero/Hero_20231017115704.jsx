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
            staggerChildren:0.1,
        },
    },
    scrollButtn:{
        y: 10,
        opacity: 0,
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
}
export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2>Mohamed Nasr</motion.h2>
          <motion.h1>Web developer and UI designer</motion.h1>
          <motion.div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </motion.div>
          <motion.img src="/scroll.png" alt="scroll" />
        </motion.div>
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
