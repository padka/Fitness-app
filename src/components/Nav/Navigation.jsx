import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaPlus, FaStopwatch, FaUser } from 'react-icons/fa';  // FontAwesome icons

function Navigation() {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/">
                            <FaHome />
                        </Link>
                    </motion.div>
                </li>
                <li>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/add">
                            <FaPlus />
                        </Link>
                    </motion.div>
                </li>
                <li>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/timer">
                            <FaStopwatch />
                        </Link>
                    </motion.div>
                </li>
                <li>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/auth">
                            <FaUser />
                        </Link>
                    </motion.div>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;