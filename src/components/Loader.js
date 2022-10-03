import React from 'react'
import loading from "./loading.gif";

const Loader =()=> {

    return (
      <div className='text-center my-4'>
        <img src={loading} alt="loading" />
      </div>
    )

}

export default Loader