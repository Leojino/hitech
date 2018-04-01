import React, { Component } from 'react'

class Header extends Component {
    render() {
        return ([
            <nav className="navbar navbar-dark bg-dark" key="navbar">
                <a className="navbar-brand" role="button" style={{ color: "white" }}>
                    Hi-Tech Electricals
                </a>
                <button className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal">Enquire</button>
            </nav>,

            <div key="formModal" className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Get in Touch</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            {/* <form action="https://formspree.io/leojino@gmail.com" method="post" > */}
                        <div className="modal-body">

                            <p>Send in your enquiries and concerns at</p> 
                            <p>Email: <a mailto="hitechvariacs@gmail.com">hitechvariacs@gmail.com</a></p>
                            <p>And we will get back to you as soon as possible</p>

                            <p>
                                Or talk to us:
                            </p>
                            <p>
                                Anil: <a href="tel:07039664009">07039664009</a><br/>
                                John: <a href="tel:09869409319">09869409319</a>
                            </p>
                                {/* <div className="form-group">
                                    <label htmlFor="exampleFormControlInput2">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="exampleFormControlInput2" placeholder="Devi Prasad" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Your Email</label>
                                    <input type="email" name="_replyto" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput2">Your Contact</label>
                                    <input type="number" name="phone" className="form-control" id="exampleFormControlInput2" min={10} max={10} placeholder="**********" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect2">Select Interested Product</label>
                                    <select multiple className="form-control" name="product" id="exampleFormControlSelect2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Additional Message</label>
                                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary" type="submit">Submit</button> */}
                        </div>
                            {/* </form> */}
                    </div>
                </div>
            </div>]
        )
    }
}

export default Header;