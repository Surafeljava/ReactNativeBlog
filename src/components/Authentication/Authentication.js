import React, {useState} from "react";
import Login from "./Login";
import Signup from "./Signup";

function Authentication(){
    const [loginPage, setLoginPage] = useState(true);

    const onButtonClick = () => {
        setLoginPage(!loginPage);
    }

    if(loginPage){
        return <Login onButtonClick={onButtonClick}/>;
    }else{
        return <Signup onButtonClick={onButtonClick}/>;
    }
}

export default Authentication;