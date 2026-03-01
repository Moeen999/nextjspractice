export default async function ServerComp() {
    // ! Ina nutshell server components ka AURA hai bhai , inmain hamain kisi cheez ki zaroorat nahi hai like states for storing data of API and useEffect for fetching data of API. 
    // todo:- Sab sy zyada important ye baat k ismain hamaray data k leak hony k chances almost 0% hain jesy hamari request jaati hai Client component main to hamain Network main sab kuch us request k baray mainmil raha hota hai jabky ismain na to hamain hamara URL milta jis sy ham data fetch kr rhy hoty aur na hi hamain wo data milta jo response main ham get kr rhy hoty hain. 

    // ? isky ilawa hamaray paas server component main loading k liay hamain kisi kisam ki state ki zaroorat nahi hoti jo k ham wesy bhi nahi kr sakty hain , isky liay hamain bas same folder main jahan hamara server component para ho ham aik "loading.js" k naam sy file banatay hain aur Next.js ussay automatically us route main import kr deta hai jahan data fetching waghera ho rahi ho 

    const PHOTO_URL = "https://jsonplaceholder.typicode.com/photos?_limit=1000";
    const res = await fetch(PHOTO_URL);
    const data = await res.json();

    return (
        <>

            <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-3 gap-3 bg-zinc-400 p-3">
                {data.map(({ id, title, thumbnailUrl }) => (
                    <div key={id} className=" border rounded-lg border-purple-500 p-3">
                        <h1>{id}.</h1>
                        <h1>{title}</h1>
                        <img src={thumbnailUrl} alt={title} />
                    </div>
                ))}
            </div>
        </>
    )
}