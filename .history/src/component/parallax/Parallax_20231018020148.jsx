import  './parallax.scss'

export default function Parallax({type}) {
  return (
      <div className='parallax'>
        <h1>{type === "sev"}</h1>
    </div>
  )
}
