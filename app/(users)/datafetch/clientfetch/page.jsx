"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Loader from "./loading.js";
import DataCard from "./DataCard.jsx";

const ClientDataFetch = () => {
  const [info, setInfo] = useState({});
  // const [isLoading, setisLoading] = useState(false);
  console.log(info);
  const params = useSearchParams();
  const name = params.get("name");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = `https://api.genderize.io/?name=${name}`;
        // setisLoading(true);
        const res = await fetch(URL);
        const data = await res.json();
        // setisLoading(false);
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // if (isLoading) return <Loader />;
  if (!info.name) return null;
  return (
    // <section className="w-full h-[90dvh] font-mono bg-zinc-500 flex flex-col justify-center items-center gap-5">
    //   <div className="card w-[100%] md:w-[26%] h-[55%] bg-white text-black flex flex-col items-center p-4 gap-3 rounded-lg">
    //     <h1 className="text-sm md:text-2xl font-extrabold ">
    //       Server info Fetching
    //     </h1>
    //     <div
    //       className={`text-lg flex flex-col justify-center items-center rounded-full bg-zinc-400 w-20 h-20 md:w-24 md:h-24`}
    //     >
    //       <div
    //         className={`${
    //           info.gender === "male" ? "bg-blue-500" : "bg-pink-400"
    //         }  w-9 h-9 md:w-12 md:h-12 rounded-full`}
    //       ></div>
    //       {info.gender.charAt(0).toUpperCase() + info.gender.slice(1)}
    //     </div>
    //     <div
    //       className={`w-[80%] flex justify-center items-center ${
    //         info.gender === "male" ? "bg-blue-500" : "bg-pink-300"
    //       } text-lg md:text-2xl font-bold text-white tracking-widest rounded-lg`}
    //     >
    //       {info.name.charAt(0).toUpperCase() + info.name.slice(1)}
    //     </div>
    //     <div
    //       className={` w-[80%] h-[13%] flex justify-center items-center ${
    //         info.count >= 20000
    //           ? "bg-red-400  border rounded-lg text-sm md:text-2xl p-2 text-black"
    //           : info.count >= 10000
    //           ? "bg-yellow-200 border rounded-lg text-sm md:text-2xl p-2 text-black"
    //           : info.count < 5000
    //           ? "bg-blue-500  border rounded-lg text-sm md:text-2xl p-2 text-white "
    //           : "bg-green-200  border rounded-lg text-sm md:text-2xl p-2 text-black"
    //       }`}
    //     >
    //       Count: {info.count}
    //     </div>
    //     <div
    //       className={`${
    //         info.probability === 100
    //           ? "bg-red-400  border rounded-lg text-sm md:text-2xl p-2 text-black"
    //           : info.probability >= 75
    //           ? "bg-yellow-200 border rounded-lg text-sm md:text-2xl p-2 text-black"
    //           : info.probability < 50
    //           ? "bg-blue-500  border rounded-lg text-sm md:text-2xl p-2 text-white "
    //           : "bg-green-200  border rounded-lg text-sm md:text-2xl p-2 text-black"
    //       }`}
    //     >
    //       {info.gender === "male"
    //         ? `${info.probability * 100} are boys with this name out of 100`
    //         : info.gender === "female"
    //         ? `${info.probability * 100} are girls with this name out of 100`
    //         : "Gender not found"}
    //     </div>
    //   </div>
    // </section>

    <section className="grid grid-cols-2 w-full h-[90vh] bg-slate-400">
        <div className="h-full bg-black text-white flex p-5 justify-center items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum blanditiis earum expedita cum ea recusandae, reprehenderit quasi deleniti dolor fugiat cupiditate possimus esse, et ullam quia, vitae provident doloribus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum blanditiis earum expedita cum ea recusandae, reprehenderit quasi deleniti dolor fugiat cupiditate possimus esse, et ullam quia, vitae provident doloribus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum blanditiis earum expedita cum ea recusandae, reprehenderit quasi deleniti dolor fugiat cupiditate possimus esse, et ullam quia, vitae provident doloribus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum blanditiis earum expedita cum ea recusandae, reprehenderit quasi deleniti dolor fugiat cupiditate possimus esse, et ullam quia, vitae provident doloribus?
          </p>
        </div>
        <Suspense fallback={<Loader/>}>
          <DataCard data={info}/>
        </Suspense>
       </section>
  );
};
export default ClientDataFetch;
