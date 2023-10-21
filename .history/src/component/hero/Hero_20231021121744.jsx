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
            staggerChildren: 0.1,
        },
    },
    scrollButtn: {
        y: 10,
        opacity: 0,
        transition: {
            duration: 1.5,
            repeat: Infinity,
            //repeatType: "reverse",
        },
    }
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Mohamed Nasr</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="/scroll.png"
            alt="scroll"
            animate="scrollButtn"
          />
        </motion.div>
        <div className="heroImage">
          <img src="/" alt="" />
        </div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Developer | Bridging Tech and Engineering | Petroleum
        Engineering Background
      </motion.div>
    </div>
  );
}
