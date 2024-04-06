import offer1 from '../assets/images/offer1.png'
import offer2 from '../assets/images/offer2.png'
import offer3 from '../assets/images/offer3.png'

const Offer = () => {
    return (
        <section className="container my-4 ">
            <div className="offer">
                <div className="text-center">
                    <h2 className="headline  d-inline-block lh-lg ">Our Offering </h2>
                    <p>This whole purchase journey can be divided into three stages. For more details,<a href="" className="fw-bold text-dark"> Click Here</a></p>
                </div>
                <div className="d-flex g-2 justify-content-between ">
                    <div className="col-4">
                        <div className="me-4">
                            <div className="offer-tab grey-theme p-3 mb-3">
                                <div className="d-flex justify-content-center align-items-center ">
                                    <span className="bg-white p-2 px-3 rounded-circle me-3">1</span>
                                    <span className="fs-4">Pre-Booking</span>
                                </div>
                            </div>
                            <div className="card p-3" >
                                <img src={offer1} className="card-img-top" alt="..." />
                                <div className="card-body px-0">
                                    <h5 className="card-title text-theme">Background verification</h5>
                                    <p className="card-text text-secondary ">Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...</p>
                                    <div className="d-flex justify-content-between  align-items-center ">
                                        <button className='btn  border-black rounded-1  '>Contact Now
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2 " viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                            </svg>
                                        </button>
                                        <span className='text-theme'>INR 3000/Project</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="me-4">
                            <div className="offer-tab grey-theme p-3 mb-3">
                                <div className="d-flex justify-content-center align-items-center ">
                                    <span className="bg-white p-2 px-3 rounded-circle me-3">2</span>
                                    <span className="fs-4 lh-sm "> Pre-Registration</span>
                                </div>
                            </div>
                            <div className="card p-3" >
                                <img src={offer2} className="card-img-top" alt="..." />
                                <div className="card-body px-0">
                                    <h5 className="card-title text-theme">Virtual site visit</h5>
                                    <p className="card-text text-secondary">It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...</p>
                                    <div className="d-flex justify-content-between  align-items-center ">
                                        <button className='btn  border-black rounded-1  '>Contact Now
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2 " viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="me-4">
                            <div className="offer-tab grey-theme p-3 mb-3">
                                <div className="d-flex justify-content-center align-items-center ">
                                    <span className="bg-white p-2 px-3 rounded-circle me-3">3</span>
                                    <span className="fs-4 lh-sm "> Post-Registration</span>
                                </div>
                            </div>
                            <div className="card p-3" >
                                <img src={offer3} className="card-img-top" alt="..." />
                                <div className="card-body px-0">
                                    <h5 className="card-title text-theme">Title diligence</h5>
                                    <p className="card-text text-secondary">It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...</p>
                                    <div className="d-flex justify-content-between  align-items-center ">
                                        <button className='btn  border-black rounded-1  '>Contact Now
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2 " viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer
