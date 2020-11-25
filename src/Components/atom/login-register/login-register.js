import React from "react";

import BtnRegister from "../../molecules/btn-register/btn-regist";
import BtnLogin from "../../molecules/btn-login/btn-login";

function LoginRegister() {
  return (
    <div
      style={{
        display: "flex",
        width: "55vh",
        justifyContent: "space-between"
      }}
    >
      <BtnRegister />
      <BtnLogin />
    </div>
  );
}

export default LoginRegister;
