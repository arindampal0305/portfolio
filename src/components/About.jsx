import ScrollReveal from './ScrollReveal'
import '../styles/About.css'

const highlightTerms = [
    'Java', 'backend', 'Data', 'Structures', 'Algorithms',
    'LeetCode', 'Spring', 'Boot', 'JavaScript', 'full-stack',
    'Infosys', 'Oracle', 'BIT', 'Mesra', 'Creative', 'Head',
    'Aurora', 'Genesis', 'Codefest', 'developer', 'API',
    'programming', 'database', 'certified'
]

const paragraphs = [
    `Bachelor of Computer Applications Undergraduate, from Birla Institute of Technology, Mesra (Lalpur Campus).`,

    `Computer Science student focused on backend development with Java, building a strong foundation in Data Structures & Algorithms and core programming concepts. I approach problem-solving with consistency and discipline, having solved 100+ problems on LeetCode to strengthen logical thinking and code efficiency.`,

    `I am a certified Java programmer (Infosys) and an Oracle-certified database professional, currently working with Spring Boot to understand how scalable backend systems are structured and built. Alongside Java, I am actively learning JavaScript to expand toward full-stack development.`,

    `Beyond technical work, I serve as the Creative Head of the Computer Science Society, BIT Mesra (Lalpur Campus), where I combine design and strategy to improve engagement. By redesigning promotional content and leading creative direction, I contributed to a 35% increase in event participation, while also supporting the execution and management of multiple technical events.`,

    `I was also recognized as the winner of Aurora Genesis Codefest 2026, reflecting both my problem-solving ability and competitive mindset.`,

    `Currently, I am focused on building consistency—through daily coding practice, hands-on development, and maintaining discipline through fitness—while continuously improving as a developer.`
]

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-inner">
                <h2 className="about-heading">Who am I?</h2>
                {paragraphs.map((text, i) => (
                    <ScrollReveal
                        key={i}
                        baseOpacity={0.08}
                        enableBlur={true}
                        baseRotation={3}
                        blurStrength={6}
                        wordAnimationEnd="bottom 80%"
                        highlightTerms={highlightTerms}
                    >
                        {text}
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
