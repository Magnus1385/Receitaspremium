import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
    {
        image: "https://i.imgur.com/ONLclUk.jpg", // Updated image
        title: "Sanduíches Premium",
        description: "Receitas sofisticadas com alta margem de lucro e fácil execução",
        icon: "🥪",
        delay: 0.2
    },
    {
        image: "https://imgur.com/Gk0n6PK.jpg",
        title: "Sucos Gourmet",
        description: "Combinações exclusivas que conquistam paladares exigentes",
        icon: "🥤",
        delay: 0.4
    },
    {
        image: "https://imgur.com/4404VV0.jpg",
        title: "Brigadeiros Finos",
        description: "Doces sofisticados para eventos e vendas de alto ticket",
        icon: "🍫",
        delay: 0.6
    }
];

const Learning = () => {
    return (
        <section style={{ padding: '80px 20px', backgroundColor: 'var(--white)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
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
                        Conhecimento que Transforma
                    </span>
                    <h2 style={{
                        color: '#C71585',
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '800',
                        marginBottom: '24px',
                        lineHeight: '1.1'
                    }}>
                        O que você vai aprender agora
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        background: '#FF1493',
                        margin: '0 auto 24px',
                        borderRadius: '2px'
                    }} />
                    <p style={{ fontSize: '20px', color: '#666666', maxWidth: '700px', margin: '0 auto' }}>
                        Receitas validadas e testadas por centenas de alunas que já faturam alto.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px'
                }}>
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: card.delay }}
                            whileHover={{ y: -10 }}
                            style={{
                                backgroundColor: '#FFF5F7', // Updated background
                                border: '2px solid #FFB6C1', // Updated border
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div style={{ height: '300px', overflow: 'hidden' }}> {/* Updated height */}
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    onError={(e) => {
                                        // Fallback if the new image fails, though i.imgur.com matches standard
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div style={{ padding: '32px' }}>
                                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{card.icon}</div>
                                <h3 style={{
                                    color: '#FF1493', // Updated Title Color
                                    marginBottom: '12px',
                                    fontSize: '24px'
                                }}>
                                    {card.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Learning;
