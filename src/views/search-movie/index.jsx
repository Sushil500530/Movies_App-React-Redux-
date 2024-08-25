import { useLocation } from "react-router-dom"

export default function SearchMovie() {
  const location = useLocation();
  console.log(location?.search)
  return (
    <div>SearchMovie</div>
  )
}
