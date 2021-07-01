import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import ItemForm from './ItemForm';

export default function AddItem() {

    const onSubmit = (data) => {
        // console.log(data);
        const item = {
            name: data.name,
            priority: data.priority
        }
        // console.log(item);
        axios.post('http://localhost:4000/add-item', item)
            .then(Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Item added!',
                showConfirmButton: false,
                timer: 1000
            }))
            .catch(err => console.log(err));
    };

    return (
        <div className='container mt-4 d-grid col-8 mx-auto'>
            <h2 className='h2 mb-4 mt-5'>Add New Item</h2>
            <ItemForm onSubmit={onSubmit} />
        </div>
    )
}
