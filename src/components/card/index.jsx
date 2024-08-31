/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

export default function Card({ data, tranding,media_type, index }) {
  const { imageURL } = useSelector(state => state?.moviesData);
  const mediaType = data?.mediaType ?? media_type ;
  return (
    <Link to={"/" + mediaType + "/" + data?.id}>
      <div className="w-full min-w-[270px] max-w-[270px] h-80 rounded overflow-hidden relative z-10 hover:scale-105 transition-all">
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
    </Link>
  )
}
