import React from 'react'
import { Footer, Header } from '../layout'

const ContactPage = () => {
  return (
    <>
    <Header />
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col">
          <h5 className="display-5 text-center">Contact Us</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="container my-3">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
          <div className="border rounded p3 shadow">
            <form>
              <div className="form-group my-3">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" name="name"
                 placeholder="Enter name" required />
              </div>
              <div className="form-group my-3">
                <label for="email">Email</label>
                <input type="text" className="form-control" id="email" name="email"
                 placeholder="Enter email" required />
              </div>
              <div className="form-group my-3">
                <label for="email">Message</label>
                <textarea className="form-control" id="message" name="message" rows="3"
                 placeholder="Enter message" required />
              </div>
              <div className="form-group my-3 text-center">
                  <button type="submit" className="btn btn-outline-dark">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default ContactPage;