import { useState,useEffect } from "react";
import axios from "axios";
const useFetch = (url)=>{

    const [err,setErr]=useState(null);
    const [load,setLoad]=useState(null);
    const [data,setData]=useState([]);
    const [fetched,setFetched]=useState(false);

    useEffect(()=>{
        const fetching = async()=>{
            setLoad(true);
            try{
                let res= await axios.get(url)
                let data=await res.data.data;
                setFetched(true)
                setData(data);
                setLoad(false);
            }
            catch (error){
                setErr(error)
                setLoad(false)
            }
        }
        fetching()
    }
        ,[url])
        
    return {data,err,load,fetched}}

export default useFetch;