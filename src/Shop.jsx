import Item from "./Item.jsx"
import "./main.css"
export function Shop({changeCart}){

    return <div className="start">
        <Item id={61} changeCart={changeCart}/>
        <Item id={62} changeCart={changeCart}/>
        <Item id={69} changeCart={changeCart}/>
        <Item id={64} changeCart={changeCart}/>
        <Item id={65} changeCart={changeCart}/>
        <Item id={70} changeCart={changeCart}/>
        <Item id={67} changeCart={changeCart}/>
        <Item id={71} changeCart={changeCart}/>
        </div>
}