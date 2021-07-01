import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TodoList() {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        setItems([
            {id: 0, name: "Mark", priority: 'Medium'},
            {id: 1, name: "Mark", priority: 'Low'},
            {id: 2, name: "Mark", priority: 'High'}
        ])
    }, []);


    return (
        <div className='container mt-4'>
            <table className="table table-hover">                
                <tbody>
                    {
                        items.map(item => (
                            <tr key={item.id}>
                                <td className='align-middle'>
                                    {item.name}
                                </td>
                                <td className='align-middle'>
                                    {item.priority}
                                </td>
                                <td className='d-flex justify-content-end'>
                                    <Link className='btn btn-outline-light mr-4' to={`/edit-item/${item.id}`}><box-icon type='solid' name='edit'></box-icon></Link>
                                    <Link className='btn btn-outline-light '><box-icon type='solid' name='x-square'></box-icon></Link>
                                </td>
                            </tr>
                        ))
                    }





                </tbody>
            </table>
        </div>
    )
}
