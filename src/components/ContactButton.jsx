import { useState } from 'react'
import BorderGlow from './BorderGlow'
import Magnetic from './Magnetic'
import '../styles/ContactButton.css'

const contacts = [
    {
        label: 'Gmail',
        value: 'arindampal0305@gmail.com',
        href: 'mailto:arindampal0305@gmail.com',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M2 6a2 2 0 0 1 2-4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
        )
    },
    {
        label: 'LinkedIn',
        value: 'Arindam Pal',
        href: 'https://www.linkedin.com/in/arindam-pal-8b682230b/',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.24 8.5h3.5v11.5h-3.5V8.5zm5.76 0h3.36v1.57h.05c.47-.89 1.61-1.83 3.32-1.83 3.55 0 4.2 2.34 4.2 5.38V20h-3.5v-5.63c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V20H9V8.5z"/>
            </svg>
        )
    },
    {
        label: 'Instagram',
        value: '@arindampal0305',
        href: 'https://www.instagram.com/arindampal0305/',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
        )
    }
]

export default function ContactButton() {
    const [open, setOpen] = useState(false)

    return (
        <div
            className={`contact-wrapper ${open ? 'contact-open' : ''}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* Trigger pill */}
            <Magnetic intensity={0.2} range={200} actionArea="global" springOptions={{ bounce: 0.1 }}>
                <button className="contact-trigger" aria-label="Contact me">
                    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                        <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Magnetic intensity={0.1} range={200} actionArea="global" springOptions={{ bounce: 0.1 }}>
                        <span className="contact-trigger-text">Contact</span>
                    </Magnetic>
                </button>
            </Magnetic>

            {/* Expanded panel */}
            <div className="contact-panel">
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
                    <div className="contact-content">
                        <h3 className="contact-heading">Get in touch</h3>
                        {contacts.map((c) => (
                            <a
                                key={c.label}
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <span className="contact-icon">{c.icon}</span>
                                <span className="contact-info">
                                    <span className="contact-label">{c.label}</span>
                                    <span className="contact-value">{c.value}</span>
                                </span>
                                <svg className="contact-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none">
                                    <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        ))}
                    </div>
                </BorderGlow>
            </div>
        </div>
    )
}
