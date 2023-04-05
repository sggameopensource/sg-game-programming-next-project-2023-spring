import type { SyntheticEvent } from "react";

export default function StopPropagation() {
  const onDivClick = (e: SyntheticEvent) => {
    console.log("click events bubbles on <div>.");
  }

  const onButtonClick = (e: SyntheticEvent) => {
    console.log("mouse click occurs on <button> and call stopPropagation");
    e.stopPropagation();
  }

  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click Me and Stop event propagation</button>
    </div>
  );
}