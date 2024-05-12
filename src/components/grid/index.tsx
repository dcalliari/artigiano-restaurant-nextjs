export default function Grid() {
  return (
    <div className="flex flex-col bg-zinc-700 p-2">
      <div className="flex flex-row">
        <div className="m-1 w-1/2 bg-zinc-900 p-10">Box 1</div>
        <div className="m-1 w-1/2 bg-slate-500">IMAGE</div>
      </div>
      <div className="flex flex-row">
        <div className="m-1 w-1/2 bg-slate-500">IMAGE</div>
        <div className="m-1 w-1/2 bg-zinc-900 p-10">Box 1</div>
      </div>
    </div>
  )
}
