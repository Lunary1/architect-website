import Image from "next/image";
import Link from "next/link";


const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
    <div className="bg-white shadow-sm rounded-md cursor-pointer">

        <div className="px-6 py-2">
            <div className='font-bold text-xl mb-1'>{project.attributes.name}</div>
            <p className='text-gray-700 text-base mb-1'>{project.id}</p>
        </div>
    </div>
  </Link>
  )
}

export default ProjectCard