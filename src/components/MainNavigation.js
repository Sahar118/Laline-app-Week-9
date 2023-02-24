import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../styles/styles/MainNavigation.moudle.css'
const MainNavigation = () => {
    return (
        <header className='header'>
            <nav>
                <ul className="list">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/' > Home</NavLink>
                    </li>

                    <li> <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/products'>
                        Products
                    </NavLink></li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/edit'> Edit Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation