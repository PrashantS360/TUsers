import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex justify-center py-3 sticky top-0 bg-white z-40 mb-5">
     <Image src={'/logo.png'} alt="logo" width={70} height={70}/>
    </nav>
  )
}

export default Navbar