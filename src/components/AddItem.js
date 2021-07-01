import React from 'react'

import ItemForm from './ItemForm';

export default function AddItem() {

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div className='container mt-4 d-grid col-8 mx-auto'>
            <h2 className='h2 mb-4 mt-5'>Add New Item</h2>
            <ItemForm onSubmit={onSubmit} />
        </div>
    )
}
