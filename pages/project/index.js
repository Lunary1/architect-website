import axios from "axios";
import { server } from "../../config";
import Image from 'next/image';
import Meta from "../../components/Meta";
import Link from "next/link";

const Project = ({ project }) => {
  return (
    <div className="container max-w-4xl mx-auto pt-6">
        <Meta title={`WatchMe: ${movie.title}`} />
        <div className="px-3">
          <span className="flex items-center">
            <Link href="/">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
            </Link>
            <h1 className="font-bold text-3xl my-2 py-3 px-6 rounded text-sm mt-4 mb-5">{project.title}</h1>
          </span>
        </div>
        <Image src={`https://image.tmdb.org/t/p/original${project.backdrop_path}`} width={1200} height={700} className="rounded-md" />
        <p className="text-gray-600 text-sm mt-4">{project.overview}</p>
        <p className="mt-5 text-gray-600 text-sm">Genres: <span className="font-bold">{project.genres.map(genre => genre.name).join(', ')}</span></p>
        <p className="text-gray-600 text-sm">Release Date: <span className="font-bold">{project.release_date}</span></p>
    </div>

  )
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const res = await axios(`${server}/projects/${id}`)
    const project = res.data;
  
  
    return {
      props: { project }
    }
  }

export async function getStaticPaths() {
const res = await axios(`${server}/api/projects`)
const projects = res.data.results;

const ids = projects.map(project => project.id);
const paths = ids.map(id => ({ params: { id: id.toString() }  }));


return {
    paths,
    fallback: false

}
}

export default Project