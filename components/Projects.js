import ProjectCard from './ProjectCard'



const Projects = ({ projects }) => {
  return (
      <div className='bg-gray-700 container max-w-7xl mx-auto pb-10 px4'>
          <h1 className='text-white text-2xl mt-8 mb-5'>Whats popular</h1>
          <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {projects.map(project => <ProjectCard project={project} key={project.id}/>)}
          </div>
          
      </div>
  )
}

export default Projects