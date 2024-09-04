import { useParams } from "react-router-dom"
import { useFetchDetailsData } from "../../hooks/fetch-details-data";

export default function MoviesDetails() {
  const {id,explore}= useParams();
  const {data:detailsData} = useFetchDetailsData(`/${explore}/${id}`)
  const {data:castData} = useFetchDetailsData(`/${explore}/${id}/credits`)

console.log("details data: " , castData)

  return (
    <div className="mt-16">
        <h2 className="text-lg lg:text-xl my-3 font-semibold capitalize">
         Movies Details
        </h2>
        <h2 className="text-lg lg:text-xl my-3 font-semibold capitalize">
        {detailsData?.status}
        </h2>
    </div>
  )
}
