import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return <div className='layout'>
      <section id='flow'>
        <nav>
          <h1>The Majestic Thai</h1>
          <ul id='juicier'>
            <li id='juicy'>
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
      </section>
      {/* <div id='aside'>
        <aside>
          <Link to='/home'><b>How it all began.</b></Link>
          <p>A little story about a boy
            <p> who came from Thailand </p>
            <p>determined to be the best.</p></p>
        </aside>
      </div> */}
      {/* <div className='carousel'>

        <ul className='panes'>

          <li>
            <h2>Pane 01 title</h2>
            <img src='https://4.bp.blogspot.com/-DVr20Njqj24/VHiKBAn7oAI/AAAAAAABXys/vluTR32Mn9M/s690/Food%2BSushi%2BUHD.jpg' />
          </li>

          <li>
            <h2>Pane 02 title</h2>
            <img src='https://4.bp.blogspot.com/-kGwiNsmCE8w/VHHyhDnQrtI/AAAAAAABXIU/wmXryHPqCII/s690/Danbo%2BGlass%2BWine%2BUHD.jpg' />
          </li>

          <li>
            <h2>Pane 03 title</h2>
            <img src='https://tse2.mm.bing.net/th?id=OIP.M57f689c21064afa4b9d4fd93a6b4bb9eo0&w=299&h=185&c=7&rs=1&qlt=90&o=4&pid=1.1' />
          </li>

          <li>
            <h2>Pane 04 title</h2>
            <img src='https://4.bp.blogspot.com/-3Cq8T5b89E8/VHQX87idSEI/AAAAAAABXSQ/M8cDCoqk784/s690/The%2BBlue%2BCocktail%2BUHD.jpg' />
          </li>

          <li>
            <h2>Pane 05 title</h2>
            <img src='https://4.bp.blogspot.com/-vuDqkJB9DAQ/VwDJssYzOgI/AAAAAAAB-1Y/i3l6UynxwrIrO_M_2W2P0EtwW1F7Wcznw/s0/Chandon%2BChampagne_img.jpg' />
          </li>

        </ul>

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
