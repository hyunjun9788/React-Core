import React from "react";

function Child({ isShow }) {
  return isShow && <div>나는 자식이야야</div>;
}

export default Child;
