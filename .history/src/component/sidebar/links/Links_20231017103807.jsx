
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



export default function Links() {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <DeviceMotionEvent.div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </DeviceMotionEvent.div>
  );
}
