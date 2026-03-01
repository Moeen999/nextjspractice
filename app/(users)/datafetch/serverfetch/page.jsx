import { Suspense } from "react";
import DataCard from "./DataCard";
import {Loader} from "./Loader";
// import Loader from "../clientfetch/loading";

const ServerDataFetch = async (props) => {
  const params = await props.searchParams;
  const userName = params.name;

  // console.log(data);

  // if (!data.name || data.name === "") {
  //   return (
  //     <section className="w-full h-[90dvh] text-black bg-slate-500 flex justify-center items-center text-xl font-bold">
  //       <div className="w-96 h-24 bg-white text-red-600 rounded-xl p-3">
  //         <h1>No username found in query params!</h1>
  //         <h1> Please enter a valid name!!!</h1>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section classNam e="grid grid-cols-2 w-full h-[90vh] bg-slate-400">
      <div className="h-full bg-black text-white flex p-5 justify-center items-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed rerum
          blanditiis earum expedita cum ea recusandae, reprehenderit quasi
          deleniti dolor fugiat cupiditate possimus esse, et ullam quia, vitae
          provident doloribus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sed rerum blanditiis earum expedita cum ea
          recusandae, reprehenderit quasi deleniti dolor fugiat cupiditate
          possimus esse, et ullam quia, vitae provident doloribus? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sed rerum blanditiis
          earum expedita cum ea recusandae, reprehenderit quasi deleniti dolor
          fugiat cupiditate possimus esse, et ullam quia, vitae provident
          doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sed rerum blanditiis earum expedita cum ea recusandae, reprehenderit
          quasi deleniti dolor fugiat cupiditate possimus esse, et ullam quia,
          vitae provident doloribus?
        </p>
      </div>
      <Suspense fallback={<Loader/>}>
        <DataCard name={userName} />
      </Suspense>
    </section>
  );
};

export default ServerDataFetch;
