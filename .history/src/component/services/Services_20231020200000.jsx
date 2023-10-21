import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    //y:100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
export default function Services() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="container">

    <motion.div
      
      className="services"
      ref={ref}
      variants={variants}
      initial="initial"
      //animate={ "animate" }
      whileInView={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on crafting meaningful digital <br /> experiences
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business.
          </h1>
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div className="box">
          <h2>title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nulla saepe totam aliquam exercitationem molestiae asperiores
            doloremque ad non enim eveniet fuga quaerat dolore eos unde sit,
            tempora numquam itaque soluta sed consequuntur explicabo?
            Blanditiis!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nulla saepe totam aliquam exercitationem molestiae asperiores
            doloremque ad non enim eveniet fuga quaerat dolore eos unde sit,
            tempora numquam itaque soluta sed consequuntur explicabo?
            Blanditiis!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nulla saepe totam aliquam exercitationem molestiae asperiores
            doloremque ad non enim eveniet fuga quaerat dolore eos unde sit,
            tempora numquam itaque soluta sed consequuntur explicabo?
            Blanditiis!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nulla saepe totam aliquam exercitationem molestiae asperiores
            doloremque ad non enim eveniet fuga quaerat dolore eos unde sit,
            tempora numquam itaque soluta sed consequuntur explicabo?
            Blanditiis!
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
      </div>
  );
}
