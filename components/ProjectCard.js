import Image from "next/image";
import Link from "next/link";
import { server } from "../config/server";


const myLoader = ({ src }) => {
  return `https://evening-dusk-47039.herokuapp.com${src}` 
}

const ProjectCard = ({ project }) => {
  return (
    <ul>
      <li>
        <Link href={`/projects/${project.id}`} passHref>
          <div className="card">
            <div className="card-img">
              <Image loader={myLoader} src={project.attributes.featuredImage.data.attributes.url} width={600} height={450}/>
            </div>
            <div className="card-bottom">
              <h2 className="text-2xl font-semibold">{project.attributes.name}</h2>
              <p>{project.attributes.locatie}</p>
            </div>
          </div>
        </Link>
      </li>
    </ul>

  )
}

export default ProjectCard