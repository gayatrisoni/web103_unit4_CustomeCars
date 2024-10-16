import React from 'react'
import '../App.css'
import '../css/Navigation.css'

const Navigation = () => {
    
    return (
        <nav >
            <div className='flex justify-between'>
                <ul>
                    <li><h1 className='text-white'>Bolt Bucket 🏎️</h1></li>
                </ul>
                <div className='flex justify-between items-center'>
                    <a href='/' role='button' className='text-white bg-red-800 p-2 rounded-md'>Customize</a>
                    <a href='/customcars' role='button' className='text-white bg-red-800 p-2 rounded-md'>View Cars</a>
                </div>

            </div>
            <div className='flex justify-between'>
                <div className='flex'>
                    <div className='flex items-center gap-2'>
                        <input type='checkbox'/>
                        <label className='text-white text-2xl '>Convertible</label>
                    </div>
                    <div>
                        <button className='bg-red-800 text-white p-2 rounded-md'>EXTERIOR</button>
                        <button className='bg-red-800 text-white p-2 rounded-md'>ROOF</button>
                        <button className='bg-red-800 text-white p-2 rounded-md'>WHEELS</button>
                        <button className='bg-red-800 text-white p-2 rounded-md'>INTERIOR</button>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder='My New Car' className='p-2 rounded-md' />
                    <button className='bg-red-800 text-white p-2 rounded-md'>CREATE</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation