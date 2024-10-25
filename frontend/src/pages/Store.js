import React, {useEffect, useState} from 'react';


function addToCart(itemId) {

    console.log(`Item ${itemId} added to cart`);


}


export default function Store() {

    useEffect( ()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {

        try {
            const data = await fetch('/store');
            const items = await data.json();
            // console.log("Items:", items);
            setItems(items); // set items to be used in return
        } catch (error) {
            console.error("Error fetching items from /store:", error);
        }
        
    };


    // unique item ID for key 

    return(
        <section className="store">
            {
                items.map((item, index) => (
                    <div className="product" key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.img}</p>
                        <p>{item.specs}</p>
                        <p>{item.price}</p>
                        <button type="button" onClick={() => addToCart(item.id)}>
                            Add to cart
                        </button>
                    </div>
                    // add buy button
                ))
            } 
        </section>
    );

};