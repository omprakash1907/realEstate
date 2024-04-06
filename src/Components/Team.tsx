import team1 from '../assets/images/team1.png'
import team2 from '../assets/images/team2.png'
import team3 from '../assets/images/team3.png'

const Team = () => {
    return (
        <section className="container my-4 ">
            <div className="team">
                <div className="text-center">
                    <h2 className="headline  d-inline-block lh-lg mb-4">Our Team Member</h2>
                </div>
                <div className="d-flex g-2 justify-content-between ">
                    <div className="col-4">
                        <div className="me-4">

                            <div className="card p-3 shadow-sm " >
                                <img src={team1} className="card-img-top img-fluid " alt="..." />
                                <div className="card-body px-0">
                                    <h5 className="card-title text-theme">Brajesh Pathak</h5>
                                    <p className="card-text text-secondary ">Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...</p>
                                    <div className="d-flex justify-content-end  align-items-center ">
                                        <a className='text-theme'>view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="me-4">
                            <div className="card p-3 shadow-sm " >
                                <img src={team2} className="card-img-top img-fluid " alt="..." />
                                <div className="card-body px-0">
                                    <h5 className="card-title text-theme">Deepak Shukla</h5>
                                    <p className="card-text text-secondary">It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...</p>
                                    <div className="d-flex justify-content-end  align-items-center ">
                                        <a className='text-theme'>view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="me-4">
                            <div className="card p-3 shadow-sm " >
                                <img src={team3} className="card-img-top img-fluid " alt="..." />
                                <div className="card-body px-0">
                                    <h5 className="card-title text-theme">Alok Kumar Singh</h5>
                                    <p className="card-text text-secondary">It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...</p>
                                    <div className="d-flex justify-content-end  align-items-center ">
                                        <a className='text-theme'>view more</a>
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

export default Team
