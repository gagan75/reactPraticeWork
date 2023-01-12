import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom';

export default function Photos() {
  const [photo , setPhoto] = useState([])
  const [breadCrumb , setBreadCrumb] = useState([])
  const param =  useParams()
  
  const getPhoto = async () =>{
    await fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((json) =>{
      let result =  json.filter(function checkuserId(ele){
        return ele.albumId == param.id
  })
      setPhoto(result)
    })
    .catch((err) =>{
        console.log("User Error" , err)
    })
    }

  useEffect(() =>{
    getPhoto()
  },[])
  console.log(photo)
  return (
    <div>
      <h2>Photos list</h2>
      <div className='bread_box'>
            {
                breadCrumb.map((ele , index) =>{
                    return <Link key={index} to={`${ele.url}`}>{ele.pathname}</Link>
                })
            }
        </div>
      <div className='row'>
      {
                photo.map((item , index) =>{
                    return <div className='col-md-4 photos_box' key={index}>
                        <div className='xyz'>
                            <div className='abc'><img src={item.thumbnailUrl} alt="photos img"/></div>
                            <p style={{textAlign : "left"}}>{item.title}</p>
                            </div>   
                        </div>
                })
            }
      </div>
    </div>
  )
}
