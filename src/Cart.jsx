import { useEffect, useState } from "react";
import "./main.css";

export function Cart({ cartState, changeAmmount,removePurchase }) {
  const [total, changeTotal] = useState(0); 
  const [items,changeItems]=useState(false);
  let text1 = "\u003C";
  let text2 = "\u003E";

  function addAmmount(id) {
    changeAmmount(id, 1);
  }

  function deduct(id) {
    changeAmmount(id, -1);
  }

  useEffect(() => {
    let sum = 0;
    cartState.forEach(element => {
      sum += element[0].price * element[1];
    });
    if(cartState.length === 0){
      changeItems(false);
    }else{
      changeItems(true);
    }
    changeTotal(sum);
  }, [cartState]); 
  if(!items){
    return <div className="pt-20 flex justify-center"><img src="assets/empty.png" alt="cart image" /></div>
  }
  return (
      <div className="mam">
        <ul className="list">
          {cartState.map((element) => (
            <li className="cast" key={element[0].id}>
              <img className="cartObrazok" src={element[0].images[0]} alt="obrazok" />
              <div>{element[0].title}</div>
              <div>
                <div>
                  <button onClick={() => deduct(element[0].id)}>{text1}</button>
                  {element[1]}
                  <button onClick={() => addAmmount(element[0].id)}>{text2}</button>
                </div>
                <div>{element[0].price * element[1]}$</div>
              </div>
              <div>
                <button className="text-red-700 bold lg:text-xl sm:text-lg" onClick={() => removePurchase(element[0].id)}>X</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-center items-center">
        <div className="pt-8">Total: {total}$</div>
        <div>
          <button className="bg-blue-700 text:sm hover:bg-blue-600 text-white py-1 px-2 rounded">Purchase</button>
        </div>
        </div>
      </div>

  );
}