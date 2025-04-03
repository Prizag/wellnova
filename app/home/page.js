import { Button } from '@/components/ui/button'
import {Card} from '@/components/ui/card'
import { useState,useEffect } from 'react'
export default function Home(){
    const [image,setImage]= useState("")
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
        fetch("https://dummyjson.com/image/500x500/008080/ffffff?text=Well+Nova!&fontSize=16")
        .then((response)=>response.blob())
        .then((blob)=>{
            const ImageURL= URL.createObjectURL(blob);
            setImage(ImageURL)
            setLoading(false)
        }).catch((error)=>{
            console.log("Error in fetching data", error)
            setLoading(false)
        })
    },[])
    return(
        <>
        <div className='flex m-2'>
        <div className='m-2 space-y-10 flex flex-col items-start justify-center'>
            <h2 className='font-bold text-4xl'> Streamlined Healthcare Management </h2>
            <p className='text-gray-500 text-xl'>Our hospital management system makes healthcare interactions efficient, transparent, and stress-free for patients and medical staff.</p>
            <div>
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary ">Learn More</Button>
            </div>
        </div>
        <div className="flex items-center justify-center">
            {
                loading ? ( <p> Loading Image</p>) :
                <img
                src={image}
                alt="Hospital Management System"
                className="aspect-square overflow-hidden rounded-xl object-cover"
                width={550}
                height={550}  
                />
            }
                  </div>
              </div>
        </>
    )
}