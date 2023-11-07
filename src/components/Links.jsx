import React from 'react'
import { NavLink } from 'react-router-dom'
 const links=[
     {
         url:'/search',text:'🕵All '
     },
     {
        url:'/news',text:'📰News '
    },
    {
        url:'/image',text:'📷Image '
    },
    {
        url:'/videos',text:'📽Videos '
    }
 ]
const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        {links.map(({url,text})=>(
            <NavLink to={url} className='m-4 mb-0 ' activeClassName='text-blue-500 border-b-2 dark:text-blue-500 border-blue-500 pd-2'>
                {text}
            </NavLink>
        ))}
    </div>
  )
}

export default Links