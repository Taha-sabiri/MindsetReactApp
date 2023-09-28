import React from 'react'
import './App.css';
import mobile from './assets/img/iphone-14-ochek-4-1.webp'
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion"


const AppInfo =()=>{
    return(
        <div className=' h-64  -mt-24 rounded-2xl bg-gradient-to-r from-indigo-900 to-indigo-500 flex'>

            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.5 ,x:-200 }}
                whileInView={{ opacity: 1, x:0 , scale:1}}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
                }}
            
            
            className='w-1/2 flex justify-end items-center' >
                <img src={mobile} className='-mt-44 scale-90 '/>
            </motion.div>
            <div className='w-1/2 flex justify-start items-end text-white flex-col text-right pt-7 pr-7' >
                <motion.h1
                    viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                    whileInView={{ opacity: 1, x:0 , scale:1}}
                    transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}
                
                className='text-3xl font-bold  '>اپلیکیشن مایندست</motion.h1>
                <motion.p
                
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                whileInView={{ opacity: 1, x:0 , scale:1}}
                transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01]
                }}
                
                className='text-sm font-light text-lg mt-3'> مروز ، ذهنیت برنده  بهترین ابزار پیشرفت وامروز ، ذهنیت برنده  بهترین ابزار پیشرفت و<br/> یادگیری سریع ، بهترین مهارت موفقیت است</motion.p>
                <div>
                <motion.button

                    viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                    whileInView={{ opacity: 1, x:0 , scale:1}}
                    transition={{
                    duration: 0.8,
                    delay: 1.2,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}
                
                
                class="bg-none border-white border hover:translate-y-2 duration-200 hover:shadow-lg hover:shadow-purple-300 hover:text-indigo-500 hover:bg-white  text-white  py-2 px-7 rounded-lg text-sm mt-8 flex items-center justify-center text-center">
                    دانلود از بازار
                    <ArrowDownOnSquareIcon className='w-4 ml-2'/>

                </motion.button>
                </div>
                
            </div>

        </div>
    )
}

export default AppInfo;