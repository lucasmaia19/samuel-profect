import React, { ComponentProps } from 'react'

type TableCellProps = ComponentProps<'td'> & {
  value: string | number
}

export const TableCell = ({ value, ...props }: TableCellProps) => {
  return (
    <>
      <td
        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
        {...props}
      >
        {value}
      </td>
    </>
  )
}
