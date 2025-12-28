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
        <section style={{ padding: '100px 20px', backgroundColor: 'var(--white)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ color: 'var(--secondary-color)', fontSize: '32px', marginBottom: '16px' }}>
                        Por que começar a vender com as receitas premium?
                    </h2>
                    <p style={{ fontSize: '20px', color: 'var(--text-secondary)' }}>
                        Vantagens que fazem a diferença no seu negócio
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', // Slightly wider min-width for text heavy cards
                    gap: '32px'
                }}>
                    {benefitsData.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: benefit.delay }}
                            whileHover={{ y: -5 }}
                            style={{
                                backgroundColor: 'var(--background-light)',
                                border: '2px solid var(--accent-color)',
                                borderRadius: '16px',
                                padding: '32px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div style={{ fontSize: '48px', marginBottom: '24px' }}>{benefit.icon}</div>
                            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '16px', fontSize: '24px' }}>
                                {benefit.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
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
