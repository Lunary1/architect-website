import ProjectCard from "../components/ProjectCard";
import CatList from "../components/CatList";
import { server } from "../config/server";

// posts will be populated at build time by getStaticProps()
function Projecten({ data,data1 }) {
  console.log(data)
  return (
    <div className='max-w-2xl mx-auto px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className="text-center text-white mb-16 ">
        <h3 className="text-md uppercase font-semibold text-2xl">Portfolio</h3>
        <ul className="flex justify-center mt-4">
          {data1.data.map(cat => <CatList cat={cat} key={cat.id}/>)}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
          {data.data.map(project => <ProjectCard project={project} key={project.id}/>)}
      </div>
      <div className="text-center my-5">
      </div>
    </div>
    
  )
}


export async function getServerSideProps() {
  const res = await fetch(`${server}/projects?populate=*`)
  const data = await res.json()

  const res1 = await fetch(`${server}/categories?populate=*`)
  const data1 = await res1.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data, data1 }, // will be passed to the page component as props
  }
}




export default Projecten