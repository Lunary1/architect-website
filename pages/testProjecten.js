// pages/index.js

import Layout from '../components/Layout'
import NestedLayout from '../components/nested-layout'
import SecondaryNav from '../components/SecondaryNav'


export default function testProjecten() {
  return (
    <div>
        <SecondaryNav />
        <div className='absolute top-[50%] left-[33%] z-10'>
            <h1 className='text-8xl '>RESIDENTIAL</h1>
        </div>
    </div>
  )
}

testProjecten.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}