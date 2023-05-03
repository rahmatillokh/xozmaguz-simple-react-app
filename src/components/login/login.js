import React from 'react'
import Button from '../jsx-components/button'
import { styles } from '../utils/style'

const Login = () => {
  return (
    <div id='login' className='py-5 font-montserrat login-page flex justify-around sm:flex-row flex-col items-center text-center bg-primary text-ligthWhite'>
        <div className="login-title">
          <h1 className={`${styles.heading}`}>Registration page</h1>
        </div>
        <div className="login-input flex flex-col justify-between items-center">
          <input type="text" placeholder='Telefon raqam' className='w-[250px] h-[40px] rounded-[10px] placeholder:text-center outline-none text-primary font-semibold text-center'/><br />
          <div className="code">
            <input type="text" placeholder='Kod' className='w-[115px] h-[40px] rounded-[10px] placeholder:text-center outline-none text-primary font-semibold text-center'/>
            <a href="#" className='ml-5'>Kodni jonatish</a>
          </div><br />
          <input type="password" placeholder='Parolni kiriting' className='w-[250px] h-[40px] rounded-[10px] placeholder:text-center outline-none text-primary font-semibold text-center' /><br />
        </div>
        <button className = "text-[30px] bg-slate-800 py-2 px-8 rounded-[30px] font-semibold">Kirish</button>
    </div>
  )
}

export default Login