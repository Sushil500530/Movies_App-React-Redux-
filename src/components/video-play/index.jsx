import { RxCross1 } from "react-icons/rx";
export default function VideoPlay({data,setPlayVideo}) {


    const handleClose = () => {
      
            setPlayVideo(false);
  
    }
  return (
    <section className="fixed inset-0 z-40 bg-gray-700/60 flex items-center justify-center">
      
        <div className="bg-black w-full h-[80vh] max-w-screen-lg aspect-video rounded relative overflow-hidden">
  <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-50 w-10 h-10 bg-red-500/70 text-white rounded-full hover:bg-red-500/80 flex items-center justify-center transition-all p-2"
        ><RxCross1 size={28} /></button>
        </div>
        </section>
  )
}
