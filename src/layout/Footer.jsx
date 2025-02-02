import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-light">
        <div className="container">
            <div className="row">
                <div className="col p-5 text-center">
                    <p className='text-dark fs-5'>Copyright © 2024, Gnana Deepika</p>
                    <NavLink href="https://github.com/Bekkam-Gnana-Deepika" target='blank' className='text-dark fs-4'>
                        <FontAwesomeIcon icon={faGithub} />
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;