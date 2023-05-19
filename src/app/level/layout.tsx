import React from "react"

type params = {
  children: React.ReactNode,
}

export default function FirstLayout(
  { children }: params
){
  return (
    <div>
      This is the first layout
      {children}
    </div>
  )
}
