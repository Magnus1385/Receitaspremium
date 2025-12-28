import React from 'react';
import { motion } from 'framer-motion';

const mainOfferItems = [
    "Curso Completo de Salgados Saudáveis",
    "Acesso a todas as aulas por 12 meses",
    "Acesso às atualizações por 12 meses",
    "Receitas Completas passo a passo",
    "Planilhas para Precificação Lucrativa",
    "Garantia de 7 dias"
];

const bonusItems = [
    { text: "Bônus 1: Imersão Primeira Venda em 21 Dias", value: "R$ 337" },
    { text: "Bônus 2: Receitas lucrativas de brigadeiros premium", value: "R$ 197" },
    { text: "Bônus 3: Receitas lucrativas de Suco gourmet", value: "R$ 97" }
];

const Offer = () => {
    return (
        <section id="offer_section" style={{ padding: '100px 20px', backgroundColor: 'var(--secondary-color)', color: 'var(--white)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>
                        O Empilhamento de Oferta
                    </h2>
                    <p style={{ fontSize: '20px', marginBottom: '60px', opacity: 0.9 }}>
                        Tudo o que você recebe entrando agora
                    </p>
                </motion.div>

                <div style={{ textAlign: 'left', marginBottom: '48px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '32px', borderRadius: '16px' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '24px', textAlign: 'center' }}>TUDO O QUE VOCÊ RECEBE ENTRANDO AGORA:</h3>
                    <ul style={{ listStyle: 'none' }}>
                        {mainOfferItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center' }}
                            >
                                <span style={{ marginRight: '12px' }}>✅</span> {item}
                            </motion.li>
                        ))}
                    </ul>

                    <div style={{ marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '32px' }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--accent-color)', textAlign: 'center' }}>PRESENTES EXCLUSIVOS (BÔNUS):</h3>
                        <ul style={{ listStyle: 'none' }}>
                            {bonusItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                                >
                                    <div><span style={{ marginRight: '12px' }}>🎁</span> {item.text}</div>
                                    <span style={{ textDecoration: 'line-through', opacity: 0.7 }}>{item.value}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        marginTop: '64px',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--text-primary)',
                        padding: '40px',
                        borderRadius: '20px',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                        maxWidth: '650px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        position: 'relative'
                    }}
                >
                    <span style={{
                        backgroundColor: '#FFD700',
                        color: '#C71585',
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '16px',
                        fontWeight: '700',
                        padding: '6px 20px',
                        borderRadius: '16px',
                        marginBottom: '20px',
                        display: 'inline-block'
                    }}>
                        🔥 OFERTA LIMITADA
                    </span>

                    <p style={{
                        fontSize: '24px',
                        color: '#999999',
                        textDecoration: 'line-through',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '500',
                        marginBottom: '12px'
                    }}>
                        De R$ 631,00
                    </p>

                    <div style={{ margin: '8px 0' }}>
                        <span style={{
                            fontSize: '20px',
                            color: '#666666',
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: '400',
                            marginRight: '8px'
                        }}>
                            12x de
                        </span>
                        <span style={{
                            display: 'block',
                            fontSize: 'clamp(40px, 5vw, 56px)',
                            color: '#FF1493',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '800',
                            letterSpacing: '-0.01em',
                            lineHeight: '1.2'
                        }}>
                            R$ 2,97
                        </span>
                    </div>

                    <p style={{
                        color: '#999999',
                        fontSize: '16px',
                        margin: '16px 0',
                        fontWeight: '400'
                    }}>
                        ou
                    </p>

                    <div style={{
                        backgroundColor: '#F0FFF4',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        border: '2px solid #C3E6CB',
                        display: 'inline-block'
                    }}>
                        <span style={{
                            fontSize: '32px',
                            color: '#28A745',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '700',
                            marginRight: '8px'
                        }}>
                            R$ 29,70
                        </span>
                        <span style={{
                            fontSize: '18px',
                            color: '#666666',
                            fontWeight: '400'
                        }}>
                            à vista
                        </span>
                    </div>

                    <div style={{
                        marginTop: '20px',
                        backgroundColor: '#FFE4F0',
                        color: '#C71585',
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '16px',
                        fontWeight: '600',
                        padding: '8px 24px',
                        borderRadius: '10px',
                        display: 'inline-block'
                    }}>
                        Economia de R$ 601,30
                    </div>

                    <a
                        href="https://pay.kiwify.com.br/5epymGt"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => window.fbq('track', 'InitiateCheckout')}
                        className="w-full button p-4 rounded text-center text-white text-lg font-semibold cursor-pointer hover:opacity-75 transition duration-75"
                        style={{
                            background: 'linear-gradient(to right, #FF1493, #C71585)',
                            color: '#FFFFFF',
                            border: 'none',
                            padding: '18px 48px',
                            fontSize: '20px',
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: '700',
                            borderRadius: '12px',
                            marginTop: '28px',
                            boxShadow: '0 6px 24px rgba(255, 20, 147, 0.3)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.03em',
                            width: '100%',
                            display: 'block',
                            textDecoration: 'none'
                        }}
                    >
                        QUERO COMEÇAR A VENDER AGORA!
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Offer;
