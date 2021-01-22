import React from "react"

export default function Tags(props) {
  const Component = props.component
  return (
    <div>
      <Component>{props.content}</Component>
    </div>
  )
}
