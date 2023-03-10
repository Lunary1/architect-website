import React from 'react'

export default function CatList(props) {
const cats = props.categories;

  return (
<div>
        {cats.map(cat =>
          <div
            key={cat.id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h2>{cat.naam}</h2>
          </div>)}
      </div>
  )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}