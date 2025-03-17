function UserGreeting({isLoggedIn = false , username = "Joker"}){
    // if(isLoggedIn){
    //     return <h2>Welcome {username}</h2>
    // } 
    //     return <h2>Please login to continue</h2>

    const welcome = <h2 className='text-white bg-success p-5'>Welcome {username}</h2>
    const login =  <h2 className='text-white bg-danger p-5'>Dear {username} ,Please login to continue</h2>

    return isLoggedIn ?  welcome : login;
     
}

export default UserGreeting;