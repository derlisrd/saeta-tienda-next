import Image from "next/image";
import Link from "next/link";


const lista = [
  {
    label:'Home',
    route:'/'
  },
  {
    label:'Tienda',
    route:'/tienda'
  }
]


const Navbar = ()=>{
  
  return(
    <div className="container mx-auto p-2 w-100 border">
        <div className="flex justify-between">
          
          <div className="p-2">
            <h1>logo</h1>
          </div>

          <div className="p-2">
            <ul className="flex flex-wrap gap-2" >
              {
                lista.map(e=>(
                  <li key={e.route}>
                    <Link href={e.route}>{e.label}</Link>
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
    </div>
  )
}

export default Navbar;

/* 


*/