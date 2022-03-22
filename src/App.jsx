import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <React.Fragment>
      <h1 style={{ color: "gray" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">げんきですよ</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </React.Fragment>
  );
};

export default App;
