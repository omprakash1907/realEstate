import contact from '../assets/images/contact.png'

const Contact = () => {
    return (
        <section className="container rounded-2  shadow-lg  my-4 p-5">
            <div className="col-12">
                <div className="d-flex justify-content-between ">
                    <div className="col-8">
                        <h3 className='mb-3'>Get In Touch With Us To Connect</h3>
                        <h4>Contact Us </h4>
                        <form action="" className='col-10'>
                            <div className="d-flex">
                                <div className="coolinput w-50 ">
                                    <label className="text bg-white text-secondary fw-semibold ">Full name </label>
                                    <input type="text" placeholder="" name="input" className="input" />
                                </div>
                                <div className="coolinput w-50 mx-3">
                                    <label className="text bg-white text-secondary fw-semibold ">Email address </label>
                                    <input type="text" placeholder="lorem@gmail.com" name="input" className="input" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="coolinput w-50 ">
                                    <label className="text bg-white text-secondary fw-semibold ">Phone no </label>
                                    <input type="text" placeholder="+919898033902" name="input" className="input" />
                                </div>
                                <div className="coolinput w-50 mx-3">
                                    <label className="text bg-white text-secondary fw-semibold ">Country </label>
                                    <input type="text" placeholder="" name="input" className="input" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="coolinput w-50 ">
                                    <label className="text bg-white text-secondary fw-semibold ">Full name </label>
                                    <input type="text" placeholder="" name="input" className="input" />
                                </div>
                                <div className="w-50 mx-3"></div>
                            </div>
                            <div className="d-flex mt-3">
                                <button className='w-50 btn bg-theme text-white'>Submit</button>
                                <div className="w-50 mx-3"></div>
                            </div>

                        </form>
                    </div>
                    <div className="col-4">
                        <img src={contact} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
