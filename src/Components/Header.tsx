import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header className='container-fluid shadow-sm '>
        <div className="d-flex align-items-end  justify-content-between pt-3 px-3 ">
            <div className="logo mb-2 ">
                <img src={logo} alt="" />
            </div>
            <ul className="menu d-flex align-items-center  justify-content-between m-0 nav nav-underline">
                <li className='nav-item'><a href="#" className=' fw-semibold  p-2 nav-link active '>Home</a></li>
                <li className='nav-item'><a href="#" className=' fw-semibold  p-2 nav-link'>Our Offerings</a></li>
                <li className='nav-item'><a href="#" className=' fw-semibold  p-2 nav-link'>Our Team</a></li>
                <li className='nav-item'><a href="#" className=' fw-semibold  p-2 nav-link'>Contact Us</a></li>
                <li className='nav-item'><a href="#" className=' fw-semibold  p-2 nav-link'>Blogs</a></li>
            </ul>
            <button className='btn text-white bg-theme mb-2' >
                    Register Now
            </button>
        </div>
    </header>
  )
}

export default Header
