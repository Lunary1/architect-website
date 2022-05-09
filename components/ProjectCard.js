import Image from "next/image";
import Link from "next/link";
import { server } from "../config/server";


const myLoader = ({ src }) => {
  return `${src}` 
}

const ProjectCard = ({ project }) => {
  return (
        <Link href={`/projects/${project.id}`} passHref>
          <a className="group text-white">
              <div className="w-full aspect-w-1 aspect-h-1 rounded-sm overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ">
                <Image loader={myLoader} src={project.attributes.featuredImage.data.attributes.url} width={700} height={450} className="w-full h-full object-center object-cover group-hover:opacity-75"/>
              </div>
              <h3 className="mt-2 text-lg font-medium ">{project.attributes.name}</h3>
              <p className="mt-2 text-sm ">{project.attributes.locatie}</p>
            </a>
        </Link>
  )
}

export default ProjectCard