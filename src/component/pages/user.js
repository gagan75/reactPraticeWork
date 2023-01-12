import React, { useEffect, useState } from 'react'
import { AiOutlineUser  } from 'react-icons/ai';
import {Link , useParams } from 'react-router-dom'

export default function User() {
  const [userInfo , setUserInfo] = useState([])
  const [breadCrumb , setBreadCrumb] = useState([])
  const param = useParams()
  
  useEffect(() =>{
    const fetchData = async () =>{
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) =>{
        setUserInfo(json)
       
        
    })
    .catch((err) =>{
        console.log("User Error" , err)
    })
    }
    fetchData()
  },[])
  return (
    <div>
        <h1>All User list</h1>
        <div className='row'>
            {
                userInfo.map((item , index) =>{
                    return <div className='col-md-4 user_box' key={index}>
                        <div>
                            <div><AiOutlineUser /></div>
                            <Link to={`/album/${item.id}`}>{item.id}. {item.name}</Link>
                            <p>{item.email}</p>
                            </div>   
                        </div>
                })
            }
        </div>
    </div>
  )
}
