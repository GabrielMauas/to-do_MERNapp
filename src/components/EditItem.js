import React, { useState, useEffect } from 'react'
import ItemForm from './ItemForm';

export default function AddItem() {

    const [item, setItem] = useState();

    useEffect(() => {
        setItem({
            name: 'mark'
        })
    }, []);

    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    return item ? (
        <div className='container mt-4 d-grid col-8 mx-auto'>
            <h2 className='h2 mb-4 mt-5'>Edit Item</h2>
            <ItemForm item={item} onSubmit={onSubmit} type='edit' /> 
        </div>
        ) : (
            <div>Loading...</div>
        );
}
