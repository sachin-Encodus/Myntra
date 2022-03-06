import { data } from "../../constant/data";
import ItemList from "../itemlist/ItemList";
import "./Main.css";
export default function Main() {
  return (
    <div>
               

      <section>
         
        <div class="">
           <div style={{width:"100%", visibility:'hidden'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure, ex ratione eaque dignissimos recusandae minima veritatis quo voluptatem libero dolorem, accusantium consequuntur sed molestiae fugiat id laboriosam facilis ullam?</div>
         <ul class="grid-wrapper">
          {data.map((item) => (
      
     <ItemList item={item} />
       
      ))}
             </ul>
        </div>
            

      </section>
      {/* {data.map((item) => (
       
      ))} */}
    </div>
  );
}
