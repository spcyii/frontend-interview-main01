import tickets from "../api_mock/tickets.json";
import React, { useState, useEffect } from "react";

const Tickets = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/tickets.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  function addCode(){
    
  }
  // console.log(items);
  return (
    <div>
      <div>TICKETS</div>
      <ul>
        {items.map((item: any, index) => (
          <div>
            {" "}
            <img src={item.img} width="100" height="100"></img>
            <div>{item.title}</div>
            <div>Siam Amazing Park Everyday is Amazing!</div>
            <div>สยามอะเมซิ่งเป็นอาณาจักรแห่งความสุสนุกไม่รู้ลืม ..</div>
            <div> {item.price} THB</div>
            <button>Add</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
