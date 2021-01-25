import React, { useState } from "react";
import axios from "axios";

const Data = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  async function reqData() {
    const res = await axios(`https://jsonplaceholder.typicode.com/users`);
    console.log(res, "paaa");

    setUser(res.data);
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="block" htmlFor="user">
          User
          <input
            type="text"
            className="p-2 m-4"
            placeholder="Search User"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button className="bg-blue-300 px-2 py-1 rounded" onClick={reqData}>
          Search
        </button>
      </form>
      <div className="flex flex-wrap">
        {user.map((item) => {
          if (item.name.indexOf(search) >= 0) {
            return (
              <div
                key={item.id}
                className=" bg-pink-300 w-64 p-2 rounded-md hover:bg-pink-400 m-4 "
              >
                <h1 className="underline">{item.name}</h1>
                <h4>{item.email}</h4>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Data;

// {user.map((item) => (
//   <div key={item.id} className=" bg-pink-300 w-64 p-2 rounded-md hover:bg-pink-400 m-4 ">
//     <h1 className="underline">{item.name}</h1>
//     <h4>{item.email}</h4>
//   </div>
// ))}
