"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default function TypingEffect({
  strings = [],
  typeSpeed = 50,
  backSpeed = 50,
  loop = true,
  showCursor = true,
  className = "",
  contentType = "html"
}) {
  const el = useRef(null)
  const typedInstance = useRef(null)

  useEffect(() => {
    if (!strings.length) return

    typedInstance.current = new Typed(el.current, {
  strings,
  typeSpeed,
  backSpeed,
  showCursor: false,
  loop,
  contentType: "html" // ESSENCIAL
})
    return () => {
      typedInstance.current?.destroy()
    }
  }, [strings, typeSpeed, backSpeed, loop])

  return (
  <span className={`inline-flex items-baseline ${className}`}>
    <span ref={el} />
    {!showCursor && <span className="cursor" />}
  </span>
)
}