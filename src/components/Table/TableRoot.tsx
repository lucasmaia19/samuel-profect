import React from 'react'

type TableRootProps = {
  children: React.ReactNode
}

export const TableRoot = ({ children }: TableRootProps) => {
  return (
    <div className="overflow-auto rounded-lg shadow h-2/3">
      <table className="w-full">{children}</table>
    </div>
  )
}
