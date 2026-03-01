// ! This is a dynamic Route Component , it is only used  in Server Components
// ? > Main Server Component hon 
// const SingleUserProfile = async (props) => {
//     const user = await props.params;
// console.log("Props Data: ",props);
//     console.log("User Name: ", user);
//     return <h1>Hi {user.username}</h1>
// }

// export default SingleUserProfile

// ? > Main Client Component banaya gaya hon dynamic nested routing k liay 

"use client"

import { use } from "react"; //! use() API ki madad sy ham apny nested dynamic routes ko client components main access kr sakty hainC

const SingleUserProfile =  (props) => {
    const user = use(props.params);
console.log("Props Data: ",props);
    console.log("User Name: ", user);
    return <h1>Hi {user.username}</h1>
}

export default SingleUserProfile