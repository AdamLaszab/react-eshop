import "./main.css"
export function Cart({ cartState }) {
    return (
      <div className="start">
        <ul className="list">
          {cartState.map((element) => (
            <li className="cast" key={element[0].id}><img className="cartObrazok" src={element[0].images[0]} alt="obrazok" /><div>{element[0].title}</div><div>{element[1]}</div></li>
          ))}
        </ul>
      </div>
    );
  }

  
  
  
  
  
  