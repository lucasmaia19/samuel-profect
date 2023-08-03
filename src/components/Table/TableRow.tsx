import React from 'react'

type TableRowProps = {
  index: number
  children: React.ReactNode
}

export const TableRow = ({ index, children }: TableRowProps) => {
  return (
    <tr
      className={`{ cursor-pointer transition-all duration-75 hover:bg-sky-300
		active:bg-sky-300/70
			${index % 2 == 0 ? 'bg-gray-200' : 'bg-gray-100'}
		}`}
    >
      {children}
    </tr>
  )
}
