import {createRoot} from "react-dom/client"

const FontPicker = () => {
  return (
    <div>
      <h2>Font Pickerlgt</h2>
      <p>HELLO WORLD</p>
    </div>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<FontPicker/>)
