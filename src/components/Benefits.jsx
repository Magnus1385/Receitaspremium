import React from 'react';
import { motion } from 'framer-motion';

const benefitsData = [
    {
        icon: "✨",
        title: "SÃO FÁCEIS DE PRODUZIR",
        description: "A produção das receita é simples e não precisa de muitos utensílios e habilidade! Você consegue fazer com os utensílios que tem em casa: liquidificador, forno doméstico e panelas simples. Basta ter vontade e querer ganhar dinheiro com eles!",
        delay: 0.2
    },
    {
        icon: "❄️",
        title: "PODEM SER CONGELADOS",
        description: "Você pode fazer uma única produção e ir vendendo nos outros dias – ele mantém o sabor, textura e qualidade – com uma longa validade (+90 dias congelados).",
        delay: 0.4
    },
    {
        icon: "💰",
        title: "ALTA MARGEM DE LUCRO",
        description: "Receitas que você gasta pouco e vende por um valor bem mais alto, lucrando muito. Isso significa menos vendas com mais dinheiro no seu bolso. (E se você faz pra casa, ainda economiza bastante!)",
        delay: 0.6
    },
    {
        icon: "📈",
        title: "ALTA DEMANDA",
        description: "Trabalhar com as receitas premium é uma das maiores oportunidades de Negócios de 2026 e quem iniciar primeiro fica com todo o lucro.",
        delay: 0.8
    }
];

const Benefits = () => {
    return (
        <section
            style={{
                padding: '120px 20px',
                background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFF5F7 100%)',
                position: 'relative'
            }}
        >
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
                        Vantagens Exclusivas
                    </span>
                    <h2 style={{
                        color: '#C71585',
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '800',
                        marginBottom: '24px',
                        lineHeight: '1.1'
                    }}>
                        Por que começar a vender com as receitas premium?
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        background: '#FF1493',
                        margin: '0 auto 24px',
                        borderRadius: '2px'
                    }} />
                    <p style={{
                        fontSize: '20px',
                        color: '#6C757D',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Construa um negócio sólido e lucrativo com facilidade e baixo investimento.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '40px'
                }}>
                    {benefitsData.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: benefit.delay }}
                            whileHover={{ y: -10 }}
                            style={{
                                backgroundColor: '#FFFFFF',
                                padding: '48px 32px',
                                borderRadius: '24px',
                                boxShadow: '0 20px 40px rgba(199, 21, 133, 0.05)',
                                border: '1px solid rgba(255, 182, 193, 0.3)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                fontSize: '48px',
                                marginBottom: '28px',
                                background: '#FFF0F5',
                                width: '100px',
                                height: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                boxShadow: 'inset 0 4px 10px rgba(199, 21, 133, 0.1)'
                            }}>
                                {benefit.icon}
                            </div>
                            <h3 style={{
                                color: '#C71585',
                                marginBottom: '20px',
                                fontSize: '22px',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: '800',
                                letterSpacing: '-0.02em'
                            }}>
                                {benefit.title}
                            </h3>
                            <p style={{
                                color: '#6C757D',
                                lineHeight: '1.7',
                                fontSize: '16px'
                            }}>
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
