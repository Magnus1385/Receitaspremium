import React from 'react';
import { motion } from 'framer-motion';

const mainOfferItems = [
    "Receitas Secretas Premium",
    "Acesso a todas as aulas por 12 meses",
    "Acesso às atualizações por 12 meses",
    "Receitas Completas passo a passo",
    "Planilhas para Precificação Lucrativa",
    "Garantia de 7 dias"
];

const bonusItems = [
    { text: "Bônus 1: Imersão Primeira Venda em 21 Dias", value: "R$ 337" },
    { text: "Bônus 2: Receitas lucrativas de brigadeiros premium", value: "R$ 197" },
    { text: "Bônus 3: Receitas lucrativas de Suco gourmet", value: "R$ 97" },
    { text: "Bônus 4: Manual Anti Concorrência", value: "R$ 147" },
    { text: "Bônus 5: Vender Sem Perder - A Precificação que traz Lucro", value: "R$ 197" },
    { text: "Bônus 6: Divulgação – Como encontrar seus primeiros clientes", value: "R$ 127" },
    { text: "Bônus 7: Aprimoramento Contínuo e mais", value: "R$ 97" }
];

const Offer = () => {
    return (
        <section
            id="offer_section"
            style={{
                padding: '120px 20px',
                background: 'linear-gradient(135deg, #FF1493 0%, #C71585 100%)',
                color: '#FFFFFF',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            {/* Background decorative elements */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
            <div style={{ position: 'absolute', bottom: '-150px', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,182,193,0.1)' }} />

            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '8px 20px',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '30px',
                        fontSize: '14px',
                        fontWeight: '700',
                        marginBottom: '24px',
                        backdropFilter: 'blur(5px)'
                    }}>
                        🎁 ÚLTIMA OPORTUNIDADE DO ANO
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(32px, 6vw, 56px)',
                        marginBottom: '20px',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '800',
                        lineHeight: '1.1'
                    }}>
                        Tudo o que você recebe entrando AGORA:
                    </h2>
                    <p style={{ fontSize: '20px', marginBottom: '60px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 60px' }}>
                        Transforme sua paixão em lucro com o método mais completo do mercado.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px',
                    textAlign: 'left'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            padding: '48px 32px',
                            borderRadius: '24px',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h3 style={{ fontSize: '22px', marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.2)', pb: '16px', fontWeight: '800' }}>ITEM DO PACOTE</h3>
                        <ul style={{ listStyle: 'none' }}>
                            {mainOfferItems.map((item, index) => (
                                <li key={index} style={{ fontSize: '18px', marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                                    <span style={{
                                        marginRight: '12px',
                                        background: '#22C55E',
                                        color: '#FFF',
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                        marginTop: '2px',
                                        flexShrink: 0
                                    }}>✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            padding: '48px 32px',
                            borderRadius: '24px',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h3 style={{ fontSize: '22px', marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.2)', pb: '16px', color: '#FFD700', fontWeight: '800' }}>BÔNUS EXCLUSIVOS</h3>
                        <ul style={{ listStyle: 'none' }}>
                            {bonusItems.map((item, index) => (
                                <li key={index} style={{ fontSize: '16px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <span style={{ marginRight: '10px', fontSize: '18px' }}>🎁</span>
                                        <span style={{ lineHeight: '1.4' }}>{item.text}</span>
                                    </div>
                                    <span style={{ color: '#FFD700', fontWeight: '800', textDecoration: 'line-through', fontSize: '14px', marginLeft: '12px', flexShrink: 0 }}>
                                        {item.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    style={{
                        marginTop: '60px',
                        backgroundColor: '#FFFFFF',
                        color: '#1A1A1A',
                        padding: '60px 40px',
                        borderRadius: '32px',
                        boxShadow: '0 40px 100px rgba(0, 0, 0, 0.4)',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        border: '8px solid rgba(255,255,255,0.2)'
                    }}
                >
                    <div style={{
                        backgroundColor: '#FFD700',
                        color: '#000000',
                        fontSize: '14px',
                        fontWeight: '900',
                        padding: '8px 24px',
                        borderRadius: '50px',
                        display: 'inline-block',
                        marginBottom: '32px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        Economia Real de R$ 1.372,30
                    </div>

                    <p style={{
                        fontSize: '24px',
                        color: '#999999',
                        textDecoration: 'line-through',
                        fontWeight: '600',
                        marginBottom: '8px'
                    }}>
                        De R$ 1.402,00
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '24px', color: '#666', fontWeight: '600' }}>12x de</span>
                        <span style={{
                            fontSize: 'clamp(56px, 10vw, 88px)',
                            color: '#FF1493',
                            fontWeight: '900',
                            lineHeight: '1',
                            letterSpacing: '-0.04em'
                        }}>
                            R$ 2,97
                        </span>
                    </div>

                    <p style={{
                        color: '#666666',
                        fontSize: '18px',
                        margin: '24px 0',
                        fontWeight: '500'
                    }}>
                        ou apenas <span style={{ color: '#22C55E', fontWeight: '800', fontSize: '32px' }}>R$ 29,70</span> à vista
                    </p>

                    <a
                        href="https://pay.hotmart.com/X103674013I?checkoutMode=10"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => window.fbq('track', 'InitiateCheckout')}
                        className="offer-cta-button"
                        style={{
                            display: 'block',
                            background: 'linear-gradient(to right, #FF1493, #FF69B4)',
                            color: '#FFFFFF',
                            padding: '24px 40px',
                            fontSize: '22px',
                            fontWeight: '900',
                            borderRadius: '100px',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginTop: '40px',
                            boxShadow: '0 15px 40px rgba(255, 20, 147, 0.4)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        APROVEITAR ESTA OFERTA AGORA!
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Offer;
