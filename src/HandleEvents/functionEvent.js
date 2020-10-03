import React from "react";

export default function functionEvent() {
  const handleClick = () => {
    alert("click me");
  };
  const handleClickParam = (mess) => {
    alert(mess);
  };
  return (
    <div>
      <h2>
        FunctionEvent
        {/*xu ly su kien trong js thuan khong ap dung trong react js dc */}
        {/* <button onclick="handleClick()">Click Now</button> */}
        {/**Xu ly su kien trong react js */}
        <buton onClick={handleClick}>Click ReactJS</buton>
        <button
          onClick={() => {
            handleClickParam("hello tin");
          }}
        ></button>
      </h2>
    </div>
  );
}
