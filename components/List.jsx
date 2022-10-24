import React, { useState, useEffect } from 'react'

const List = ({ getItems }) => {

    const [ items, setItems ] = useState([]);

    useEffect(() => {
        setItems(getItems(1));
        console.log("Updating Items");
    }, [getItems]);

    return (
        <div>
            {
                items?.map((item, i) => {
                    return (
                        <div key={i}>{item}</div>
                    )
                })
            }
        </div>
    )
}

export default List