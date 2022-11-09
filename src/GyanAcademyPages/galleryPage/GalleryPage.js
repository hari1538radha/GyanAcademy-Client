import React from 'react';
import img1 from './asserts/img-1.png';
import img2 from './asserts/img-2.png';
import img3 from './asserts/img-3.png';
import img4 from './asserts/img-4.png';
import img5 from './asserts/img-5.png';
import img6 from './asserts/img-6.png';
import img7 from './asserts/img-7.png';
import img8 from './asserts/img-8.png';

function GalleryPage() {

    const data =[
        {
            imgsrc: img1,
        },
        {
            imgsrc: img2,
        },
        {
            imgsrc: img3,
        },
        {
            imgsrc: img4,
        },
        {
            imgsrc: img5,
        },
        {
            imgsrc: img6,
        },
        {
            imgsrc: img7,
        },
        {
            imgsrc: img8,
        }
    ]

  return (
    <div className='ml-[160px] mr-[160px] mb-[15px]'>
        <div>
            <h1 className='flex justify-center text-[50px] font-medium mt-[38px] mb-[28px]'>Gallery</h1>
        </div>
        <div className='columns-2 row-2 gap-[15px] sm:columns-1'>
        {
            data.map((obj) => {
                return (
                   
                        <div className='w-full h-full overflow-hidden mb-5'>

                        <img src={obj.imgsrc} alt='' className='w-full h-full  rounded-xl ease-out duration-[2000ms] hover:scale-110 ' />

                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default GalleryPage