import ProjectCard from "../../../components/ProjectCard"
import { server } from "../../../config/server";

// posts will be populated at build time by getStaticProps()
function Projecten({ data }) {
  console.log(data)
  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className="text-center text-white">
        <h3 className="text-md uppercase font-semibold">Onze projecten</h3>
        <h2 className="text-5xl mb-24 font-serif pt-5">Overzicht:</h2>
      </div>
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
          {data.data.attributes.projects.data.map(project => <ProjectCard project={project} key={project.id}/>)}
      </div>
      <div className="text-center my-5">
        <button className="btn uppercase">Load more</button>
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
    const { catId } = context.params;
    const res = await fetch(`${server}/categories/1?populate=*`)
    const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}


export default Projecten