import { useState,useEffect } from "react";
function Main2 (){
    const [name,setName] = useState("win");
    const [age,setAge] = useState("positive");
    const [dept,setDept] = useState("hero");

    useEffect(()=>{
        console.log("component did update");
    },[name,dept])

    return(
        <div>{name} {age} {dept}
        <button onClick={() => setName("lose")}>updatename</button>
        <button onClick={() => setAge("negative")}>updateage</button>
        <button onClick={() => setDept("villain")}>updatedept</button>
        </div>
    );

}
export default Main2