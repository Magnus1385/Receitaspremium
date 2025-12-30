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
        <section style={{ padding: '120px 20px', backgroundColor: '#FFFFFF' }}>
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
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
                        Central de suporte
                    </span>
                    <h2 style={{
                        color: '#C71585',
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: '800',
                        marginBottom: '20px'
                    }}>
                        Dúvidas Frequentes
                    </h2>
                    <p style={{ fontSize: '20px', color: '#666666', maxWidth: '600px', margin: '0 auto' }}>
                        Tudo o que você precisa saber para começar sua jornada lucrativa hoje mesmo.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: faq.delay }}
                            style={{
                                border: '1px solid rgba(199, 21, 133, 0.1)',
                                borderRadius: '20px',
                                backgroundColor: openIndex === index ? '#FFF5F7' : '#FFFFFF',
                                overflow: 'hidden',
                                boxShadow: openIndex === index ? '0 10px 30px rgba(199, 21, 133, 0.05)' : 'none',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: '100%',
                                    padding: '24px 32px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer'
                                }}
                            >
                                <span style={{
                                    fontSize: '19px',
                                    fontWeight: '700',
                                    color: openIndex === index ? '#C71585' : '#333333',
                                    fontFamily: "'Montserrat', sans-serif"
                                }}>
                                    {faq.question}
                                </span>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: openIndex === index ? '#FF1493' : 'rgba(199, 21, 133, 0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {openIndex === index ? <Minus size={18} color="#FFFFFF" /> : <Plus size={18} color="#C71585" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div style={{
                                            padding: '0 32px 32px 32px',
                                            color: '#666666',
                                            lineHeight: '1.8',
                                            fontSize: '17px'
                                        }}>
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
