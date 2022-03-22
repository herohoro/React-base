import React from "react";
import ColorfulMessage from "./components/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <React.Fragment>
      <h1 style={{ color: "gray" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">げんきですよ</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
