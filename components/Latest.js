import React from 'react'
import Link from 'next/link'

function Latest() {
  return (
    
    <div>
    <div className="max-w-[50%] pt-24">
      <h1 className="uppercase font-bold text-3xl">Onze laatste projecten</h1>
      <p className="text-sm pt-2">
        Our many works have also resulted in various awards as the best
        architect in 2022
      </p>
    </div>
    <div>
      <div className="grid grid-cols-6 text-sm pt-8">
        <div className="col-start-1 col-end-3">
          <ul className="flex justify-between">
            <li className="border-b-2 hover:border-black hover:border-b-2 transition ease-in">
              2023
            </li>
            <li className="border-b-2 hover:border-black hover:border-b-2 transition ease-in">
              2022
            </li>
            <li className="border-b-2 hover:border-black hover:border-b-2 transition ease-in">
              2021
            </li>
            <li className="border-b-2 hover:border-black hover:border-b-2 transition ease-in">
              2020
            </li>
            <li className="border-b-2 hover:border-black hover:border-b-2 transition ease-in">
              2019
            </li>
          </ul>
        </div>
        <div className="col-start-6">
          <Link href="/projecten">See all projects</Link>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
  )
}

export default Latest