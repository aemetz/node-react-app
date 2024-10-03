import React, {useEffect, useState} from 'react';


export default function Store() {

    useEffect( ()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {

        try {
            const data = await fetch('/store');
            const items = await data.json();
            console.log("Items:", items);
            setItems(items); // set items to be used in return
        } catch (error) {
            console.error("Error fetching items from /store:", error);
        }
        
    };


    // index is key for now, change later -- maybe item_id

    return(
        <section>
            {
                items.map((item, index) => (
                    <div class="product" key={index}>
                        <p>{item.name}</p>
                        <p>{item.img}</p>
                        <p>{item.specs}</p>
                        <p>{item.price}</p>
                    </div>
                    // add buy button
                ))
            } 
        </section>
    );

};