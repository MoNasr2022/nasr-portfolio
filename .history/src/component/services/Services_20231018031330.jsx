import './services.scss'
import {motion } from "framer-motion";
export default function Services() {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
            I focus on crafting <br /> meaningful digital <br /> experiences
        </p>
      </motion.div>
          <motion.div className="titleContainer">
              <div className="title">
                  <img src="/people.webg" alt="" />
                  <h1><b>U</b></h1>
              </div>
      </motion.div>
      <motion.div className="listContainer"></motion.div>
    </motion.div>
  );
}
