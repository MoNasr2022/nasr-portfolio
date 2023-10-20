import './services.scss'
import { motion } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y:100,
        opacity: 0
    },
    animate: {
        x: 0,
        y:0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
}
export default function Services() {

  return (
    <motion.div className="services" variants={variants} initial="initial" animate>
      <motion.div className="textContainer">
        <p>
          I focus on crafting meaningful digital <br /> experiences
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique </b>ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your </b>Business.
          </h1>
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
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
  );
}
