import React from 'react';
import { motion } from 'framer-motion';

const Recipes = () => {
    return (
        <section id="recipes" style={{ padding: '4rem 0', position: 'relative' }}>
            <div style={{
                background: '#fff',
                maxWidth: '800px',
                margin: '0 auto',
                padding: '3rem',
                borderRadius: '5px',
                boxShadow: '5px 5px 15px rgba(0,0,0,0.1)',
                backgroundImage: 'linear-gradient(#e1e1e1 1px, transparent 1px)',
                backgroundSize: '100% 2rem',
                lineHeight: '2rem',
                position: 'relative',
                transform: 'rotate(-1deg)'
            }}>
                <h2 style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '2.5rem',
                    marginBottom: '2rem',
                    color: 'var(--color-text)'
                }}>
                    My Recipes 🍳
                </h2>

                <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.5rem', marginBottom: '2rem' }}>
                    Welcome to my kitchen! Here are some of my favorite things to cook.
                </p>

                <ul style={{ fontFamily: 'var(--font-hand)', fontSize: '1.5rem', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem' }}>🥞 Fluffy Pancakes</li>
                    <li style={{ marginBottom: '1rem' }}>🥑 Avocado Toast</li>
                    <li style={{ marginBottom: '1rem' }}>🍝 Spicy Pasta</li>
                </ul>

                {/* Tape effect */}
                <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '150px',
                    height: '35px',
                    background: 'rgba(255, 255, 255, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}></div>
            </div>
        </section>
    );
};

export default Recipes;
