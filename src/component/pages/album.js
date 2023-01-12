import React, { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { useParams , Link } from 'react-router-dom';

export default function Album(props) {
  const [albumData , setAlbumData] = useState([])
  const [breadCrumb , setBreadCrumb] = useState([])
  const param = useParams()
  
  const getAlbum = async () =>{
    await fetch('https://jsonplaceholder.typicode.com/albums')
    .then((res) => res.json())
    .then((json) =>{
       let result =  json.filter(function checkuserId(ele){
              return ele.userId == param.id
        })
        setAlbumData(result) 
    })
    .catch((err) =>{
        console.log("User Error" , err)
    })
    }

  useEffect(() =>{
    getAlbum()
  },[])
  console.log(albumData)
  return (
    <div>
        <h2>User Album list</h2>
        <div className='row'>
            {
              albumData.map((item , index) =>{
                return <div className='col-md-4 user_box'key={index}>
                        <div>
                            <h3>{item.id}. Album Title</h3>
                            <Link to={`/photos/${item.id}`}>
                            <p>{item.title}</p>
                            </Link>
                        </div>
                      </div>
              })
            }    
        </div>
    </div>
  )
}
