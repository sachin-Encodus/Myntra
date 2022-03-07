import { useState } from "react";
import { data } from "../../constant/data";
import ItemList from "../itemlist/ItemList";
import "./Main.css";
export default function Main({ data }) {
  // const [filterData, setFilterData] = useState(data);

  // const searchfilter = () => {};

  return (
    <section>
      <div style={{ width: "100%", visibility: "hidden" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        iure, ex ratione eaque dignissimos recusandae minima veritatis quo
        voluptatem libero dolorem, accusantium consequuntur sed molestiae fugiat
        id laboriosam facilis ullam?
      </div>
      {data.length > 0 ? (
        <ul class="grid-wrapper">
          {data.map((item) => (
            <ItemList item={item} />
          ))}
        </ul>
      ) : (
        <h1 style={{ textAlign: "center" }}>NO result found</h1>
      )}
    </section>
  );
}
