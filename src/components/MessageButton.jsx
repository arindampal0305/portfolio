import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import BorderGlow from './BorderGlow'
import Magnetic from './Magnetic'
import '../styles/MessageButton.css'

export default function MessageButton() {
    const [open, setOpen] = useState(false)
    const [status, setStatus] = useState('idle')
    const formRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        try {
            await emailjs.sendForm(
                'service_wzms86i',
                'template_9s68wc9',
                formRef.current,
                'MP5voRa5etDs9PHH4'
            )
            setStatus('sent')
            setTimeout(() => {
                setStatus('idle')
                setOpen(false)
            }, 3000)
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    }

    return (
        <div className={`message-wrapper ${open ? 'message-open' : ''}`}>
            {/* Trigger pill */}
            <Magnetic intensity={0.2} range={200} actionArea="global" springOptions={{ bounce: 0.1 }}>
                <button
                    className="message-trigger"
                    aria-label="Message me"
                    onClick={() => setOpen(!open)}
                >
                    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Magnetic intensity={0.1} range={200} actionArea="global" springOptions={{ bounce: 0.1 }}>
                        <span className="message-trigger-text">Message Me</span>
                    </Magnetic>
                </button>
            </Magnetic>

            {/* Expanded panel */}
            <div className="message-panel">
                <BorderGlow
                    edgeSensitivity={40}
                    glowColor="270 60 70"
                    backgroundColor="rgba(12, 10, 18, 0.95)"
                    borderRadius={16}
                    glowRadius={30}
                    glowIntensity={1.2}
                    coneSpread={30}
                    animated={false}
                    colors={['#c084fc', '#a855f7', '#7c3aed']}
                >
                    <div className="message-content">
                        <h3 className="message-heading">Send me a message</h3>
                        <p className="message-subtext">I'll get back to you as soon as possible.</p>

                        {status === 'sent' ? (
                            <div className="message-success">
                                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                                    <path d="M20 6L9 17l-5-5" stroke="#61dca3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Message sent! Thanks for reaching out.</span>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="message-form">
                                <div className="message-field">
                                    <label htmlFor="msg-name">Name</label>
                                    <input
                                        id="msg-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        autoComplete="name"
                                    />
                                </div>

                                <div className="message-field">
                                    <label htmlFor="msg-email">Email</label>
                                    <input
                                        id="msg-email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                        autoComplete="email"
                                    />
                                </div>

                                <div className="message-field">
                                    <label htmlFor="msg-message">Message</label>
                                    <textarea
                                        id="msg-message"
                                        name="message"
                                        placeholder="Write your message..."
                                        rows={3}
                                        required
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="message-error">Something went wrong. Please try again.</p>
                                )}

                                <button
                                    type="submit"
                                    className="message-submit"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </BorderGlow>
            </div>
        </div>
    )
}
