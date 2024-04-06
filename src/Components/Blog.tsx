
import blog1 from '../assets/images/blog1.png'
import blog2 from '../assets/images/blog2.png'
import blog3 from '../assets/images/blog3.png'

const Blog = () => {
  return (
    <section className="blog py-4 grey-theme">
      <div className=" container ">
        <div className="text-center">
          <h2 className="headline  d-inline-block lh-lg ">Blogs </h2>
        </div>
        <div className="d-flex g-2 justify-content-between ">
          <div className="col-4">
            <div className="me-4">

              <div className="card p-3 shadow-sm " >
                <img src={blog1} className="card-img-top img-fluid " alt="..." />
                <div className="card-body px-0">
                  <a href="" className='nav-link mb-3'>Real Estate, Analysis</a>
                  <div className="d-flex justify-content-between mb-3">
                    <div className='d-flex align-items-center '>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar me-2" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                      </svg>
                      <span>09 jun 2022</span>
                    </div>
                    <span>By Admin</span>
                  </div>
                  <h5 className="card-title text-theme">Guide for personal property
                    Buying </h5>
                  <p className="card-text text-secondary ">"Lorem ipsum dolor sit amet, consectetur adipis
cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                  <div className="d-flex justify-content-between  align-items-center ">
                    <button className='btn  border-black rounded-1  '>View More
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

              <div className="card p-3 shadow-sm " >
                <img src={blog2} className="card-img-top img-fluid " alt="..." />
                <div className="card-body px-0">
                  <a href="" className='nav-link mb-3'>Real Estate, Analysis</a>
                  <div className="d-flex justify-content-between mb-3">
                    <div className='d-flex align-items-center '>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar me-2" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                      </svg>
                      <span>09 jun 2022</span>
                    </div>
                    <span>By Admin</span>
                  </div>
                  <h5 className="card-title text-theme">Guide for personal property
                    Buying </h5>
                  <p className="card-text text-secondary ">"Lorem ipsum dolor sit amet, consectetur adipis
cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                  <div className="d-flex justify-content-between  align-items-center ">
                    <button className='btn  border-black rounded-1  '>View More
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

              <div className="card p-3 shadow-sm " >
                <img src={blog3} className="card-img-top img-fluid " alt="..." />
                <div className="card-body px-0">
                  <a href="" className='nav-link mb-3'>Real Estate, Analysis</a>
                  <div className="d-flex justify-content-between mb-3">
                    <div className='d-flex align-items-center '>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar me-2" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                      </svg>
                      <span>09 jun 2022</span>
                    </div>
                    <span>By Admin</span>
                  </div>
                  <h5 className="card-title text-theme">Guide for personal property
                    Buying </h5>
                  <p className="card-text text-secondary ">"Lorem ipsum dolor sit amet, consectetur adipis
cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                  <div className="d-flex justify-content-between  align-items-center ">
                    <button className='btn  border-black rounded-1  '>View More
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

export default Blog
