import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [show, setShow] = useState("password");
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let password = localStorage.getItem("password");
    // console.log("password is : > "+password);
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    // console.log(form);
    setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
    setForm({ site: "", username: "", password: "" });
    // console.log([...passwordArray, form]);
  };
  const deletePassword = (id) => {
    const updatedArray = [passwordArray.filter(item=>item.id!=id)]   
    console.log(`deleting password with id ${id}`);
    console.log(updatedArray);
    setPasswordArray(updatedArray);
    // localStorage.setItem("password", JSON.stringify(updatedArray));
    

    
  
  }
  const editPassword = (id) => {
    // const updatedArray = passwordArray.filter((_, i) => i !== id);
    console.log(`editing password with id ${id}`);
    
  
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="bg-gray-100 mycontainer px-0 md:px-40">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700 font-[900]">&lt;</span>
          <span className="font-[cursive,_Verdana,_Geneva,_Tahoma,_sans-serif]">Pass</span>
          <span className="text-green-700 ">OP/&gt;</span>
        </h1>
        <p className=" text-center text-green-700 text-lg font-semibold">
          Your own Password Manager
        </p>

        <div className="  flex flex-col p-4 gap-3 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded border border-green-500 w-full px-3 text-black"
            type="text"
            name="site"
            id="site"
            placeholder="Enter website URL"
          />
          <div className="flex  w-full gap-2 md:gap-9">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded border border-green-500 w-full px-3 text-black"
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              autoComplete="on"
            />
            <div className="flex  w-full overflow-hidden rounded border  border-green-500">
              <input
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 text-black "
                type={show}
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              <span
                className="eye a md:px-2 px-[2px]  bg-slate-100 cursor-pointer flex "
                onClick={() => {
                  show === "password" ? setShow("text") : setShow("password");
                }}
                aria-label={
                  show === "password" ? "Show password" : "Hide password"
                }
              >
                <lord-icon
                  src="https://cdn.lordicon.com/kkiecexg.json"
                  trigger="click"
                  target=".eye"
                  stroke="bold"
                  colors="primary:#109121,secondary:#5c0e0a"
                  style={{ width: "23px", height: "23px" }}
                ></lord-icon>
              </span>
            </div>
          </div>
          <button
            className="btnn flex justify-center items-center bg-green-400 hover:bg-green-300 w-fit px-5 py-2 rounded-3xl border-2 hover:border-black gap-2 font-semibold"
            onClick={savePassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="loop-on-hover"
              target=".btnn"
              style={{ width: "20px", height: "20px" }}
            ></lord-icon>
            <span>Save Password</span>
          </button>
        </div>
        {passwordArray.length === 0 && (
          <div className="text-center">No password to show</div>
        )}
        {passwordArray.length != 0 && (
          <div className="m-auto w-[97%] md:w-full overflow-hidden rounded-lg">
            <div className="grid grid-cols-[28%_28%_28%_16%] bg-green-700">
              <div className="w-full truncate border-[0.5px] px-3 py-2 text-center font-semibold uppercase text-white md:px-4 ">
                Site
              </div>
              <div className="w-full truncate border-[0.5px] px-3 py-2 text-center font-semibold uppercase text-white md:px-4 ">
                Username
              </div>
              <div className="w-full truncate border-[0.5px] px-3 py-2 text-center font-semibold uppercase text-white md:px-4 ">
                Password
              </div>
              <div className="w-full truncate border-[0.5px] px-3 py-2 text-center font-semibold uppercase text-white md:px-4 ">
                Action
              </div>
            </div>
            {passwordArray.map((item, index) => {
              return (
                <div
                  className="grid grid-cols-[28%_28%_28%_16%] bg-green-100"
                  key={`${item.id}`}
                >
                  <div className="max-h-[40px] w-full border-[0.5px] py-2 text-center flex flex-row justify-between">
                    <a
                      href="{item.site} "
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate px-4 hover:underline"
                      title={item.site} 
                    >
                      {item.site}
                    </a>
                  </div>
                  <div className="max-h-[40px] w-full truncate border-[0.5px] px-3 py-2 text-center flex flex-row justify-between">
                    <span className="truncate px-2" >{item.username}</span>
                    <span className="material-symbols-outlined font-bold text-base flex items-center cursor-pointer" title={item.username}>
                      content_copy
                    </span>
                  </div>
                  <div className="max-h-[40px] w-full truncate border-[0.5px] px-3 py-2 text-center flex flex-row justify-between">
                    <span className="truncate px-2" title={item.password}>{item.password}</span>
                    <span className="material-symbols-outlined font-bold text-base flex items-center cursor-pointer" title={item.password}>
                    </span>
                  </div>
                  <div className="max-h-[40px] w-full truncate border-[0.5px] px-1 md:px-3 py-2 text-center flex flex-row justify-evenly">
                    <span className="material-symbols-outlined font-bold text-base flex items-center cursor-pointer" title={JSON.stringify(item)} onClick={()=> {editPassword(item.id)}}>edit</span>
                    <span className="material-symbols-outlined font-bold text-base flex items-center cursor-pointer" title={JSON.stringify(item)} onClick={()=> {deletePassword(item.id)}}>delete</span>
                    
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Manager;
