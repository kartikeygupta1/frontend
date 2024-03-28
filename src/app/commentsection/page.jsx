'use client';
import React, { useState } from 'react'

const commentsection = () => {
  
    const [comment1, comment2] = useState([
        { comment: "Good work", Name: "Kartikey🤣", completed: false },
        { comment: "Noice", Name: "Kartikey❤️", completed: false },
        { comment: "Awesome", Name: "Kartikey😍", completed: false },
        { comment: "Bad", Name: "Kartikey😒", completed: false },
    ]);
    const addnewcom = (f) => {
        if (f.code === "Enter") {
            console.log(f.target.value);
            const newCom = { comment: f.target.value, completed: false, Name: "Kartikey🤣" };
            comment2([newCom, ...comment1]);

            f.target.value = '';
        }
    }
    const deleteCom = (index) => {
        console.log(index);

        const tem = comment1;
        tem.splice(index, 1);
        comment2([...tem]);
    }
    return (
        <div className='vh-100 bg-secondary-subtle'>
            <div className='container py-5'>
                <h1 className='display-5 text right fw-fold'>Comments</h1>
                <div className='card shadow '>
                    <div className='card-header'>
                        {
                            comment1.map((task, index) => {
                                return <div key={index} className='d-flex mb-3 justify-content-between'>
                                    <p>{task.Name}</p>
                                    <p>{task.comment}</p>
                                    <button onClick={() => { deleteCom(index) }}
                                        className='btn btn-primary'>Delete</button>
                                </div>
                            })

                        }


                    </div>
                    <div className='card-body'>
                        <input type="text"
                            className='form-control border primary border-3'
                            placeholder='Comment Here'
                            onKeyDown={addnewcom} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default commentsection