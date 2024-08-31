import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-5 text-center text-neutral-400 bg-neutral-600 bg-opacity-20 p-5">
      <div className="flex items-center justify-center gap-4">
        <Link to={''}>About</Link>
        <Link to={''}>Contact</Link>
      </div>
      <p className="text-sm">This Page Created By Dynamically Sushil Hemrom</p>
    </footer>
  )
}
