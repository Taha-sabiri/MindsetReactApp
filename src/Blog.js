import React from 'react'
import './App.css';
import pro4 from './assets/img/pexels-photo-2380794.jpeg'
import pro2 from './assets/img/beautiful-face-young-woman-with-clean-fresh-skin-isolated-white_186202-7897.avif'
import pro3 from './assets/img/c3444e7bb7b175e74fe636834c616878.jpg'
import { motion } from "framer-motion"

const Blog = () =>{
    return(
      <div className='min-h-screen flex mt-36'>
        <div className='w-1/2 flex flex-col justify-start items-end'>
            <motion.div
            viewport={{ once: true }}
             initial={{ opacity: 0, scale: 0.5 ,x:200 }}
             whileInView={{ opacity: 1, x:0 , scale:1}}
             transition={{
             duration: 0.8,
             delay: 0.5,
             ease: [0, 0.71, 0.2, 1.01]
             }}
            
            className='flex content-center items-center justify-center text-center '>
                <div className='bg-green-500 w-10 h-6 rounded-full text-xs mr-3  flex justify-center items-center '> <h1 className='text-white '>رایگان</h1></div>
                <h1 className='text-3xl font-bold  '>مقالات</h1>
            </motion.div>

            <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5 ,x:200 }}
            whileInView={{ opacity: 1, x:0 , scale:1}}
            transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            
            className='flex content-center items-center justify-center text-center mt-5 '>
                <h1 className='text-sm text-gray-600 '>امروز : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                <div className='bg-yellow-400 w-5 h-2 rounded-full text-xs   flex justify-center items-center ml-2 '></div>    
            </motion.div>

            <motion.h1
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5 ,x:200 }}
            whileInView={{ opacity: 1, x:0 , scale:1}}
            transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            
            
            
            className='text-right mt-7 pl-4 leading-7 '>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </motion.h1>
            <motion.button
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5 ,x:200 }}
            whileInView={{ opacity: 1, x:0 , scale:1}}
            transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            
            class="bg-gradient-to-r from-indigo-900 to-indigo-500 hover:translate-y-2 duration-200 hover:shadow-lg hover:shadow-purple-300  text-white  py-2 px-7 font-light rounded-lg text-sm mt-8">
                        ورود به بخش مقالات
            </motion.button>
            
            
            
            
            

        </div>
        <div className='w-1/2 flex  -space-x-32 p-9 justify-center  '>
            <motion.div
            
            initial={{ opacity: 0, scale: 0.5 ,x:200 }}
            whileInView={{ opacity: 1, x:0 , scale:1}}
            viewport={{ once: true }}
            transition={{
            
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }}

            className='w-60 h-80 rounded-2xl shadow-2xl bg-white z-20 p-2 text-right'>
                <img src={pro4} className='rounded-lg h-40 w-full object-cover'/>
                <h1 className='font-bold mt-2'> چرا و چگونه کتاب بخوانیم؟</h1>
                <p className='text-xs mt-4 text-gray-700'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
            </motion.div>
            
            <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5 , }}
            whileInView={{ opacity: 1, scale:1}}
            transition={{
          
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            
            className='w-60 h-72 rounded-2xl shadow-2xl bg-white z-10 p-2 text-right blur-sm'>
                <img src={pro3} className='rounded-lg h-32 w-full object-cover'/>
                <h1 className='font-bold mt-2'> چرا و چگونه کتاب بخوانیم؟</h1>
                <p className='text-xs mt-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                
            </motion.div>
            <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5 , }}
            whileInView={{ opacity: 1, scale:1}}
            transition={{
           
            duration: 0.8,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01]}}
            
            className='w-60 h-64 rounded-2xl shadow-2xl bg-white z-0 p-2 text-right blur-md'>
                <img src={pro4} className='rounded-lg h-28 w-full object-cover'/>
                <h1 className='font-bold mt-2'> چرا و چگونه کتاب بخوانیم؟</h1>
                <p className='text-xs mt-4 '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>

            </motion.div>
           
            
            

        </div>

      </div>
    )
}

export default Blog;