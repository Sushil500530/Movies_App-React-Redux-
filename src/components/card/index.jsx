/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import moment from "moment";

export default function Card({ data, tranding, index }) {
  const { imageURL } = useSelector(state => state?.moviesData);
  return (
    <div className="w-full min-w-[250px] max-w-[250px] h-80 shadow-md relative">
      <img
        src={imageURL + data?.poster_path}
        alt="card-image"
        className="w-full h-full"
      />
      <div className="absolute top-4">
        {
          tranding && (
            <div className="px-4 py-1 bg-black/60 overflow-hidden backdrop-blur-3xl rounded-r-full ">
              # {index + 1} Tranding
            </div>
          )
        }
      </div>
      <div className="absolute bottom-0 bg-black/60 w-full h-[4.5rem] backdrop-blur-3xl p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold"> {data?.title || data?.name}</h2>
        <div className="text-neutral-400 text-base font-normal flex justify-between items-center">
          <p> {moment(data?.release_date).format("MMMM Do YYYY")}</p>
          <p className="bg-gradient-to-l from-amber-600 to-red-700 pl-4 pr-2 text-sm text-white rating py-[2px]">Rating: {Number(data?.vote_average).toFixed(1)}</p>
        </div>

      </div>
    </div>
  )
}
