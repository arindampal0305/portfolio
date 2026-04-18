import SpotlightCard from './SpotlightCard'
import '../styles/Certifications.css'

import logo1 from '../assets/imlogo/logo1.png'
import logo2 from '../assets/imlogo/logo2.png'
import logo3 from '../assets/imlogo/logo3.png'
import logo4 from '../assets/imlogo/logo4.png'

const certs = [
    {
        id: 1,
        issuer: 'Infosys',
        issuerColor: '#38bdf8',
        title: 'Java Programmer',
        body: 'Aced Java Foundation Course with 92% Accuracy in results',
        skills: 'Core Java | OOPs | DSA | SQL | NoSQL | Agile Scrum',
        issued: '14/04/2026',
        spotlightColor: 'rgba(56, 189, 248, 0.18)',
        logo: logo1,
    },
    {
        id: 2,
        issuer: 'Oracle',
        issuerColor: '#ef4444',
        title: 'Certified Foundations Associate',
        body: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
        skills: 'Oracle SQL | AI | LLMs | Prompt Engineering',
        issued: '27/10/2025',
        spotlightColor: 'rgba(239, 68, 68, 0.18)',
        logo: logo2,
    },
    {
        id: 3,
        issuer: 'Deloitte',
        issuerColor: '#22c55e',
        title: 'Technology Job Simulation',
        body: 'Over the period of April, completed practical tasks in Coding and Development',
        skills: 'Debugging | Collaboration | Development',
        issued: '07/04/2026',
        spotlightColor: 'rgba(34, 197, 94, 0.18)',
        logo: logo3,
    },
    {
        id: 4,
        issuer: 'Anthropic',
        issuerColor: '#f97316',
        title: 'AI Fluency: Foundations & Framework',
        body: "Completed Anthropic's AI Fluency program, covering core concepts, frameworks, and practical applications of AI.",
        skills: 'LLM Workflows | Prompt Engineering | Practical AI App Design | Ethical AI use',
        issued: '20/03/2026',
        spotlightColor: 'rgba(249, 115, 22, 0.18)',
        logo: logo4,
    },
]

export default function Certifications() {
    return (
        <section className="certs" id="certifications">
            <div className="certs-inner">
                <h2 className="certs-heading">Certifications</h2>

                <div className="certs-grid">
                    {certs.map(cert => (
                        <SpotlightCard
                            key={cert.id}
                            className="cert-card"
                            spotlightColor={cert.spotlightColor}
                        >
                            {/* Top-right logo */}
                            <div className="cert-logo-wrap">
                                <img src={cert.logo} alt={`${cert.issuer} logo`} className="cert-logo" />
                            </div>

                            {/* Issuer */}
                            <p className="cert-issuer" style={{ color: cert.issuerColor }}>
                                {cert.issuer}
                            </p>

                            {/* Title */}
                            <h3 className="cert-title">{cert.title}</h3>

                            {/* Body */}
                            <p className="cert-body">{cert.body}</p>

                            {/* Divider */}
                            <div
                                className="cert-divider"
                                style={{ background: cert.issuerColor }}
                            />

                            {/* Skills */}
                            <p className="cert-meta">
                                <span className="cert-meta-label">Skills: </span>
                                {cert.skills}
                            </p>

                            {/* Issued date */}
                            <p className="cert-meta cert-issued">
                                <span className="cert-meta-label">Issued on: </span>
                                {cert.issued}
                            </p>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
