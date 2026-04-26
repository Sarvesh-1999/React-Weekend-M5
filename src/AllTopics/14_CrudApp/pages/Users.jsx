import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

  async function getAllUsers() {
    try {
      let resp = await axios.get("http://localhost:9000/users");
      setAllUsers(resp.data);
    } catch (error) {
      console.log(error);
      setAllUsers([]);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="h-screen bg-gray-100 p-10">
      <header className="font-semibold uppercase flex items-center justify-between">
        <h1 className="">All Users</h1>
        <div className="text-sm text-gray-700">Total : {allUsers.length}</div>
      </header>

      <table className="w-full mt-5">
        <thead>
          <tr className="border w-full bg-violet-400 text-white">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">USERNAME</th>
            <th className="p-2 border">EMAIL</th>
            <th className="p-2 border">ACTIONS</th>
          </tr>
        </thead>

        <tbody className="font-semibold">
          {allUsers.length === 0 ? (
            <tr className="text-center">
              <td colSpan={3} className="pt-5">
                No Users
              </td>
            </tr>
          ) : (
            allUsers.map((user) => {
              return (
                <tr key={user.id} className="text-center">
                  <td className="p-2">{user.id.slice(0, 4)}...</td>
                  <td className="p-2">{user.username}</td>
                  <td className="p-2">{user.email}</td>
                  <td>
                    <button className="border mx-1 px-3 rounded bg-yellow-400">
                      Edit
                    </button>
                    <button className="border mx-1 px-3 rounded bg-red-400">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
