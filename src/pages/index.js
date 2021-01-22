import Tags from "../components/tags"
import React from "react"
export default function IndexPage() {
  const Comp = ["p", "h1", "button"]
  function PopUp() {
    console.log("This will do a function soon.")
  }
  return (
    <div className="App">
      <div id="page">
        {Comp.map(c => (
          <a id="remove" onClick={() => alert("Onclick Code goes Here...")}>
            <Tags component={c} content="Test" />
          </a>
        ))}
      </div>
    </div>
  )
}
