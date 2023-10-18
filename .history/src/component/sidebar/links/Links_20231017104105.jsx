import { motion } from "framer-motion"

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggeredDirection:-1,
    }
  }
}
const itemVariants = {
  open: {
    y: 0,
    opacity:1,
  },
  closed: {
    y: 50,
    opacity:0,
  }
}



export default function Links() {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </motion.div>
  );
}
