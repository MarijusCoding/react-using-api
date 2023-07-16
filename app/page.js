"use client"
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(0);
  const fetchAPI = (id) => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((data) => {
      setData(data.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const handleChange = (e) => {
    setData(e.target.value)
  }
  useEffect(() => {
    if (!isNaN(data)) {
      console.log(`${data} = numeris` )
      fetchAPI(data)
    }
    else {
      console.log(`${data} = ne numeris` )
    }
  }, [data])
  return (
    <>
        <input type="text" onChange={handleChange} />
        <p>{data.title}</p>
    </>
  )
}
