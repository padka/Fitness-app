import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaPlus, FaStopwatch, FaUser } from 'react-icons/fa';
import './Navigation.css'

function Navigation() {
    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className = 'nav-icon-container'
                    >
                        <Link to="/" className = "nav-link">
                            <FaHome className = 'nav-icon'/>
                        </Link>
                    </motion.div>
                </li>
                <li>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    className = 'nav-icon-container'
                    >
                        <Link to="/add" className="nav-link">
                            <FaPlus class="nav-icon"/>
                        </Link>
                    </motion.div>
                </li>
                <li>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    className = 'nav-icon-container'
                    >
                        <Link to="/timer" className = 'nav-link'>
                            <FaStopwatch class="nav-icon"/>
                        </Link>
                    </motion.div>
                </li>
                <li>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    className = 'nav-icon-container'
                    >
                        <Link to="/auth" className="nav-link">
                            <FaUser className="nav-icon"/>
                        </Link>
                    </motion.div>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;