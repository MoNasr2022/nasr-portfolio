import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const handelSidebar = (document.onclick = function (e) {

    if (e.target.id !== Sidebar && e.target.id !== ToggleButton) { 
      setOpen(false);
    } else if (e.target.id === ToggleButton) (
      
    )
 
  });

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        //restDelta: 2
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      id="Sidebar"
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={handelSidebar} />
    </motion.div>
  );
}
