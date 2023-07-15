"use client"
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState('');
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
    .then((data) => {
      
      setData(data)
      console.log(data);
    })
    .catch((err) => {
      throw err;
    })
  }, [])
  return (
    <>
    {Object.keys(data).map((data) => {
      return data.map(data) => {
        {data.id}
      }
    })}
    </>
  )
}
