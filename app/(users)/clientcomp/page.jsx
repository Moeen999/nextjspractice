"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";


// ! client component ki yehi nishaani hai k ham usmain top pr ye line likhtay hain iskay baghair ham aik component ko jo k app folder k andr ho usko server component hi kehtay hain aur jab ye line lag jati hai to ham usmain states,hooks sab kuch use kr sakty hain aur client component async bhi nahi ho saktay hain , sirf server components async ho saktay hain

// ?   Imp InterView Qs : clientComponent main data fetching same to same reactjs ki tarah hai jabky server component main hamain kisi kisam k hook(state,effect) ki zaroorat nahi hoti bal k simple ham fetch kr k ussay use kr akty hain 

// * Client component k andr hamaray paas jo bhi Child component hota hai usmain bhi ham koi bhi cheez react waali perform kr sakty hain such as states usage , data fetching and usmain hamain "use client" likhnay ki zaroorat nahi hoti 
export default function ClientComp() {
    const [photosData, setPhototsData] = useState([]);
    const [isloading, setIsloading] = useState(false)
    const PHOTO_URL = "https://jsonplaceholder.typicode.com/photos";
    useEffect(() => {
        const fetchPhotos = async () => {
            setIsloading(true)
            const res = await fetch(PHOTO_URL);
            const data = await res.json();
            setIsloading(false)
            setPhototsData(data);
        }
        fetchPhotos();
    }, [])
    // const [userInput, setInput] = useState("");
    // const [val, setVal] = useState([]);
    // const handleInputChange = (e) => {
    //     setInput(e.target.value);
    // };
    // const handleSetVal = () => {
    //     setVal([...val, userInput]);
    //     setInput("");
    //     console.log(val);
    // };
    return (
        <>
            {/* <section className="h-screen text-black flex flex-col justify-center items-center gap-5 bg-zinc-400">
                <h1>Client Component</h1>
                <input
                    type="text"
                    name="value"
                    value={userInput}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Enter to store..."
                    className="border p-2 text-black border-purple-400 outline-none "
                />
                <button
                    onClick={() => handleSetVal()}
                    className="border border-purple-500 rounded-lg p-2"
                >
                    Click Me Up
                </button>
                {val.map((value, index) => (
                    <li key={index}>
                        {index + 1}.{value}
                    </li>
                ))}
            </section> */}

            <section className="min-h-screen bg-zinc-400  p-4">
                {isloading ? <Loader /> : <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                    {photosData?.map(({ id, title, thumbnailUrl }) => (
                        <div key={id} className="border rounded-lg border-purple-500 px-3 py-2">
                            <h1>{id}.</h1>
                            <h1>{title}</h1>
                            <img src={thumbnailUrl} alt={title} />
                        </div>

                    ))

                    }
                </div>

                }
            </section>
        </>
    );
}
