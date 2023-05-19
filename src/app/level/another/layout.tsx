'use client'

type params = {
  children: React.ReactNode,
}

export default function SecondLayout(
  { children }: params,
) {
  return (
    <div>
      This is the second layout
      {children}
    </div>
  )
}
