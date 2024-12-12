import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        // Send form data to a server or API (replace with your backend endpoint)
        try {
            const response = await fetch('https://example.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ name: '', email: '', message: '' });
                setStatus('Message sent successfully!');
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact" className="contact-section">
    <h1 className="contact-title">Contact Me</h1>
    <form onSubmit={handleSubmit} className="contact-form">
    <label htmlFor="name">Name:</label>
    <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    />

    <label htmlFor="email">Email:</label>
    <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    />

    <label htmlFor="message">Message:</label>
    <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    required
    />

    <button type="submit" className="submit-button">Send</button>
        </form>
    {status && <p className="status-message">{status}</p>}
        </section>
    );
    };

    export default ContactForm;
