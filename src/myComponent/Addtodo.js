
import React, { useState } from 'react';

export const Addtodo = ({ addtodo }) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Todo cannot be blank");
        }
        else {
            addtodo(title, desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="container ">
            <h3 >Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3 mt-5">
                <h3 >Add a todo</h3>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <div className="add">
                <button type="submit" className="btn btn-primary add-btn">Add</button></div>
            </form>
        </div>
    )
}
