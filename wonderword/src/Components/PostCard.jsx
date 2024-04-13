 /*eslint-disable no-unused-vars */
import React from 'react'
import appwriteService from '../AppWrite/config'
import {Link} from 'react-router-dom'

// eslint-disable-next-line react-refresh/only-export-components
function PostCard( $id , title , featuredImage ) {
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div>
        <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />
        </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}



