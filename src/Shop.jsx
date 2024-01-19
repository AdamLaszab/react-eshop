import Item from "./Item.jsx"
import "./main.css"
export function Shop({changeCart}){

    return <div className="pt-24 grid lg:grid-cols-[350px_350px] md:grid-cols-[200px_200px] grid-cols-[125px_125px] gap-4 justify-center items-center h-screen ">
        <Item id={1} changeCart={changeCart}/>
        <Item id={2} changeCart={changeCart}/>
        <Item id={3} changeCart={changeCart}/>
        <Item id={4} changeCart={changeCart}/>
        <Item id={5} changeCart={changeCart}/>
        <Item id={6} changeCart={changeCart}/>
        <Item id={7} changeCart={changeCart}/>
        <Item id={8} changeCart={changeCart}/>
        </div>
}