import Image from "next/image";
import Link from "next/link";
import { server } from "../config/server";


const myLoader = ({ src }) => {
  return `https://evening-dusk-47039.herokuapp.com${src}` 
}

const ProjectCard = ({ project }) => {
  return (
        <Link href={`/projects/${project.id}`} passHref>
          <div className="cards bg-white cursor-pointer">
            <Image loader={myLoader} src={project.attributes.featuredImage.data.attributes.url} width={700} height={450} className="perspective-left"/>
            <div className="cards-bottom invisible sm:visible  text-black px-10 py-5">
              <h2 className="text-2xl font-semibold">{project.attributes.name}</h2>
              <p>{project.attributes.locatie}</p>
            </div>
          </div>
        </Link>
  )
}

export default ProjectCard