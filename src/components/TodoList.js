import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function TodoList() {

    const [items, setItems] = useState([]);
    const url = 'https://gm-todoapp.herokuapp.com/';
    
    useEffect(() => {
        axios.get(url)
            .then(res => {
                const items = res.data;
                setItems(items);
            })
            .catch(err => console.log(err));
    }, [items]);

    const removeItem = id => {
        axios.delete(url + id)
            .then(Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Item Removed!',
                showConfirmButton: false,
                timer: 1000
            }))
            .catch(err => console.log(err));
    }

    const priorityColor = (pr) => {
        if(pr === 'Low') {
            return 'align-middle text-success text-center';
        } else if(pr === 'Medium') {
            return 'align-middle text-warning text-center';
        } else {
            return 'align-middle text-danger text-center';
        }
    }


    if(!items.length) {
        return(
        <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
        )
    }

    return (
        <div className='container mt-4'>
            <table className="table table-hover">
                <thead>
                    <tr className=''>
                        <th colSpan="1" scope="col">Item</th>
                        <th colSpan="1" scope="col" className='text-center'>Priority</th>
                        <th colSpan="1" scope="col" className='text-center'>Actions</th>
                    </tr>
                </thead>               
                <tbody>
                    {
                        items.map(item => (
                            <tr key={item.id}>
                                <td className='align-middle'>
                                    {item.name}
                                </td>
                                <td className={priorityColor(item.priority)}>
                                    {item.priority}
                                </td>
                                <td className='d-flex justify-content-end'>
                                    <Link className='btn btn-outline-light mr-4' to={`/edit-item/${item._id}`}><box-icon type='solid' name='edit'></box-icon></Link>
                                    <button onClick={ () => removeItem(item._id)} className='btn btn-outline-light'><box-icon type='solid' name='x-square'></box-icon></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
