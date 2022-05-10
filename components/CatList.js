import Link from "next/link";
import { server } from "../config/server";



const CatList = ({ cat }) => {
  return (
    <Link href={`/categories/${cat.id}`} passHref>
        <a className="lowercase mr-2 text-white">
            <h2>{cat.attributes.name}</h2>
        </a>
    </Link>
  )
}

export default CatList