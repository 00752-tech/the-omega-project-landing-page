export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-600 text-white p-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Loading...</h1>
        <div className="w-16 h-16 border-t-4 border-white rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  )
}
