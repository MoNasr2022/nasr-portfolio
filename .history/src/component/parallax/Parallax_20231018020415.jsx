import  './parallax.scss'

export default function Parallax({type}) {
  return (
      <div className='parallax'>
          <h1>{type === "sevices" ? "What We Do?" : "What We Did?"}</h1>
          <div className="mountains"></div>
    </div>
  )
}
