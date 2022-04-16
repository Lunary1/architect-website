import ProjectCard from "../components/ProjectCard"
import { server } from "../config/server";

// posts will be populated at build time by getStaticProps()
function Projecten({ projects }) {
  return (
    <div className='container bg min-w-full  p-1 pt-6'>
      <div className="text-center text-white">
        <h3 className="text-md uppercase font-semibold">Onze projecten</h3>
        <h2 className="text-5xl mb-24 font-serif pt-5">Overzicht:</h2>
      </div>
      <div className='grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
          {projects.data.map(project => <ProjectCard project={project} key={project.id}/>)}
      </div>
      <div className="text-center my-5">
        <button className="btn uppercase">Load more</button>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}/projects?populate=*`)
  const projects = await res.json()

  
  return {
    props: { projects }
  }
}




export default Projecten