'use client'

type BodyRootProps = {
  children: React.ReactNode
  namePage?: string
  toggleMenu: (state?: boolean) => void
}

export default function BodyRoot({
  children,
  namePage = '',
  toggleMenu,
}: BodyRootProps) {
  return (
    <div
      className={`flex h-full w-screen flex-col rounded-xl bg-gray-200 p-7 shadow-xl shadow-gray-300 transition-all duration-200 md:flex-1`}
    >
      <div className="flex flex-row items-center text-gray-700/60 lg:text-gray-700">
        <div className="static flex w-full lg:hidden">
          <div
            className="flex h-5 w-7 cursor-pointer flex-col gap-1"
            onClick={() => toggleMenu()}
          >
            <div className="h-full w-full rounded-full bg-gray-700/60" />
            <div className="h-full w-full rounded-full bg-gray-700/60" />
            <div className="h-full w-full rounded-full bg-gray-700/60" />
          </div>
        </div>

        <h1 className="text-xl font-medium text-gray-500 lg:text-2xl">
          {namePage}
        </h1>
      </div>

      <hr className="my-5 h-1 w-full rounded-full bg-sky-400" />
      {children}
    </div>
  )
}
