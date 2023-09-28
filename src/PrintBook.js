import React from 'react'
import './App.css';
import book from './assets/img/تأثیر-پلیت-ها-در-تکامل-مورفوتکتونیکی-ایران-زمین.png'
import { motion } from "framer-motion"


const PrintBook = () =>{

    return(
        <div className='min-h-screen flex -mt-16 '>


        <motion.div

            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5 ,x:-200 }}
             whileInView={{ opacity: 1, x:0 , scale:1}}
             transition={{
             duration: 0.8,
             delay: 0.5,
             ease: [0, 0.71, 0.2, 1.01]
             }}
        
        
        className='w-1/2 flex justify-start items-start -mt-14 scale-125   '>
           <img src={book} className='object-cover '/>
           
        </motion.div>

        <div className='w-1/2 flex flex-col justify-start items-end'>
            <div className='flex content-center items-center justify-center text-center '>
                <motion.h1
                    viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                     whileInView={{ opacity: 1, x:0 , scale:1}}
                     transition={{
                     duration: 0.8,
                     delay: 0.5,
                     ease: [0, 0.71, 0.2, 1.01]
                     }}
                
                className='text-3xl font-bold  '>کتاب های چاپی</motion.h1>
            </div>

            <motion.div
            
            viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                     whileInView={{ opacity: 1, x:0 , scale:1}}
                     transition={{
                     duration: 0.8,
                     delay: 0.9,
                     ease: [0, 0.71, 0.2, 1.01]
                     }}
            className='flex content-center items-center justify-center text-center mt-5 '>
                <h1 className='text-sm text-gray-600 '>امروز : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                <div className='bg-yellow-400 w-5 h-2 rounded-full text-xs   flex justify-center items-center ml-2 '></div>    
            </motion.div>

            <motion.h1 className='text-right mt-7 pl-4 leading-7 '
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5 ,x:200 }}
             whileInView={{ opacity: 1, x:0 , scale:1}}
             transition={{
             duration: 0.8,
             delay: 1.2,
             ease: [0, 0.71, 0.2, 1.01]
             }}
            
        
            >
                
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
            </motion.h1>
            <motion.button
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5 ,x:200 }}
             whileInView={{ opacity: 1, x:0 , scale:1}}
             transition={{
             duration: 0.8,
             delay: 1.5,
             ease: [0, 0.71, 0.2, 1.01]
             }}
            
            class="bg-gradient-to-r from-indigo-900 to-indigo-500 hover:translate-y-2 duration-200 hover:shadow-lg hover:shadow-purple-300  text-white  py-2 px-7 font-light rounded-lg text-sm mt-8">
                        ورود به بخش کتاب های چاپی
            </motion.button>
            
            
            
            
            

        </div>

        </div>
    )
}

export default PrintBook;