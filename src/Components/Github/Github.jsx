import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
//   const [data, setData] = useState([]);

//   useEffect
//     (() => {
//       fetch("https://api.github.com/users/varunjvk")
//         .then((res) => res.json())
//         .then((res) => setData(res));
//     },
    //     []);
    
    const data=useLoaderData()

  return (
    <div className="text-center text-3xl bg-gray-600 p-4 m-4 text-white">
          Github Followers: {data.followers}
          <img src={data.avatar_url} alt="Varun" />
    </div>
  );
};

export default Github;

export const GithubInfo = async () => {
    const res = await fetch("https://api.github.com/users/varunjvk");
    return res.json()
}
