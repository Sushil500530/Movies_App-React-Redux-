
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux"

export default function BannerHome() {
    const { bannerData } = useSelector(state => state?.moviesData);
    const { imageURL } = useSelector(state => state?.moviesData);
    const [currentImage,setCurrentImage]= useState(0)

    const handlePreviouse = ()=> {
        if(currentImage >0){
            setCurrentImage(prev =>prev - 1)
        }
    }
    const handleNext = ()=> {
        if(currentImage < bannerData?.length - 1){
            setCurrentImage(prev =>prev + 1)
        }
    }

    // auto-matic  slide carouser 
    useEffect(()=> {
        const interval = setInterval(()=>{
            if(currentImage < bannerData?.length - 1){
                setCurrentImage(prev =>prev + 1)
            }
        },4000)
        return ()=> clearInterval(interval)
    },[bannerData, currentImage])
    // console.log("what is find: " + bannerData)
    return (
        <section className="w-full h-full">

            <div className="flex min-h-full max-h-screen overflow-hidden">
                {
                    bannerData?.length > 0 && bannerData.map((item) => {
                        return <div
                            className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
                            style={{transform: `translateX(-${currentImage * 100}%)`}}
                            key={item?.id}
                        >
                            <div className="w-full h-full">
                                <img
                                    src={imageURL + item?.backdrop_path}
                                    alt="banner-image"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* button next and previouse like carousel  */}
                            <div className="absolute top-0 w-full h-full hidden items-center justify-between z-10 group-hover:lg:flex">
                                <button 
                                onClick={handlePreviouse}
                                className="bg-neutral-300 hover:bg-neutral-100 transition-all text-black rounded-full text-2xl p-1"
                                >
                               <FaAngleLeft /> 
                                </button>
                                <button 
                                onClick={handleNext}
                                className="bg-neutral-300 hover:bg-neutral-100 transition-all text-black rounded-full text-2xl p-1"
                                >
                                <FaAngleRight />
                                </button>
                            </div>



                            {/* shadow bg in banner  */}
                            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

                            {/* footer details in banner  */}
                            <div className="container mx-auto ">
                                <div className="absolute bottom-10 max-w-md px-3  ">
                                    <h1 className="font-bold text-2xl lg:text-4xl">{item?.title || item?.name}</h1>
                                    <p className="text-ellipsis line-clamp-3 my-2">{item?.overview}</p>
                                    <div className=" flex items-center gap-5">
                                        <h1>Rating : {Number(item?.vote_average).toFixed(1)}+</h1>
                                        <span>|</span>
                                        <h1>Views :
                                            {Number(item?.popularity).toFixed(0)}</h1>
                                    </div>
                                    <button
                                        className="bg-gradient-to-l from-amber-600 to-red-700 active:scale-90 transition-all font-normal text-base px-4 py-2 rounded mt-3"
                                    >Play Now</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </section>
    )
}
