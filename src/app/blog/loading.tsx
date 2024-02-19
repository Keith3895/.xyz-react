

export default function Loading() {
  return (<div className="flex flex-row gap-12 flex-wrap justify-center">
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="md:max-w-sm w-11/12 bg-white border border-gray-200 rounded-lg shadow md:w-3/12 animate-pulse">
        <div className="h-64 bg-gray-400 rounded-t-lg"></div>
        <div className="p-5 flex flex-row space-x-4">
          <div className="h-4 bg-gray-400 rounded w-1/4"></div>
          <div className="h-4 bg-gray-400 rounded w-1/4"></div>
        </div>
        <div className="p-5">
          <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-full mb-3"></div>
          <div className="h-6 bg-gray-400 rounded w-1/4"></div>
        </div>
      </div>
    ))}
  </div>);
}