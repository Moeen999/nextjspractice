"use client";
import { useEffect, useState } from "react";
import Loader from "./loading"
const RandomJokes = () => {
  const [jokesdata, setJokesData] = useState({});
  const [isLoading , setIsLoading] = useState(false);


  const URL = "https://official-joke-api.appspot.com/random_joke";
  const getJokesData = async () => {
    setIsLoading(true);
    const res = await fetch(URL);
    const data = await res.json();
    setIsLoading(false);
    setJokesData(data)
  };
  useEffect(() => {
    getJokesData();
  }, []);
   if(isLoading) return <Loader/>
  return (
    <section className="bg-slate-500 h-[90vh] w-full flex justify-center items-center ">
      <div className="jokescontainer flex flex-col items-center text-black p-3 gap-3 w-[20rem] h-[20rem] shadow-lg shadow-fuchsia-100 bg-white  rounded-xl">
        <h1 className="text-2xl font-bold">Random Jokes</h1>
        <h1 className="text-black">{jokesdata.type}</h1>
      </div>
    </section>
  );
};
export default RandomJokes;
