import React from 'react'
import './App.css';
import logo from './assets/img/apple-podcast-logo-0CF661058F-seeklogo.com.png'

const Navbar = ()=>{

    return(
        <nav className='flex justify-between'>
            <button class="bg-gradient-to-r from-indigo-900 to-indigo-500 hover:translate-y-2 duration-200 hover:shadow-lg hover:shadow-purple-300  text-white  py-2 px-7 font-light rounded-lg text-sm">
                حساب کاربری
            </button>

            <div>
                <ul className='flex text-sm'>
                    
                    <li className='font-light hover:font-medium duration-200'>
                        تماس با ما
                    </li>
                    <li className='font-light hover:font-medium duration-200 ml-9'>
                        مقالات
                    </li>
                    <li className='font-light hover:font-medium duration-200 ml-9'>
                        کتاب های صوتی
                    </li>
                    <li className='font-light hover:font-medium duration-200 ml-9'>
                        کتاب های الکترونیکی
                    </li>
                    <li className='font-light hover:font-medium duration-200 ml-9'>
                        تعرف اشتراک
                    </li>
                    <li className='font-light hover:font-medium duration-200 ml-9'>
                        فروشگاه
                    </li>

                    

                </ul>
                
            </div>
            
            <div className='flex justify-items-center'>
                <h1 className='font-bold'>
                    مایندست
                </h1>
                <img src={logo} className='h-6 ml-2 '/>
               
            </div>
            
            
        </nav>
    )
 

}

export default Navbar;