import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href="/login"> Login</Link>
      <br />
      <Link href="/signup">Signup</Link>
      <br />
      <Link href="/contact">Contact</Link>
      <br />
      <h1 style={{ color: 'red', fontSize: '50px' }}>My Home Page</h1>
      
      <br />
      <hr />
      <input type="text" />
      <button className='my-btn'>Submit</button>
    </div>
  )
}

export default Home
