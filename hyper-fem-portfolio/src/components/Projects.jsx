import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'StreetCred',
        description: 'A geo-tagged civic reporting platform.',
        tags: ['React', 'Tailwind', 'Figma', 'Django', 'Supabase'],
        color: '#ffb7d5',
        award: 'DivHacks 2025 Sustainability Winner',
        link: 'https://streetcred-eta.vercel.app/'
    },
    {
        title: 'Fridge Friends -> Infriendtory',
        description: 'A CUNY-wide marketplace for buying/trading/selling goods.',
        tags: ['React', 'Tailwind', 'Figma', 'Supabase'],
        color: '#a2d2ff',
        award: 'HunterHacks 2025 Sustainability Winner',
        link: 'https://fridge-friends-git-main-krisccodes-projects.vercel.app/'
    },
    // {
    //     title: 'Kawaii Shop',
    //     description: 'E-commerce store for plushies and stickers.',
    //     tags: ['Next.js', 'Stripe', 'Tailwind'],
    //     color: '#cdb4db',
    //     award: 'Best Design Award Winner',
    //     link: '#'
    // }
];

const Projects = () => {
    return (
        <section id="work" style={{ padding: '4rem 0' }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '3rem',
                marginBottom: '3rem',
                color: 'var(--color-primary)',
                textShadow: '3px 3px 0px #fff'
            }}>
                Projects
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                padding: '0 2rem'
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        style={{
                            background: 'var(--color-glass)',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid var(--color-glass-border)',
                            borderRadius: '20px',
                            padding: '2rem',
                            boxShadow: 'var(--shadow-soft)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '10px',
                            background: project.color
                        }}></div>

                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                {project.title} 🔗
                            </a>
                        </h3>

                        {project.award && (
                            <p style={{
                                fontFamily: 'var(--font-display)',
                                color: 'var(--color-primary)',
                                fontSize: '1rem',
                                marginBottom: '1rem',
                                fontWeight: 'bold'
                            }}>
                                🏆 {project.award}
                            </p>
                        )}

                        <p style={{ fontFamily: 'var(--font-body)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    background: '#fff',
                                    padding: '0.2rem 0.8rem',
                                    borderRadius: '15px',
                                    fontSize: '0.9rem',
                                    fontFamily: 'var(--font-body)',
                                    border: `1px solid ${project.color}`
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
