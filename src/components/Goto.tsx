import { h, Fragment } from 'preact';
import{ useEffect, useState } from "preact/hooks";
import { signal } from '@preact/signals';
const url=signal("ffs")
export default function GoUrl() {
  const [goTime, setGoTime] = useState(-1);
  const [time, setTime] = useState(new Date().getTime());
  useEffect(()=> {
const st=()=>{
  setTime(new Date().getTime())
}
      const timer = setInterval(st, 1950);
   
  },[])
  if (!time) return <i>...</i>;
  const timeString = new Date(time).toLocaleTimeString();
  const gotoTime = Math.ceil(time / 60000) * 60000;
  const gotoClick = (ms) => {
    setTimeout(() => (window.location.href = url), ms);
    console.log({ ms });
  };
  return (
    <>
      <div className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/2">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              {timeString}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              value={url}
              placeholder="url"
              onChange={(e) => url.value=(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
            />
          </div>
        </div>
        {goTime === -1 && (
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                onClick={(e) => gotoClick(gotoTime - time)}
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                {"Goto at " + new Date(gotoTime) + " " + gotoTime}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}