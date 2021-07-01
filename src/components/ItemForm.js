import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function ItemForm({ item, onSubmit, type }) {

    const { register, handleSubmit } = useForm({
        defaultValues: 
            {
                name: item ? item.name : "",
                priority: item ? item.priority : ""
            },
    });

    const history = useHistory();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
        history.push('/');
    });

    return (
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label h5" htmlFor="name">Name</label>
                    <input {...register('name')} type="text" className="form-control" ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label h5" htmlFor="priority">Priority</label>
                    <select {...register('priority')} className="form-select mb-3 form-control">
                        <option selected disabled>- Select -</option>
                        <option className='text-success' value="3">Low</option>
                        <option className='text-warning' value="2">Medium</option>
                        <option className='text-danger' value="1">High</option>
                    </select>
                </div>
           
                <div className='d-grid gap-2 col-8 mx-auto mt-5'>
                    <button type="submit" className="btn btn-block btn-lg btn-info">
                        { type === 'edit' ? 'Edit' : 'Add'}
                    </button>
                </div>
            </form>
    )
}
