import about from '../assets/images/about.png'

const About = () => {
    return (
        <section className=" container my-4">
            <div className="about">
                <div className="d-flex">
                    <div className="col-6">
                        <img src={about} alt="" className='img-fluid p-3' />
                    </div>
                    <div className="col-6 py-4 pe-3 ps-2">
                        <h2 className='my-4'>Who We Are</h2>
                        <p className='text-justify text-secondary mb-4'>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p>
                        <button className='btn  border-black rounded-1  '>Contact Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2 " viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
