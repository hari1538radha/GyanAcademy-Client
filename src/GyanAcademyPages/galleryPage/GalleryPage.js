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
        <div className='columns-2 gap-x-[15px] sm:columns-1'>
        {
            data.map((obj) => {
                return (
                    <div>
                        <img src={obj.imgsrc} alt='' className='w-[100%] pt-[10px] rounded-[10px] scale-100 ease-in-out duration-1000 hover:scale-110' />
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default GalleryPage