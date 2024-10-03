import React, {useEffect, useState} from 'react';


export default function Store() {

    useEffect( ()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        // fetch /home used for homepage (/)
        try {
            const data = await fetch('/home');
            const items = await data.json();
            console.log("Items:", items);
            setItems(items); // set items to be used in return
        } catch (error) {
            console.error("Error fetching items from /home:", error);
        }
        
    };

    // index is key for now, change later

    return(
        <section>
            {
                items.map((item, index) => (
                    <div key={index}>
                        <p>{item.msg}</p>
                        <p>{item.img}</p>
                        <p>{item.specs}</p>
                    </div>
                ))
            }
        </section>
    );
};