// ! This is a dynamic Route Component , it is only used  in Server Components
const SingleUserProfileStatus = async (props) => {
    const user = await props.params;
    console.log("Props Data: ", props);
    // console.log("User Name: ",user);
    return <h1>Hi {user.username} , your statusId is {user.statusId}</h1>
}

export default SingleUserProfileStatus