export default function DataCard ({data}) {
  return (
    <section className="w-full h-[90dvh] font-mono bg-zinc-500 flex flex-col justify-center items-center gap-5">
      <div className="card w-[26%] h-[55%] bg-white text-black flex flex-col items-center p-4 gap-3 rounded-lg">
        <h1 className="text-2xl font-extrabold ">Server Data Fetching</h1>
        <div
          className={`text-lg flex flex-col justify-center items-center rounded-full bg-zinc-400 w-24 h-24 `}
        >
          <div
            className={`${
              data.gender === "male" ? "bg-blue-500" : "bg-pink-400"
            } w-10 h-10 rounded-full  `}
          ></div>
          {data.gender?.charAt(0).toUpperCase() + data.gender.slice(1)}
        </div>
        <div
          className={`w-[80%] flex justify-center items-center ${
            data.gender === "male" ? "bg-blue-500" : "bg-pink-300"
          } text-2xl font-bold text-white tracking-widest rounded-lg`}
        >
          {data.name?.charAt(0).toUpperCase() + data.name.slice(1)}
        </div>
        <div
          className={` w-[80%] h-[13%] flex justify-center items-center ${
            data.count >= 20000
              ? "bg-red-400  border rounded-lg text-xl p-2 text-black"
              : data.count >= 10000
              ? "bg-yellow-200 border rounded-lg text-xl p-2 text-black"
              : data.count < 5000
              ? "bg-blue-500  border rounded-lg text-xl p-2 text-white "
              : "bg-green-200  border rounded-lg text-xl p-2 text-black"
          }`}
        >
          Count: {data.count}
        </div>
        <div
          className={`text-sm ${
            data.probability === 100
              ? "bg-red-400  border rounded-lg text-xl p-2 text-black"
              : data.probability >= 75
              ? "bg-yellow-200 border rounded-lg text-xl p-2 text-black"
              : data.probability < 50
              ? "bg-blue-500  border rounded-lg text-xl p-2 text-white "
              : "bg-green-200  border rounded-lg text-xl p-2 text-black"
          }`}
        >
          {data.gender === "male"
            ? `${data.probability * 100} are boys with this name out of 100`
            : data.gender === "female"
            ? `${data.probability * 100} are girls with this name out of 100`
            : "Gender not found"}
        </div>
      </div>
    </section>
  );
};
