import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='submit' className={`py-3 px-6 font-montserrat font-medium text-[18px] bg-blue-gradient rounded-lg outline-none ${styles}`}>Boshlash</button>
  )
}

export default Button