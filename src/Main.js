import React from 'react'
import './App.css';
import cup from './assets/img/cup.png'
import pro1 from './assets/img/Face-Mapping-191d3a2073e146d981c1626b39e8a227.png'
import pro2 from './assets/img/beautiful-face-young-woman-with-clean-fresh-skin-isolated-white_186202-7897.avif'
import pro3 from './assets/img/c3444e7bb7b175e74fe636834c616878.jpg'
import pro4 from './assets/img/pexels-photo-2380794.jpeg'
import { PlayIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion"



const Main = () => {

    return(
        
        <div  className=' min-h-screen flex w-full'>
           
            
            <motion.div className='w-1/2 ' initial={{ opacity: 0, scale: 0.5 ,x:-100 }}
            animate={{ opacity: 1, x:0 , scale:1}}
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }}>
                
                <img  src={cup}/>
               
            </motion.div>
          
            <div className='w-1/2  text-right mt-24 '>
                <motion.h1
                initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                animate={{ opacity: 1, x:0 , scale:1}}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
                }} 
                
                
                className='text-2xl mb-6'>!مایندست </motion.h1>
                <motion.h1
                initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                animate={{ opacity: 1, x:0 , scale:1}}
                transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01]
                }} 
                
                
                className='text-7xl font-bold mb-6'>خلق شخصیت قهرمان</motion.h1>
                <motion.p
                 initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                 animate={{ opacity: 1, x:0 , scale:1}}
                 transition={{
                 duration: 0.8,
                 delay: 1.3,
                 ease: [0, 0.71, 0.2, 1.01]}}

                
                
                className='text-sm font-light text-lg'> امروز ، ذهنیت برنده <br/> بهترین ابزار پیشرفت و یادگیری سریع ، بهترین مهارت موفقیت است</motion.p>
                
                <div className='flex justify-end mt-7'>

                     < motion.div 
                     initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                     animate={{ opacity: 1, x:0 , scale:1}}
                     transition={{
                     duration: 0.8,
                     delay: 2.3,
                     ease: [0, 0.71, 0.2, 1.01]}}
                     
                     className='flex items-center mr-5 hover:translate-y-2 duration-200'>
                        <h1 className='text-indigo-800 mr-2'>تماشای ویدیو </h1>
                        <button class="bg-indigo-400 bg-opacity-50  duration-200 hover:shadow-lg   text-indigo-800  py-2 px-2 font-light rounded-lg text-sm">
                        
                            <PlayIcon className='w-5'/>

                        </button>

                     </motion.div>
                    <motion.button
                    initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                    animate={{ opacity: 1, x:0 , scale:1}}
                    transition={{
                    duration: 0.8,
                    delay: 1.7,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    
                    
                    class="bg-gradient-to-r from-indigo-900 to-indigo-500 hover:translate-y-2 duration-200 hover:shadow-lg hover:shadow-purple-300  text-white  py-2 px-7 font-light rounded-lg text-sm">
                        به ما ملحق شوید
                    </motion.button>
                </div>
                <motion.div
                initial={{ opacity: 0, scale: 0.5 ,x:200 }}
                animate={{ opacity: 1, x:0 , scale:1}}
                transition={{
                duration: 0.8,
                delay: 2.3,
                ease: [0, 0.71, 0.2, 1.01]}}
                className='flex justify-end items-center mt-8  '>
                <div className='flex  -space-x-4 '>
                        <img class="w-10 h-10 border-2 border-white rounded-full  object-cover" src={pro1} alt=""/>
                        <img class="w-10 h-10 border-2 border-white rounded-full  object-cover" src={pro2} alt=""/>
                        <img class="w-10 h-10 border-2 border-white rounded-full  object-cover" src={pro3} alt=""/>
                        <img class="w-10 h-10 border-2 border-white rounded-full  object-cover" src={pro4} alt=""/>
                    </div>
                    <h1>رفقای جدیدمون</h1>
                    
                    
                </motion.div>


            </div>


        </div>
    )



}


export default Main;