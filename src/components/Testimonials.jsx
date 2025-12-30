import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
    {
        image: "https://imgur.com/cJpYayE.jpg",
        delay: 0.2
    },
    {
        image: "https://imgur.com/w7xlX26.jpg",
        delay: 0.4
    },
    {
        image: "https://imgur.com/fdfkaYR.jpg",
        delay: 0.6
    }
];

const Testimonials = () => {
    return (
        <section style={{ padding: '100px 20px', backgroundColor: 'var(--background-light)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span style={{
                        color: '#FF1493',
                        fontWeight: '800',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        display: 'block',
                        marginBottom: '12px'
                    }}>
                        Comunidade de Sucesso
                    </span>
                    <h2 style={{
                        color: '#C71585',
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '800',
                        marginBottom: '24px',
                        lineHeight: '1.1'
                    }}>
                        Nossas Alunas vendem muito
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        background: '#FF1493',
                        margin: '0 auto 24px',
                        borderRadius: '2px'
                    }} />
                    <p style={{ fontSize: '20px', color: '#666666' }}>
                        Resultados reais de quem já está faturando com o método.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px'
                }}>
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: testimonial.delay }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                border: '3px solid var(--accent-color)',
                                cursor: 'pointer'
                            }}
                        >
                            <img
                                src={testimonial.image}
                                alt={`Depoimento ${index + 1}`}
                                style={{
                                    width: '100%',
                                    display: 'block'
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
