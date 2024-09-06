/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import { useParams } from "react-router-dom";
import useFetchDetailsData from './../../hooks/fetch-details-data/index';


export default function VideoPlay({ videoId, setPlayVideo }) {
    const {explore} = useParams();
    const {data:videoData} =  useFetchDetailsData(`/${explore}/${videoId}/videos`);
    console.log("play  data :", videoData?.results[0] || [''])

    const handleClose = () => {
        setPlayVideo(false);
    }
    return (
        <section className="fixed inset-0 z-40 bg-gray-700/60 flex items-center justify-center overflow-hidden">
            <div className="bg-black w-full ma-h-[80vh] max-w-screen-lg aspect-video rounded relative">
              {/* close button  */}
                <button
                    onClick={handleClose}
                    className="absolute -top-10 -right-1 z-50 w-10 h-10 text-white font-bold transition-all p-3"
                ><RxCross1 size={28} /></button>
               
               <iframe 
                  src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`} 
                 title="YouTube video player" 
                 className="w-full h-full rounded-none" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 frameBorder="0" 
                 allowFullScreen
               />
            </div>
        </section>
    )
}
