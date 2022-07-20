import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sliderlinks } from './Sliderlinks';
import { ChevronRight, ChevronLeft } from 'react-feather'

let count = 0;
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleOnNextClick = () => {
        count = (count + 1) % Sliderlinks.length;
        setCurrentIndex(count)
    }
    const handleOnPrevClick = () => {
        const productsLength = Sliderlinks.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count)
    }

    useEffect(() => {
        startSlider()
    }, [])

    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick()
        }, 3000)
    }

    return (
        <div className="w-full select-none relative">
            <Link to={Sliderlinks[currentIndex].link} >
                <div >
                    <img src={Sliderlinks[currentIndex].imgSrc} alt="featured Images" />
                </div>
            </Link>
            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center '>
                <button className='text-white' onClick={handleOnPrevClick}>
                    <ChevronLeft />
                </button>
                <button className='text-white' onClick={handleOnNextClick}>
                    <ChevronRight />
                </button>
            </div>
        </div>
    )
}

export default Slider