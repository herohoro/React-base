import React from "react";

const ColorfulMessage = (props) => {
  //再レンダリング確認
  // console.log("カラフル");
  //分割代入_props.colorをcolorのみでOKにする
  const { color, children } = props;
  // console.log(props);
  const contentStyle = {
    //color: color;の時は省略可
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
export default ColorfulMessage;
