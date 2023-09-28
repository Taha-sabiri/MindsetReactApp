import React from 'react'
import './App.css';
import { motion } from "framer-motion"

const ListNum = () =>{
    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.5 ,y:-100 }}
        whileInView={{ opacity: 1, y:0 , scale:1}}
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }}
        
        className='flex space-x-24 justify-center -mt-8'>
            <div className='text-right'>
                <h1 className='text-gray-700'>رفیق</h1>
                <h1 className='font-bold text-5xl'>+۱۲۰۰</h1>
            </div>
            <div className='text-right'>
                <h1 className='text-gray-700'>مقاله</h1>
                <h1 className='font-bold text-5xl'>+۵۳۲</h1>
            </div>
            <div className='text-right'>
                <h1 className='text-gray-700'>کتاب الکترونیکی</h1>
                <h1 className='font-bold text-5xl'>+۲۴۴</h1>
            </div>
            <div className='text-right'>
                <h1 className='text-gray-700'>کتاب صوتی</h1>
                <h1 className='font-bold text-5xl'>+۲۳۲</h1>
            </div>
            <div className='text-right'>
                <h1 className='text-gray-700'>کتاب چاپی</h1>
                <h1 className='font-bold text-5xl'>+۵۹۰</h1>
            </div>
         

        </motion.div>
    )
}

export default ListNum;