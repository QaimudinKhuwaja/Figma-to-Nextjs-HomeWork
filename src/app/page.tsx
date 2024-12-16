import React from 'react'
import Logo from './assets/Logo.png'
import Content from './assets/Content.png'
import Apple from './assets/Apple.png'
import microsoft from './assets/microsoft 1.png'
import slack from './assets/slack.png'
import Google from './assets/Google.png'
 import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    {/* Navbar starts */}
    <div className='h-[85px] w-[1350px] ml-[1px] bg-[#043873] pr-[220px] pt-[16px] pb-[16px]  flex justify-around'>
    <div className='pt-[10px]'>
       <Image
           src={Logo}
           alt='logo'
           width={185}
           height={32}
            />
            </div>

<div className=' w-[500.5px] h-[60px] gap-[150px]  flex'>

  <div className='w-[380] h-[23px] '>
      <ul className='pt-[11px] gap-[35px] flex text-white text-[16px]'>
        <li>Product</li>
        <li>Solution</li>
        <li>Resourses</li>
        <li>Prices</li>
         </ul>
         </div>

        <div> <button className='w-[115px] h-[50px] bg-[#FFE492] rounded-[8px] text-black gap-[24px]'>Login</button> </div>
         </div>
         
        </div>
{/* eends */}

    {/* Hero section starts */}
 <div className='h-[560px] w-[1350px] ml-[1px] bg-[#043873] content-center'>

 <div className='flex justify-center gap-[10px]'>
 <div>
 <h1 className=' font-[680] text-[45px] leading-[66px] text-[#FFFFFF] '>Get More Done with <br/> whitepace</h1>
 <p className=' mt-[10px] font-[400] text-[16px] leading-[30px] text-[#FFFFFF] '>Project management software that enables your teams to collaborate, plan,<br/> analyze and manage everyday tasks</p>
 <button className='mt-[40px] text-[#FFFFFF] bg-[#4F9CF9] rounded-[8px] p-[20px] gap-[10px] font-inter font-[500] text-[18px] leading-[23px]'>Try Whitepace free </button>
 </div>
 <div className='bg-[#C4DEFD] h-[310px] w-[415px]  '></div>
 </div>

 </div>
 {/* eends */}



   {/* 2nd section starts */}
    <div className='h-[560px] w-[1350px] ml-[1px] bg-[#FFFFFF] content-center'>

 <div className='flex justify-center gap-[20px]'>



<div>
 <h1 className=' font-[680] text-[45px] leading-[66px] text-black '>Project <br /> Management</h1>
 <p className=' mt-[10px] font-[400] text-[16px] leading-[30px] text-black '>Images, videos, PDFs and audio files are supported. Create math expressions and <br /> diagrams directly from the app. Take photos with the mobile app and save them <br /> to a note.</p>
 <button className='h-[55px] w-[140px] mt-[40px] text-black bg-[#4F9CF9] rounded-[8px] p-[15px] gap-[10px] font-inter font-[500] text-[18px] leading-[23px]'>Get Started </button>
 </div>


 <div className='bg-[#C4DEFD] h-[310px] w-[415px]  '></div>

 </div>

 </div>
 {/* eends */}



    {/* 3rd section starts */}
    <div className='h-[560px] w-[1350px] ml-[1px] bg-[#FFFFFF] content-center'>

 <div className='flex justify-center gap-[40px]'>

 <div>
        <Image
           src={Content}
           alt='logo'
           width={385}
           height={50}
            />
            </div>

 <div>
<h1 className=' font-[680] text-[45px] leading-[66px] text-black '>Work together</h1>
 <p className=' mt-[10px] font-[400] text-[16px] leading-[30px] text-black '>With whitepace, share your notes with your colleagues and collaborate on them. <br />You can also publish a note to the internet and share the URL with others.</p>
 <button className='h-[55px] w-[140px] mt-[40px] text-black bg-[#4F9CF9] rounded-[8px] p-[15px] gap-[10px] font-inter font-[500] text-[18px] leading-[23px]'>Let's Go </button>
 </div>

 </div>

 </div>
 {/* eends */}






   {/* 4th section starts */}
   <div className='h-[560px] w-[1350px] ml-[1px] bg-[#043873] content-center'>

