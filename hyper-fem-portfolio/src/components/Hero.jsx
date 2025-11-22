import React from 'react';
import { motion } from 'framer-motion';
import Sticker from './Sticker';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative'
        }}>
            <Sticker x="10%" y="20%" rotation={-10}>
                <div style={{ fontSize: '3rem' }}>✨</div>
            </Sticker>
            <Sticker x="80%" y="15%" rotation={15}>
                <div style={{ fontSize: '3rem' }}>💖</div>
            </Sticker>
            <Sticker x="15%" y="70%" rotation={5}>
                <div style={{ fontSize: '3rem' }}>💻</div>
            </Sticker>
            <Sticker x="85%" y="60%" rotation={-5}>
                <div style={{
                    background: '#fff',
                    padding: '0.5rem',
                    fontFamily: 'var(--font-hand)',
                    transform: 'rotate(-5deg)',
                    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
                }}>
                    Hello!
                </div>
            </Sticker>
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{
                        fontSize: '5rem',
                        lineHeight: '1',
                        marginBottom: '1rem',
                        color: 'var(--color-primary)',
                        textShadow: '4px 4px 0px #fff, 8px 8px 0px var(--color-accent)'
                    }}>
                        Hi, I'm <span style={{ color: 'var(--color-text)' }}>Nafisa!</span>
                    </h1>
                    <h2 style={{
                        fontSize: '2rem',
                        fontFamily: 'var(--font-body)',
                        marginBottom: '2rem',
                        color: 'var(--color-text)'
                    }}>
                        Software Engineer • Product Manager • Designer
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto 2rem',
                        fontFamily: 'var(--font-hand)'
                    }}>
                        Welcome to my digital garden! 🌱 I build magical web experiences with a touch of sparkle.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1rem 2rem',
                            fontSize: '1.5rem',
                            fontFamily: 'var(--font-display)',
                            background: 'var(--gradient-holo)',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-pop)',
                            color: 'var(--color-text)'
                        }}
                    >
                        Explore My World 💖
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
