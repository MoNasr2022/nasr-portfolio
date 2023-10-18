import  './parallax.scss'

export default function Parallax({type}) {
  return (
      <div className='parallax'>
        <h1>{type === "sevices":"What We "}</h1>
    </div>
  )
}
