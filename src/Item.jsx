import { useEffect, useState } from "react";
import "./main.css"
import "./index.css"
function Item({id,changeCart}){
    const[data,setData]=useState(null);
    const[ammount,setAmmount]=useState(1);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((answer)=>answer.json())
        .then((data)=>setData(data))
        .catch((reason)=>{return <div>{reason}</div>})
    },[id])
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
    function submit(){
            changeCart(data,ammount);
    }
    return <div className="flex-none flex-col justify-center items-center">
        <div> 
        <img className="lg:w-72 lg:h-72 md:w-48 md:h-48 w-20 h-20 object-scale-down"src={data.image} alt="image"/>
        </div>
        <div>
            <div className="w-full truncate">{data.title}</div> 
            <div>{data.price}$</div>
            <div><button className="" onClick={deductNumber}>{text1}</button>{ammount}<button onClick={addNumber}>{text2}</button></div>
            <div><button className="bg-blue-700 text:sm hover:bg-blue-600 text-white py-1 px-2 rounded" onClick={submit}>Add to cart</button></div>
        </div>
        </div>
}


export default Item;