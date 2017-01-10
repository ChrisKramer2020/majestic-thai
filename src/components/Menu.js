import React, { Component } from 'react'
import { Link } from 'react-router'
import data from '../data.json'

class Menu extends Component {

  render () {
    const categories = data.menu.map((category, i) => {
      return <li key={i}>
        <Link to={`/menu/${category.slug}`} activeClassName='active'>
          {category.name}
        </Link>
      </li>
    })

    return <div className='bro'>
      <h2>Our Menu</h2>

      <section className='ourmenu'>
        <ul className='swag'>
          {categories}
        </ul>
      </section>

      {this.props.children}
    </div>
  }
}

export default Menu
