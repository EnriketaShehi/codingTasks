// Home.js component

// import all components required by this component
import React, { useState } from 'react';
 
// the 'Home()' function creates the Home page
// it creates the 'username' and 'isLoggedin' constants which are then used to manage the user login and user logout
// different versions of the Home page appear according to whether the user is logged in or logged out
function Home() {
    const [username, setUsername] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(false);
 
    const login = (e) => {
        if (username === "") {
        setIsLoggedin(false);
        } else {
        e.preventDefault();
        console.log(username);
        localStorage.setItem(
            "token-info",
            JSON.stringify(username)
        );
        setIsLoggedin(true);
        }   
    };
 
    const logout = () => {
        localStorage.removeItem("token-info");
        setIsLoggedin(false);
        setUsername("");
    };
 
    return (
        <>
            <div style={{ textAlign: "center" }}>
                
                {!isLoggedin ? (
                    <>
                        <h2>Please enter your name: </h2>
                        <form action="">
                            <input
                                type="text"
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                                value={username}
                                placeholder="Your name"
                            />
                            <button
                                type="submit"
                                onClick={login}
                            >
                                Login
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h1>Welcome {username}</h1>
                        <button onClickCapture={logout}>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </>
    );
}
 
export default Home;