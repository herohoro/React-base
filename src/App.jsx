// 全体で設定を宣言するならここ▼
/* eslint react-hooks/exhaustive-deps:off */

import React, { useEffect, useState } from "react";
// import名はこのページで命名しているだけ
// import ColorfulMessage from "./components/ColorfullMessage";
// import名は参照元から引っ張っているから同一名にならないとエラーになる
import { ColorfulMessage } from "./components/ColorfullMessage";

const App = () => {
  //再レンダリング確認
  // console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    // console.log("effect");
    if (num > 0) {
      if (num % 3 === 0) {
        // Flagがfalseならtrueに切替える
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //Flagがtrueならfalseに切替える
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // esling-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "gray" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">げんきですよ</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* 左がtrueなら右を返す */}
      {faceShowFlag && <p>(´・ω・｀)</p>}
    </React.Fragment>
  );
};

export default App;
