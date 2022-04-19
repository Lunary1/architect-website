import { server } from "../../../config/server";
import React from 'react';
import { useState, useEffect } from 'react';
import FsLightbox from 'fslightbox-react';
import Image from 'next/image'
import house from '../../../public/house.webp'

const Project = ( project ) => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  console.log(project)

  const imgArray = project.project.data.attributes.gallery.data.map(image => image.attributes.formats.large.url)
  const categorieArray = project.project.data.attributes.categories.data.map(cat => cat.attributes.name)

  const featuredImage = project.project.data.attributes.featuredImage.data.attributes.url




  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 bg-white overflow-hidden sm:rounded-lg">
      <h1 className="text-4xl font-semibold uppercase text-center mb-12">{project.project.data.attributes.name}</h1>
      <div className={'image-container'}>
        <Image src={featuredImage} width={1216} height={806} className={'image'}  onClick={() => setToggler(!toggler)} />
      </div>

      <FsLightbox
      toggler={toggler}
      sources={imgArray}
      />
      
      <div className=" mt-4">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Projectnaam</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{project.project.data.attributes.name}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Categorie</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{[categorieArray]}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Locatie</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{project.project.data.attributes.locatie}</dd>
          </div>


        </dl>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`${server}/projects/${id}?populate=*`)
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