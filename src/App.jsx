import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import oshiNames from "./oshiNames";

function App() {
  const [name, setName] = useState("");
  const [oshi, setOshi] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkOshi = () => {
    setLoading(true);
    setTimeout(() => {
      const oshiList = oshiNames;
      const randomOshi = oshiList[Math.floor(Math.random() * oshiList.length)];
      setOshi(randomOshi);
      setLoading(false);
    }, 1600);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white font-sans bg-banner px-4">
      <div className="absolute flex items-center space-x-2 text-white bottom-8">
        <div className="bg-white rounded-full p-1">
          <a target="_blank" href="https://x.com/syims__">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 32 32"
            >
              <path d="M 28 8.558594 C 27.117188 8.949219 26.167969 9.214844 25.171875 9.332031 C 26.1875 8.722656 26.96875 7.757813 27.335938 6.609375 C 26.386719 7.171875 25.332031 7.582031 24.210938 7.804688 C 23.3125 6.847656 22.03125 6.246094 20.617188 6.246094 C 17.898438 6.246094 15.691406 8.453125 15.691406 11.171875 C 15.691406 11.558594 15.734375 11.933594 15.820313 12.292969 C 11.726563 12.089844 8.097656 10.128906 5.671875 7.148438 C 5.246094 7.875 5.003906 8.722656 5.003906 9.625 C 5.003906 11.332031 5.871094 12.839844 7.195313 13.722656 C 6.386719 13.695313 5.628906 13.476563 4.964844 13.105469 C 4.964844 13.128906 4.964844 13.148438 4.964844 13.167969 C 4.964844 15.554688 6.660156 17.546875 8.914063 17.996094 C 8.5 18.109375 8.066406 18.171875 7.617188 18.171875 C 7.300781 18.171875 6.988281 18.140625 6.691406 18.082031 C 7.316406 20.039063 9.136719 21.460938 11.289063 21.503906 C 9.605469 22.824219 7.480469 23.609375 5.175781 23.609375 C 4.777344 23.609375 4.386719 23.585938 4 23.539063 C 6.179688 24.9375 8.765625 25.753906 11.546875 25.753906 C 20.605469 25.753906 25.558594 18.25 25.558594 11.742188 C 25.558594 11.53125 25.550781 11.316406 25.542969 11.105469 C 26.503906 10.410156 27.339844 9.542969 28 8.558594 Z"></path>
            </svg>
          </a>
        </div>
        <div className="bg-white rounded-full p-1">
          <a target="_blank" href="https://www.instagram.com/hasyimsw_/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 32 32"
            >
              <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
            </svg>
          </a>
        </div>
        <div className="bg-white rounded-full p-1">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100009320618737&locale=id_ID"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path d="M11.666,2.005C6.62,2.17,2.374,6.251,2.025,11.288c-0.369,5.329,3.442,9.832,8.481,10.589V14.65H8.892 c-0.726,0-1.314-0.588-1.314-1.314v0c0-0.726,0.588-1.314,1.314-1.314h1.613v-1.749c0-2.896,1.411-4.167,3.818-4.167 c0.357,0,0.662,0.008,0.921,0.021c0.636,0.031,1.129,0.561,1.129,1.198v0c0,0.663-0.537,1.2-1.2,1.2h-0.442 c-1.022,0-1.379,0.969-1.379,2.061v1.437h1.87c0.591,0,1.043,0.527,0.953,1.111l-0.108,0.701c-0.073,0.47-0.477,0.817-0.953,0.817 h-1.762v7.247C18.235,21.236,22,17.062,22,12C22,6.366,17.341,1.821,11.666,2.005z"></path>
            </svg>
          </a>
        </div>
        <div className="bg-white rounded-full p-1">
          <a target="_blank" href="https://github.com/hasyimsw">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 32 32"
            >
              <path
                fill-rule="evenodd"
                d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute text-white bottom-2">
        <div className="text-sm">
          Developed by{" "}
          <a href="github.com/hasyimsw" className="text-orange-500 underline">
            Hasyim!
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-4 text-center italic">
          "Cek Oshi Online"
        </h1>
        <p className="mb-2 text-xl text-gray-300">Cek Oshi Kamu!</p>
        {!oshi && !loading && (
          <div className="flex flex-col backdrop-blur-sm p-4 rounded-md">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tulis namamu di sini..."
              className="p-2 mb-2 rounded text-black text-sm bg-gray-300"
              required
            />
            <button
              onClick={checkOshi}
              className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 duration-300 p-2 rounded-md text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p> Cek Oshimu!</p>
            </button>
          </div>
        )}
        {loading && (
          <div className="flex justify-center">
            <HashLoader color="#FFFFFF" loading={loading} size={25} />
          </div>
        )}
        {oshi && !loading && (
          <div className="backdrop-blur-sm p-4 rounded-md">
            <p className="mb-2">
              Oshi dari {name} adalah {oshi}.
            </p>
            <button
              onClick={() => {
                setOshi(null);
                setName("");
              }}
              className="w-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 duration-300 p-2 rounded-md text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <p className="text-sm pt-0.5">Ulangi</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
