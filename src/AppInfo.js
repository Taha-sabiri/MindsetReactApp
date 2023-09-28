import React from 'react'
import './App.css';
import mobile from './assets/img/iphone-14-ochek-4-1.webp'
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline'

const AppInfo =()=>{
    return(
        <div className=' h-64  -mt-24 rounded-2xl bg-gradient-to-r from-indigo-900 to-indigo-500 flex'>

            <div className='w-1/2 flex justify-end items-center' >
                <img src={mobile} className='-mt-44 scale-90 '/>
            </div>
            <div className='w-1/2 flex justify-start items-end text-white flex-col text-right pt-7 pr-7' >
                <h1 className='text-3xl font-bold  '>اپلیکیشن مایندست</h1>
                <p className='text-sm font-light text-lg mt-3'> مروز ، ذهنیت برنده  بهترین ابزار پیشرفت وامروز ، ذهنیت برنده  بهترین ابزار پیشرفت و<br/> یادگیری سریع ، بهترین مهارت موفقیت است</p>
                <div>
                <button class="bg-none border-white border hover:translate-y-2 duration-200 hover:shadow-lg hover:shadow-purple-300 hover:text-indigo-500 hover:bg-white  text-white  py-2 px-7 rounded-lg text-sm mt-8 flex items-center justify-center text-center">
                    دانلود از بازار
                    <ArrowDownOnSquareIcon className='w-4 ml-2'/>

                </button>
                </div>
                
            </div>

        </div>
    )
}

export default AppInfo;