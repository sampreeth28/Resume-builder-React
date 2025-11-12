import React from 'react'
import { Link } from 'react-router-dom'
Link
function Pnf() {
  return (
    <div style={{height:'100vh'}} className='row text-center d-flex justify-content-center align-items-center'>
        <div> <img width={'500px'} src="src/assets/—Pngtree—error 404 page not found_6501259.png" alt="" /></div>
        <Link style={{width:'130px', marginTop:'-250px'}} className='btn btn-secondary' to={'/'}>Back Home</Link>
    </div>
  )
}

export default Pnf