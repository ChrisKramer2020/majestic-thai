import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return <div className='layout'>
      <h1>The Majestic Thai</h1>
      <div className='border'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='/locations'>Locations</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className='pics'>
        <img src='https://4.bp.blogspot.com/-3FgGGBWeT8M/U8ITYqmAePI/AAAAAAABCrU/TNYq6fLr_Mg/s0/Urban+Park+Hotel+and+Spa%252C+Umhlanga+3.jpg' alt='4krestaraunt' width='100%' height='80%' />
      </div> */}
      <main>
        {this.props.children}
      </main>
      <footer>
        <p>&copy; 2017 The Majestic Thai.<br />Built with &hearts; at The Iron Yard, in St Petersburg, Florida.</p>
      </footer>
    </div>
  }
}

export default Layout
