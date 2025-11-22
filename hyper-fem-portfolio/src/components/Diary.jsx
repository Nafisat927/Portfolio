import React from 'react';
import { motion } from 'framer-motion';

const Diary = () => {
    return (
        <section id="diary" style={{ padding: '4rem 0', position: 'relative' }}>
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
                    Dear Diary... ✍️
                </h2>

                <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.5rem', marginBottom: '2rem' }}>
                    Today I learned how to make things float with CSS! It's so magical. I also drank three cups of coffee and petted a cat.
                    Coding feels like casting spells sometimes, don't you think?
                </p>

                <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.5rem' }}>
                    Currently obsessed with: <br />
                    🌸 Framer Motion <br />
                    ✨ CSS Grid <br />
                    🍵 Matcha Lattes
                </p>

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

export default Diary;
