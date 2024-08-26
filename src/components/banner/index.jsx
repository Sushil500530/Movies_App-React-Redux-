import { useSelector } from "react-redux"

export default function BannerHome() {
    const { bannerData } = useSelector(state => state?.moviesData);
    const { imageURL } = useSelector(state => state?.moviesData);
    // console.log("what is find: " + bannerData)
    return (
        <section className="w-full h-full">

            <div className="flex min-h-full max-h-screen">
                {
                    bannerData?.length > 0 && bannerData.map((item) => {
                        return <div 
                        className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative"
                        key={item?.id}
                        >
                            <div className="w-full h-full">
                                <img
                                    src={imageURL + item?.backdrop_path}
                                    alt="banner-image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>


                            <div className="container mx-aut absolute bottom-10 max-w-md px-3  ">
                                <h1 className="font-bold text-2xl lg:text-4xl">{item?.title}</h1>
                                <p className="text-ellipsis line-clamp-3">{item?.overview}</p>
                            </div>
                        </div>
                    })
                }
            </div>

        </section>
    )
}
