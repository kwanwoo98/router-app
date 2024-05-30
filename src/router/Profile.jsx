import React from "react";
import { useNavigate,useParams } from "react-router-dom";

const data={
    sung:{
        name:'성춘향',
        description:"리엑트 좋아하는 개발자"
    },
    hong:{
        name:'홍길동',
        description:"고전소설 홍길동전"
    }
}

function Profile(props){
    const navigate=useNavigate();
    const {username} = useParams();
    const profile=data[username];
    if(!profile){
        return <div>존재하지 않는 사용자</div>
    }
    return(
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
            <button onClick={()=>navigate("/")}>뒤로</button>
        </div>
    );
}
export default Profile;