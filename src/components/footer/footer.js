import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer flex flex-1 sm:flex-row flex-wrap flex-row justify-between text-white'>
        <ul>
            <li>Biz haqimizda</li>
            <li>Aloqa Markazi</li>
            <li>Mahsulotlar</li>
            <li>Xizmatlar</li>
        </ul>
        <ul>
          <li className=''>Bo'limlar</li>
          <li>Sotuvchilar uchun</li>
          <li>Xaridorlar uchun</li>
        </ul>
        <ul>
            <li>Qanday qilib mahsulot harid qilish yoki <br /> sotish boyicha qo'llanma olish uchun ustiga bosing</li>
            <br />
            <p>2023 © Xizmatlar litsenziyaga ega</p>
        </ul>
    </div>
  )
}

export default Footer