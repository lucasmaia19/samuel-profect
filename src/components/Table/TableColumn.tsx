import React from 'react'

type TableColumnProps = {
  key: number
  column: string
}

export const TableColumn = ({ key, column }: TableColumnProps) => {
  return (
    <th
      key={key}
      className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500"
    >
      {column}
    </th>
  )
}
