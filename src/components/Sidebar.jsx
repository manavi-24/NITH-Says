"use client"
import React from 'react'
import Link from 'next/link';
import { SiAudiotechnica } from "react-icons/si"
import { SiGooglescholar } from "react-icons/si";

import Image from 'next/image'

import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { HiHome, HiDotsHorizontal } from 'react-icons/hi';

const Sidebar = () => {
    const {data: session} = useSession();
    console.log(session);
  return (
    <div className='flex flex-col justify-between height h-screen p-3'>
    <div className='flex flex-col gap-4  '>
      <Link href='/'>
        
      
      <Image
      src="/assests/nithsays_logo.png"
      width={220}
      height={250}
      alt="Picture of the author"
      className= ' cursor-pointer p-3 logo'
      
    />
       
      </Link>
      <div className='mt-[30px] mb-[20px]'>
      <Link
        href='/'
        className='flex items-center pr-[5px] pl-[8px] pb-[5px] mb-[7px] hover:bg-gray-100 rounded-full transition-all duration-400 gap-2 w-fit'
      >
        <HiHome className='w-7 h-7  '   style={{ color: 'orange' }}/>
        <span className='hidden xl:inline orange_gradient font-bold text-[16px]'>Home</span>
      </Link>
      <Link
        href='https://technotweets.vercel.app/'
        className='flex items-center pr-[5px] pl-[8px] pb-[5px] mb-[7px] hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'
      >
        <SiAudiotechnica  className='w-7 h-7  '   style={{ color: 'orange' }}/>
        <span className='hidden xl:inline orange_gradient font-bold text-[16px]'>Techno Tweets</span>
      </Link>
      <Link
        href='https://app.nith.eu.org/'
        className='flex items-center pr-[5px] pl-[8px] pb-[5px] mb-[7px] hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'
      >
        <SiGooglescholar className='w-7 h-7  '   style={{ color: 'orange' }}/>
        <span className='hidden xl:inline orange_gradient font-bold text-[16px]'>Progress Report</span>
      </Link>
      </div>
      {session ?(
        <button className='bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline'
      onClick={() => signOut()}>
        
        Logout
      </button>

      ): (
        <button className='bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline'
      onClick={() => signIn()}>
        
        Sign In
      </button>
      )}
     
     </div>
     {session && (
        <div className='text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200'>
          <img
            src={session.user.image}
            alt='user-img'
            className='h-10 w-10 rounded-full xl:mr-2'
          />
          <div className='hidden xl:inline'>
            <h4 className='font-bold'>{session.user.name}</h4>
            <p className='text-gray-500'>@{session.user.username}</p>
          </div>
          <HiDotsHorizontal className='h-5 xl:ml-8 hidden xl:inline' />
        </div>
      )}
    </div>
  
  )
}

export default Sidebar