import React from "react";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <div>
            <NavBar/>
            <br/><br/><br/><br/>
            <h1 style={{paddingTop: "2rem"}}>Home</h1>
            <img src={process.env.PUBLIC_URL + "/home.jpg"} className="img-fluid p-5"/>
        </div>
    );
}