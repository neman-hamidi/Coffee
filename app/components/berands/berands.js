import React from 'react'
import Image from 'next/image'

export default function berands() {
  return (
    <div>
        <div className="pt-4 mb-3">
          <Image
            src="/images/Group 1.png"
            width={71}
            height={60}
            alt="fandogh"
            className="mx-auto"
          />
        </div>
        <p className="text-center mb-5 font-bold text-2xl font-rokh font-bold">برندهای مورد استفاده</p>
        <p className='text-center mb-3 text-sm'>بر اساس برند مورد علاقتان انتخاب کنید</p>
        <div className='flex justify-center flex-wrap gap-1 relative my-12 lg:flex-col lg:w-[80%] mx-auto'>
            <div className='lg:flex'>
              <Image src="/images/Border.png" width={147} height={218} alt='Berand-imgs' className='mx-auto mb-3 lg:w-24 lg:h-30'/>
              <Image src="/images/Border (1).png" width={147} height={218} alt='Berand-imgs' className='mx-auto mb-3 lg:w-24 lg:h-30'/>
              <Image src="/images/Border (2).png" width={147} height={218} alt='Berand-imgs' className='mx-auto mb-3 lg:w-24 lg:h-30'/>
              <Image src="/images/Border (3).png" width={147} height={218} alt='Berand-imgs' className='mx-auto mb-3 lg:w-24 lg:h-30'/>
            </div>
            <div className='lg:flex'>
              <Image src="/images/Border (4).png" width={147} height={218} alt='Berand-imgs' className='mx-auto mb-3 lg:w-24 lg:h-30'/>
              <Image src="/images/Border (5).png" width={147} height={218} alt='Berand-imgs' className='mx-auto mb-3 lg:w-24 lg:h-30'/>
              <Image src="/images/Border (6).png" width={147} height={218} alt='Berand-imgs' className='mx-auto mb-3 lg:w-24 lg:h-30'/>
              <Image src="/images/Border7.png" width={147} height={218} alt='Berand-imgs' className='mx-auto mb-3 lg:w-24 lg:h-30'/>
          </div>
          <span className='hidden lg:block absolute -top-8 right-14'><Image src="/images/Vector.png" width={46} height={8} alt='vector'/></span>
          <span className='hidden lg:block absolute -bottom-6 left-14'><Image src="/images/Vector.png" width={46} height={8} alt='vector'/></span>
        </div>
    </div>
  )
}
