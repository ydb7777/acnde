import React, {useState,useEffect} from "react";

export default function List({getItems}){
    const [items,setItems]=useState([]);

    useEffect(()=>{
        setItems(getItems(5));
        console.log('Updating items..');
    },[getItems]);

    return items.map(item=><div key={item}>{item}</div>)
}