import { useState } from "react";
import axios from "axios";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [userpwd, setUserpwd] = useState("");
  const [logStatus,setLog] = useState("");
  const handleClick = async () => {
    const res = await axios.post("http://localhost:3030/api/user/login", {
      userName,userpwd,
    });
    if(!res.data.loginStatus){
      location.reload();
      return;
    }
    setLog("login completed")
  };
  return (
    <div>
      <div className="place-items-center">
        <div className="flex flex-col m-40 border-black border-2 rounded-xl p-5 ">
          <input
            type="text"
            className="m-2 border-2 border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="user name"
          />
          <input
            type="text"
            className="m-2 border-2 border-black p-2"
            onChange={(e) => setUserpwd(e.target.value)}
            placeholder="password"
          />
          <button
            onClick={() => handleClick()}
            className="bg-black text-white rounded-xl m-5 ml-5 mr-5"
          >
            Submit
          </button>
          {logStatus}
        </div>
      </div>
    </div>
  );
}