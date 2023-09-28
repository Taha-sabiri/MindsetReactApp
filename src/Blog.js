import React from 'react'
import './App.css';
import pro4 from './assets/img/pexels-photo-2380794.jpeg'
import pro2 from './assets/img/beautiful-face-young-woman-with-clean-fresh-skin-isolated-white_186202-7897.avif'
import pro3 from './assets/img/c3444e7bb7b175e74fe636834c616878.jpg'

const Blog = () =>{
    return(
      <div className='min-h-screen flex mt-36'>
        <div className='w-1/2 flex flex-col justify-start items-end'>
            <div className='flex content-center items-center justify-center text-center '>
                <div className='bg-green-500 w-10 h-6 rounded-full text-xs mr-3  flex justify-center items-center '> <h1 className='text-white '>رایگان</h1></div>
                <h1 className='text-3xl font-bold  '>مقالات</h1>
            </div>

            <div className='flex content-center items-center justify-center text-center mt-5 '>
                <h1 className='text-sm text-gray-600 '>امروز : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                <div className='bg-yellow-400 w-5 h-2 rounded-full text-xs   flex justify-center items-center ml-2 '></div>    
            </div>

            <h1 className='text-right mt-7 pl-4 leading-7 '>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </h1>
            <button class="bg-gradient-to-r from-indigo-900 to-indigo-500 hover:translate-y-2 duration-200 hover:shadow-lg hover:shadow-purple-300  text-white  py-2 px-7 font-light rounded-lg text-sm mt-8">
                        ورود به بخش مقالات
            </button>
            
            
            
            
            

        </div>
        <div className='w-1/2 flex  -space-x-32 p-9 justify-center  '>
            <div className='w-60 h-80 rounded-2xl shadow-2xl bg-white z-20 p-2 text-right'>
                <img src={pro4} className='rounded-lg h-40 w-full object-cover'/>
                <h1 className='font-bold mt-2'> چرا و چگونه کتاب بخوانیم؟</h1>
                <p className='text-xs mt-4 text-gray-700'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
            </div>
            
            <div className='w-60 h-72 rounded-2xl shadow-2xl bg-white z-10 p-2 text-right blur-sm'>
                <img src={pro3} className='rounded-lg h-32 w-full object-cover'/>
                <h1 className='font-bold mt-2'> چرا و چگونه کتاب بخوانیم؟</h1>
                <p className='text-xs mt-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                
            </div>
            <div className='w-60 h-64 rounded-2xl shadow-2xl bg-white z-0 p-2 text-right blur-md'>
                <img src={pro4} className='rounded-lg h-28 w-full object-cover'/>
                <h1 className='font-bold mt-2'> چرا و چگونه کتاب بخوانیم؟</h1>
                <p className='text-xs mt-4 '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>

            </div>
           
            
            

        </div>

      </div>
    )
}

export default Blog;