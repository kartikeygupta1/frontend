'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const feed = () => {

    const [postList, setpostList] = useState([]);

    const fetchPostData = () => {
        fetch('http://localhost:5000/post/getall')
            .then((response) => {
                console.log(response.status);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setpostList(data);  //update krne ke liye
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchPostData();
    }, [])


    const deletePost = (id) => {
        fetch('http://localhost:5000/post/delete/' + id, { method: 'DELETE' })
            .then((response) => {
                if (response.status === 200) {
                    toast.success('Post Deleted');
                    fetchPostDeleted();
                }
                else {
                    toast.error('Some Error Occurred');
                }
            }).catch((err) => {
                toast.error('Some Error Occured')
            });
    }



    return (
        <div>
            <div className='container'>
                <h1>Post Feed</h1>
                <hr />
                {
                    postList.map((post) => {
                        return <div key={post._id} className='card mb-4'>
                            <div className='card-header'>
                                <button className='btn btn-danger' onClick={() => { deletePost(post._id) }}>Delete</button>
                                <h4 className='m-0'>Posted By : {post.username}</h4>
                                <p className='mt-3 mb-0'>Posted on: {new Date(post.postedOn).toLocaleDateString()}</p>
                            </div>
                            <img className='card-img-top' src={post.image} alt="" />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default feed