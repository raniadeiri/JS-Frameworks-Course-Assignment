import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'

const Home = () => {
    const fetch=useFetch('http://localhost:1337/api/items');
    const {data,err,load}=fetch;
    return (
    <div>
        {err&&<>Oops There is An Error</>}
        {load&&<>Loading ...</>}
        <div className='flex flex-col gap-3  justify-center items-center py-2 '>
            {data.map((item)=>(
                <div  key={item.id} className='bg-gray-300 w-[70%] p-5'>
                    <p className='font-bold'>{item.attributes.Name}</p> 
                    <p>{item.attributes.body.substring(0,130)}</p> 
                    <Link to={`/details/${item.id}`} className="text-blue-700 underline active:text-red-700 hover:opacity-[0.7]">Read More...</Link> 
                </div>
            ))}
        </div>
    </div>

)
}

export default Home