<div className='flex justify-center gap-[20px]'>



 <div>
 <h1 className=' font-[680] text-[45px] leading-[66px] text-[#C4DEFD] '> Use as Extension</h1>
 <p className=' mt-[10px] font-[400] text-[16px] leading-[30px] text-[#C4DEFD] '>Use the web clipper extension, available on Chrome and Firefox, to save web pages <br /> or take screenshots as notes</p>
 <button className='h-[55px] w-[140px] mt-[40px] text-[#C4DEFD] bg-[#4F9CF9] rounded-[8px] p-[15px] gap-[10px] font-inter font-[500] text-[18px] leading-[23px]'>Let's Go </button>
 </div>


 <div className='bg-[#C4DEFD] h-[310px] w-[415px]  '></div>

 </div>

 </div>
 {/* eends */}



   {/* 5th section starts */}
   <div className='h-[560px] w-[1350px] ml-[1px] bg-[#FFFFFF] content-center'>

 <div className='flex justify-center gap-[20px]'>

 <div className='bg-[#C4DEFD] h-[310px] w-[415px]  '></div>
 <div>
 <h1 className=' font-[680] text-[45px] leading-[66px] text-black '>Customise it to <br /> your needs</h1>
 <p className=' mt-[10px] font-[400] text-[16px] leading-[30px] text-black '>Customise the app with plugins, custom themes and multiple text editors (Rich <br /> Text or Markdown). Or create your own scripts and plugins using the Extension <br /> API.</p>
 <button className='h-[55px] w-[140px] mt-[40px] text-black bg-[#4F9CF9] rounded-[8px] p-[15px] gap-[10px] font-inter font-[500] text-[18px] leading-[23px]'>Let's Go </button>
 </div>

 </div>

 </div>
 {/* eends */}



 {/* 6th Section Start here */}
 <div className="w-[1348px] h-[370px] bg-[#043873] text-[#ffffff] text-[14px] text-center content-center ">

  <h1 className="text-[35px] font-[750] pb-4">Your work, everywhere you are</h1>
  <p>Access your notes from your computer, phone or tablet by synchronising with
      various services, including whitepace, Dropbox <br/> and OneDrive. The app is available 
     on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>

     <button className="bg-[#3482cf] w-[150px] h-[40px] rounded-[8px] mt-6 p-[10px] pb-4">Try Taskey</button>

 </div>
   {/* eends */}



 {/* 7th Section Start here */}
 <div className="w-[1348px] h-[370px] bg-[#ffffff] text-black text-[14px] text-center content-center ">

   <h1 className="text-[35px] font-[750] pb-10">Our sponsors</h1>
 <div className='flex justify-around'>

  <div>
  <Image  src={Apple}
           alt='logo'
           width={40}
           height={50}/> 
  </div>

   <div>
   <Image  src={microsoft}
           alt='logo'
           width={120}
           height={50}/> 
  </div>

   <div>
  <Image  src={slack}
           alt='logo'
           width={120}
           height={50}/> 
  </div>

  <div>
   <Image  src={Google}
           alt='logo'
           width={120}
           height={50}/> 
  </div>

 </div>           

 </div>
   {/* eends */}





{/* Footer section starts */}
 <div className='h-[250px] w-[1350px]  bg-[#043873] content-center'>

 <div className='flex justify-around mt-[30px]'>

   <div>
   <Image
           src={Logo}
           alt='logo'
           width={185}
           height={32}
            />
  <p className='font-[400] text-[18px] leading-[20px] text-[#FFFFFF] '>whitepace was created for <br /> the new ways we live and work.<br /> We make a better workspace <br />around the world</p>
 </div>

 <div>
   <ul className='text-[#FFFFFF] text-[16px] leading-[30px] font-[400]'>
     <h1 className=' text-[#FFFFFF] font-[700] text-[18px] '>Product</h1>
     <li>Overview</li>
     <li>Pricing</li>
     <li>Customer</li>
   </ul> 
   </div>
<div>
  <ul className='text-[#FFFFFF] text-[16px] leading-[30px] font-[400]'>
    <h1 className=' text-[#FFFFFF] font-[700] text-[18px] '>Resource</h1>
    <li>Blog</li>
    <li>Guides $ turorials</li>
     <li>Help center</li>
  </ul>
 </div>


 <div>
  <ul className='text-[#FFFFFF] text-[16px] leading-[30px] font-[400]'>
    <h1 className=' text-[#FFFFFF] font-[700] text-[18px] '>Company</h1>
    <li>about us</li>
    <li>Careers</li>
    <li>Media kit</li>
   </ul>
 </div>
 </div>


 <div className='ml-[110] mt-10 border-[0.00001px] bg-[#2E4E73] w-[1100px]'></div>
 <h1 className='text-center mt-5  text-[#FFFFFF] font-[400] text-[16px]'>©2021 Whitepace LLC.</h1>



 </div>

       </>
  )
}

export default Navbar;