import { useParams } from "react-router-dom"
import { useFetchDetailsData } from "../../hooks/fetch-details-data";
import { useSelector } from "react-redux";

export default function MoviesDetails() {
  const { id, explore } = useParams();
  const { imageURL } = useSelector(state => state?.moviesData);
  const { data: detailsData } = useFetchDetailsData(`/${explore}/${id}`)
  const { data: castData } = useFetchDetailsData(`/${explore}/${id}/credits`)

  console.log("details data: ", castData)

  return (
    <div>
      {/* <h2 className="text-lg lg:text-xl my-3 font-semibold capitalize">
         Movies Details
        </h2> */}
      <div className="w-full h-[310px] relative">
        <div className="w-full h-full">
          <img
            src={imageURL + detailsData?.backdrop_path}
            alt="details image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

      </div>
    </div>
  )
}
