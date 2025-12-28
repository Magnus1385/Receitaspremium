import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "Preciso ter experiência na cozinha?",
        answer: "Não! Nossas receitas são pensadas para iniciantes. Você vai aprender do zero, com passo a passo detalhado e suporte para tirar dúvidas.",
        delay: 0.1
    },
    {
        question: "Quanto tempo leva para começar a vender?",
        answer: "Com nosso método, você pode fazer sua primeira venda em até 21 dias. Temos um bônus exclusivo que te guia nesse processo.",
        delay: 0.2
    },
    {
        question: "Preciso de equipamentos caros?",
        answer: "Não! Você pode começar com os utensílios que já tem em casa: liquidificador, forno doméstico e panelas simples.",
        delay: 0.3
    },
    {
        question: "Como funciona a garantia?",
        answer: "Você tem 7 dias para testar o curso. Se não gostar, devolvemos 100% do seu investimento, sem perguntas.",
        delay: 0.4
    },
    {
        question: "Por quanto tempo tenho acesso?",
        answer: "Você terá acesso completo ao curso e todas as atualizações por 12 meses.",
        delay: 0.5
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section style={{ padding: '100px 20px', backgroundColor: 'var(--white)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ color: 'var(--secondary-color)', fontSize: '32px', marginBottom: '16px' }}>
                        Dúvidas Frequentes
                    </h2>
                    <p style={{ fontSize: '20px', color: 'var(--text-secondary)' }}>
                        Respostas para suas principais perguntas
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: faq.delay }}
                            style={{
                                border: '2px solid var(--accent-color)',
                                borderRadius: '8px',
                                backgroundColor: 'var(--background-light)',
                                overflow: 'hidden',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: '100%',
                                    padding: '20px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer'
                                }}
                            >
                                <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--secondary-color)' }}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? <Minus color="var(--secondary-color)" /> : <Plus color="var(--secondary-color)" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{ padding: '0 20px 20px 20px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
