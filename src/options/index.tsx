import { useState } from "react"
import {Test} from "~components/test";

function IndexOptions() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <Test/>
    </div>
  )
}

export default IndexOptions
