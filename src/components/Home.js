import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
  render () {
    return <div id='aside'>
      <aside>
        <Link to='/contact' />
        {/* <p>A little story about a boy
          <b>How it all began.</b
          <p> who came from Thailand </p>
          <p>determined to be the best.</p></p> */}
      </aside>
    </div>
  }
}

export default Home
