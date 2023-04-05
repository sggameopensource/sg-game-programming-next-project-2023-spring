export default function CopyMe() {
  const onDragStart = (e: React.DragEvent<HTMLInputElement>) => console.log('onDragStart', e.dataTransfer)
  const onDragEnd = (e: React.DragEvent<HTMLInputElement>) => console.log('onDragEnd', e.dataTransfer)

  const onDragOver = (e: React.DragEvent) => e.preventDefault()
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer)
  }

  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>Drag Me</h1>
      </div>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop over Me</h1>
      </div>
    </div>
  )
}