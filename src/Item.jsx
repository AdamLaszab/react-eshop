import { useEffect, useState } from "react";
import "./main.css"
function Item({id}){
    const[data,setData]=useState(null);
    const[ammount,setAmmount]=useState(1);
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then((answer)=>answer.json())
        .then((data)=>setData(data))
        .catch((reason)=>{return <div>{reason}</div>})
    },[id])
    console.log(data);
    if (!data) {
        return <div>Loading...</div>;
    }
    let text1="\u003C"
    let text2="\u003E"
    function addNumber(){
        setAmmount(ammount+1);
    }
    function deductNumber(){
        if(ammount>1){
            setAmmount(ammount-1);
        }
    }
    return <div>
        <div>
        <img className="pic" src={data.images[0]} alt="image"/>
        </div>
        <div>
            <div>{data.title}</div> 
            <div>{data.price}$</div>
            <div><button onClick={deductNumber}>{text1}</button>{ammount}<button onClick={addNumber}>{text2}</button></div>
            <div><button>Add to cart</button></div>
        </div>
        </div>
}


export default Item;