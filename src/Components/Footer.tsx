import logo from '../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className="bg-theme ">
            <div className="col-12 p-5">
                <div className="d-flex justify-content-between  align-content-center ">
                    <div className="col-3">
                        <img src={logo} alt="" className='logo' />
                    </div>
                    <div className="col-3">
                        <h5 className='fw-bold text-white'>Company</h5>
                        <ul className='p-0 m-0 lh-lg '>
                            <li><a href="" className='text-white fw-light '>Home</a></li>
                            <li><a href="" className='text-white fw-light '>Our Offering</a></li>
                            <li><a href="" className='text-white fw-light '>Our Team</a></li>
                            <li><a href="" className='text-white fw-light '>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h5 className='fw-bold text-white lh-lg '>Useful Link</h5>
                        <ul className='p-0 m-0'>
                            <li><a href="" className='text-white fw-light '>Blog</a></li>
                            <li><a href="" className='text-white fw-light '>FAQ's</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <div className="d-flex align-content-center">
                            <div className="d-flex align-content-center me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope text-white " viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                            </div>
                            <div className='text-white'>
                                <p className='mb-0 fw-bold '>Email :</p>
                                <p className='mb-0 fw-light '>support@gmail.com</p>
                            </div>
                        </div>
                        <div className="d-flex align-content-center mt-2">
                            <div className="d-flex align-content-center me-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone text-white " viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>
                            <div className='text-white'>
                                <p className='mb-0 fw-bold '>Phone :</p>
                                <p className='mb-0 fw-light '>+91 | 7019258520</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom px-5 ">
                <div className="d-flex">
                    <div className="col-8">
                        <span className='text-white'>Copyright 2023. Designed by INRE Global</span>
                    </div>
                    <div className="col-4">
                        <ul className='d-flex justify-content-between '>
                            <li className='text-white'>LinkedIn</li>
                            <li className='text-white'>Facebook</li>
                            <li className='text-white'>Twitter</li>
                            <li className='text-white'>Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
