import React from 'react'

type TableHeadProps = {
  children: React.ReactNode
}

export const TableHead = ({ children }: TableHeadProps) => {
  return (
    <>
      <thead className="bg-gray-50">
        <tr>{children}</tr>
      </thead>
    </>
  )
}
