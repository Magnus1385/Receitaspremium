import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            style={{
                background: 'linear-gradient(135deg, #FFE4F0 0%, #FFF0F8 100%)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '100px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ maxWidth: '900px', margin: '0 auto', zIndex: 1 }}>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '800',
                        fontSize: 'clamp(36px, 6vw, 60px)',
                        color: '#C71585',
                        lineHeight: '1.2',
                        letterSpacing: '-0.02em',
                        marginBottom: '24px',
                        textShadow: '0 2px 4px rgba(199, 21, 133, 0.1)'
                    }}
                >
                    Transforme Sua Cozinha em um Negócio Lucrativo
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: '400',
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        color: '#6C757D',
                        lineHeight: '1.6',
                        marginBottom: '16px',
                        maxWidth: '800px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >

                </motion.p>

                {/* Guarantee Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-2xl font-black leading-tight"
                    style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '900',
                        fontSize: 'clamp(24px, 5vw, 32px)',
                        color: '#C71585',
                        lineHeight: '1.2',
                        marginBottom: '32px',
                        maxWidth: '800px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    <strong className="font-black">SE VOCÊ NÃO VENDER COM NOSSO MÉTODO E RECEITAS EM 7 DIAS, DEVOLVEMOS SEU DINHEIRO</strong>
                </motion.p>

                {/* Highlight Earnings Box */}
                <motion.a
                    href="https://pay.kiwify.com.br/5epymGt"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#FFFFFF',
                        padding: '16px 32px',
                        borderRadius: '12px',
                        boxShadow: '0 8px 24px rgba(255, 20, 147, 0.3)',
                        marginBottom: '48px',
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <span style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '900',
                        fontSize: 'clamp(28px, 4vw, 48px)',
                        color: '#FF1493',
                        display: 'block'
                    }}>
                        Renda Gourmet Lucrativa
                    </span>
                </motion.a>


            </div>
        </section>
    );
};

export default Hero;
