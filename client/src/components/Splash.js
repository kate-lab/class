import React from 'react'
import { Link } from 'react-router-dom'
import MyClassroom from './classroom/MyClassroom.js'
import { userIsAuthenticated } from './helpers/Auth.js'

const Splash = () => {

  return (
    <>
      {
        userIsAuthenticated() ?

          // if isAuthenticated is true:
          <>
            <MyClassroom />
          </>

          :

          //isAuthenticated is false:
          <>
            <div className="splash site-wrapper">
              <h1>my class</h1>
              <div className="splash-button-container">
                <Link to="/login/"  className="splash-button login-button button">
                  <div>
                    Log in
                  </div>
                </Link>
                <Link to="/register/"  className="splash-button register-button button">
                  <div>
                    <span className="small-text">New here?</span>
                    Register
                  </div>
                </Link>
              </div>
            </div>
          </>
      }
    </>

  )
}

export default Splash