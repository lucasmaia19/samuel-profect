import React from 'react'

type SkeletonTableProps = {
	amountColumns: number
}

export const SkeletonTable = ({ amountColumns }: SkeletonTableProps) => {
  return (
		<div className='w-full animate-pulse'>
			<div className='w-full h-10 bg-gray-50 rounded-lg mb-2'></div>
			<div className='w-full flex flex-row gap-2'>
				{
					Array.from(Array(amountColumns).keys()).map((_, index) => (
						<div key={index} className={`h-10 rounded-lg flex flex-1 ${index % 2 == 0 ? 'bg-gray-100' : 'bg-gray-400'}`}></div>
					))
				}
			</div>
		</div>
	)
}
