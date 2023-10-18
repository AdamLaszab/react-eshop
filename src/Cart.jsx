import { useEffect, useState } from "react";
import "./main.css";

export function Cart({ cartState, changeAmmount }) {
  const [total, changeTotal] = useState(0); 

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
    changeTotal(sum);
  }, [cartState]); 

  return (
    <div>
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
            </li>
          ))}
        </ul>
        <div>Total: {total}</div>
        <div>
          <button>Purchase</button>
        </div>
      </div>
    </div>
  );
}