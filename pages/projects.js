import ProjectCard from "../components/ProjectCard"
import { server } from "../config/server";

// posts will be populated at build time by getStaticProps()
function Projecten({ projects }) {
  console.log(projects);
  return (
    <div className='container max-w-7xl mx-auto pb-10 px4'>
    <h1 className='text-white text-2xl mt-8 mb-5'>Whats popular</h1>
    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
      {projects.data.map(project => <ProjectCard project={project} key={project.id}/>)}
    </div>
</div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}/projects`)
  const projects = await res.json()

  return {
    props: { projects }
  }
}

export default Projecten