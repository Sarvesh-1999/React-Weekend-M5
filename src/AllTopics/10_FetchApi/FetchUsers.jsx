import { useEffect, useState } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      let resp = await fetch("https://dummyjson.com/users");
      let data = await resp.json();
      setUsers((prev) => [...prev, ...data.users]);
    } catch (error) {
      console.log("API CALL FAILED");
    }
  }

  useEffect(() => {
    getUsers(); // calls function during mounting phase
  }, []);

  return (
    <div>
      <h1>Fetch Users Api</h1>

        {users.length === 0 ? <p>No Users available</p> : users.map((ele)=>{
            return (
                <div key={ele.id}>
                    <h3>{ele.firstName} {ele.lastName}</h3>
                </div>
            )
        })}

    </div>
  );
};

export default FetchUsers;
