import { useContext } from "react";
import { myStoreContext } from "./store";

const Child2 = () => {
  let { isLoggedInUser, setIsLoggedInUser } = useContext(myStoreContext);

  return (
    <div>
      <h1>Child2 Component</h1>
      
      <button onClick={() => setIsLoggedInUser((prev) => !prev)}>
        {isLoggedInUser ? "Logout" : "Login"}
      </button>

      {isLoggedInUser && <h4>Welcome User 👋</h4>}

      <hr />
    </div>
  );
};

export default Child2;
