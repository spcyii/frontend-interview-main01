import { useEffect, useState } from "react";
import tickets from "../api_mock/tickets.json";
import "./Cart.css";
import { text } from "stream/consumers";

const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/tickets.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const[count,setCount] = useState(1)
  function donwButton(){
   if(count>0) setCount (count -1)
  }
  function upButton(){
    setCount(count+1)
  }
  return (
    <aside>
      <h1>CART</h1>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img src="img.jpg" width="50" height="50"></img>
          <div> </div>
        </div>
        <div>
          <div>Siam Amezing Park</div>
          <div>1,000 THB</div>
        </div>
        <div>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={donwButton}>-</button>
            <div>{count}</div>
            <button onClick={upButton}>+</button>
          </div>
          <div> </div>
        </div>
      </nav>

      <footer>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Total</div>
          <div>1,000 THB</div>
        </section>

        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Discout</div>
          
            <input type="text" />
      
          <text>100 THB</text>
        </section>

        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Grand Total</div>
          <div>900 THB</div>
        </section>
      </footer>
    </aside>
  );
};

export default Cart;
