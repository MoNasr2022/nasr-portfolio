import { useEffect, useState } from "react"
import "./cursor.scss"
import {moti}

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    
    useEffect((e) => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", onMouseMove)
        return () => {
            window.removeEventListener("mousemove", onMouseMove)
        }
    })
  return (
    <div className="cursor">
      
    </div>
  )
}
