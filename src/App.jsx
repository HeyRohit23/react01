import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({ title, details })

    setTask(copyTask)
    // console.log(task)
    // console.log(copyTask)
    // console.log('title:', title)
    // console.log('details:', details)


    setTitle('')
    setDetails('')
  }
  
  const deleteNote=(index)=>{
   const copytask=[...task]
   copytask.splice(index,1)
   setTask(copytask)
   
  }

  return(

    <div className='h-screen lg:flex  bg-black text-white  '>

      <form onSubmit={(e) => {
        handleSubmit(e)
      }} className='flex gap-4 p-10 lg:w-1/2 flex-col items-start  '>
        <h1 className='text-3xl font-bold'>Add Notes - </h1>

        <input type="text"
          placeholder='Enter Your Name'
          className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          type="text"
          placeholder='Enter Your Message'
          className='px-5 w-full py-2 font-medium border-2 h-32 outline-none rounded'
          value={details}
          onChange={(e) =>
            setDetails(e.target.value)
          }
        ></textarea>


        <button className='px-5 py-2 font-medium bg-white  text-black border-2 rounded-md'>Add note</button>
      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className='text-3xl font-bold '>Recent Notes - </h1>
        <div className='flex flex-wrap items-start justify-start gap-4 mt-5 h-90% overflow-auto'>
          {task.map(function (elem, index) {
            return <div key={index} className='relative flex justify-between flex-col h-50 w-40 text-2xl py-8 px-6 rounded-2xl text-black bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")] bg-cover bg-center '>
            
             <div>
               <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-sm text-gray-500 '>{elem.details}</p>
              <button onClick={()=>deleteNote(index)
              } className='absolute bottom-2 right-2 cursor-pointer active:scale-95 text-black bg-amber-300 text-xs border-2 p-1 rounded-xl'>Delete</button>
             </div>
            </div>
          })}



        </div>
      </div>
    </div>
  )
}

export default App