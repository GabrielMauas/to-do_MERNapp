import React, { useState, useEffect } from 'react'
import ItemForm from './ItemForm';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function EditItem() {

    const match = useRouteMatch();
    const id = match.params.id;
    const [item, setItem] = useState();
    const url = 'https://gm-todoapp.herokuapp.com/';


    useEffect(() => {
        axios.get(url + id)
            .then(res => {
                setItem(res.data);
            })
    }, [id]);

    const onSubmit = data => {
        axios.post(url + id, data)
            .then(Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Item Updated!',
                showConfirmButton: false,
                timer: 1000
            }))
            .catch(err => console.log(err));
    };

    return item ? (
        <div className='container mt-4 d-grid col-8 mx-auto'>
            <h2 className='h2 mb-4 mt-5'>Edit Item</h2>
            <ItemForm item={item} onSubmit={onSubmit} type='edit' /> 
        </div>
        ) : (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        );
}
