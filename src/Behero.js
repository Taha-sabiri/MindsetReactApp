import React from 'react'
import './App.css';

const Behero = () =>{

    return(
        <div className='h-56  mt-2 flex justify-center items-center  '>
             <div className='w-1/4 flex h-20 items-center'>
                <button class="bg-gradient-to-r from-indigo-900 to-indigo-500 hover:translate-y-2 duration-200 hover:shadow-lg hover:shadow-purple-300  text-white  py-2 px-7 font-light rounded-lg text-sm mt-8">
                    به ما ملحق شو
                </button>
            </div>

            <div className='w-3/4 flex flex-col items-end text-right justify-center'>
              <h1 className='text-3xl font-bold  '>اپلیکیشن مایندست</h1>
              <p className='text-sm font-light text-lg mt-3'> مروز ، ذهنیت برنده  بهترین ابزار پیشرفت وامروز ، ذهنیت برنده  بهترین ابزار پیشرفت و یادگیری سریع ، بهترین مهارت موفقیت است</p>
            </div>
           
        </div>
    )
}

export default Behero;