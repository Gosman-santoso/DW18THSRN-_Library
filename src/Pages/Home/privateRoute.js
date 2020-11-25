import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { CartContext } from "./../../Context/cartContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(CartContext);

  return (
    <Route
      {...rest}
      render={props =>
        state.loading ? (
          <h1></h1>
        ) : state.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
export default PrivateRoute;
