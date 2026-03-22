import { useState } from "react";
import { myStoreContext } from "./store";

const ContextProvider = (props) => {
  console.log(props);

  const [isLoggedInUser, setIsLoggedInUser] = useState(false);

  return (
    <myStoreContext.Provider value={{ isLoggedInUser, setIsLoggedInUser }}>
      {props.children}
    </myStoreContext.Provider>
  );
};

export default ContextProvider;
