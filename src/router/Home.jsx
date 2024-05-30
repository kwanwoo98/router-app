import React from "react";
import { Navigate, useNavigate,useParams } from "react-router-dom";

function Home(props){
    const navigate = useNavigate();
    return(
        <div>
            <h1>홈</h1>
            <p>홈 그 페이지는 가장 먼저 보인느 페이지</p>
            <button onClick={()=> navigate("profile/sung")}>춘향이프로필</button>
            <button onClick={()=> navigate("profile/hong")}>길동이프로필</button>
        </div>
    );
};

export default Home;