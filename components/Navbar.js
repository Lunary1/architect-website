import Link from "next/link";
import Image from "next/image"
import logo2 from "../public/logo.jpg"
import { MenuIcon } from '@heroicons/react/solid'
import { MailIcon } from '@heroicons/react/solid'

 
 const Navbar = () => {

   return (
     <div className="bg-black overlay">
      <div className="md:container md:mx-auto py-2">
        <div className="flex justify-between items-center">
          <div className="left">
            <Link href={"/"}>
              <a href=""><Image src={logo2} height={60} width={80}/></a>
            </Link>

          </div>
          <div className="right flex flex-wrap items-center">

              <a className="btn-header rounded-full bg-white mr-2"><MenuIcon className="h-7 w-7 text-black m-2"/></a>

            <Link href={'/contact'}>
              <a className="btn-header rounded-full bg-white"><MailIcon className="h-7 w-7 text-black m-2"/></a>
            </Link>
          </div>
        </div>
      </div>

     {/* <nav className="main-menu-con">
          <div className="flex flex-col content-center">
            <div className="container-fluid mt-8 md:mt-12">
              <div className="row mb-4 md:mb-6">
                <div className="grid grid-cols-12">
                  <div className="col-span-7">
                    <ul className="nav main-menu">
                      <li>
                        <Link href={'/'}><a className="text-3xl">Home</a></Link>
                      </li>
                      <li>
                        <Link href={'/projects'}><a className="text-3xl">Projecten</a></Link>
                      </li>
                      <li>
                        <Link href={'/about'}><a className='text-3xl'>Over ons</a></Link>
                      </li>
                      <li>
                        <Link href={'/contact'}><a className="text-3xl">Contact</a></Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-5">

                  </div>
                </div>
              </div>
            </div>

          </div>
   </nav> */}
     </div>   
   
   
   
   






   )
 }
 
 export default Navbar


 