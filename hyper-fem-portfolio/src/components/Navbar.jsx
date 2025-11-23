import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'Diary', path: '/diary' },
        // { name: 'Contact', path: '/contact' } // Uncomment when ready
    ];

    const location = useLocation();

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            marginBottom: '2rem',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
        }}>
            <div className="logo" style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                color: 'var(--color-primary)',
                textShadow: '2px 2px 0px #fff'
            }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>✨ NafDev </Link>
            </div>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                {navItems.map((item) => (
                    <motion.li
                        key={item.name}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to={item.path} style={{
                            fontFamily: 'var(--font-hand)',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            padding: '0.5rem 1rem',
                            background: location.pathname === item.path ? 'var(--color-primary-soft)' : 'var(--color-white)',
                            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', // Organic border
                            border: '2px solid var(--color-text)',
                            boxShadow: location.pathname === item.path ? 'inset 2px 2px 5px rgba(0,0,0,0.1)' : '4px 4px 0px var(--color-accent)',
                            color: 'var(--color-text)',
                            display: 'block',
                            textDecoration: 'none'
                        }}>
                            {item.name}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
