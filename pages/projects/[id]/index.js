import { server } from "../../../config/server";

const Project = ( project ) => {
  return (
    <div>{project.project.data.attributes.name}</div>
  )
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`${server}/projects/${id}`)
  const project = await res.json()

  return {
    props: { project }
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${server}/projects`)
  const projects = await res.json()

  const ids = projects.data.map(project => project.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export default Project