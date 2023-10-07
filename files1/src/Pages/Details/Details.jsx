import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const Details = () => {
    const {id}=useParams()
    const {data,err,load}=useFetch(`http://localhost:1337/api/items/${id}`)
    console.log(data);

    err&&<>Oops There is An Error</>
    load&&<>Loading ...</>

    if(data.id>0){
        return (
            <div>
                <div className=''>
                    <p className='font-bold text-3xl'>{data.attributes.Name}</p> 
                    <p>{data.attributes.body}</p> 
                </div>
                <Link to="/" className="text-blue-700 underline active:text-red-600 hover:opacity-[0.7]">Back To Home</Link>
            </div>
        )
    }
}

export default Details