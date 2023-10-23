import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (open && !document.getElementById("Sidebar").contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const variants = {
    open: {
      clipPath: "circle(1500px at 50px 50px)",
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
        <Links setOpen={toggleSidebar} />
      </motion.div>
      <ToggleButton setOpen={toggleSidebar} />
    </motion.div>
  );
}
