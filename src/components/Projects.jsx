import ElectricBorder from './ElectricBorder'
import ProjectCarousel from './ProjectCarousel'
import '../styles/Projects.css'

// Card 1 images
import img1a from '../assets/card1/image1a.png'
import img1b from '../assets/card1/image1b.png'
import img1c from '../assets/card1/image1c.png'
import img1d from '../assets/card1/image1d.png'

// Card 2 images
import img2a from '../assets/card2/image2a.png'
import img2b from '../assets/card2/image2b.png'
import img2c from '../assets/card2/image2c.png'
import img2d from '../assets/card2/image2d.png'

// Card 3 images
import img3a from '../assets/card3/image3a.png'
import img3b from '../assets/card3/image3b.png'
import img3c from '../assets/card3/image3c.png'
import img3d from '../assets/card3/image3d.png'

const projects = [
    {
        id: 1,
        title: 'Solace',
        subtitle: 'Java | Spring Boot | JWT | SQL | JS',
        content: 'Built an anonymous, secure student–psychologist platform with Spring Boot, JWT, and SQL, featuring encrypted sessions, role-based access, and real-time appointment APIs.',
        buttonText: 'In Progress...',
        buttonLink: null,
        color: '#a855f7',
        images: [
            { id: '1a', src: img1a, alt: 'Solace screenshot 1' },
            { id: '1b', src: img1b, alt: 'Solace screenshot 2' },
            { id: '1c', src: img1c, alt: 'Solace screenshot 3' },
            { id: '1d', src: img1d, alt: 'Solace screenshot 4' },
        ]
    },
    {
        id: 2,
        title: 'Behavior Guard',
        subtitle: 'Python | ML | REST API',
        content: 'Developed & Deployed an ML-based bot detection system using behavioral signals (mouse, keystroke, scroll), achieving 98% accuracy and replacing CAPTCHAs with a seamless plug-and-play web component.',
        buttonText: 'See Website',
        buttonLink: 'https://behaviorguard.vercel.app/',
        color: '#38bdf8',
        images: [
            { id: '2a', src: img2a, alt: 'Behavior Guard screenshot 1' },
            { id: '2b', src: img2b, alt: 'Behavior Guard screenshot 2' },
            { id: '2c', src: img2c, alt: 'Behavior Guard screenshot 3' },
            { id: '2d', src: img2d, alt: 'Behavior Guard screenshot 4' },
        ]
    },
    {
        id: 3,
        title: 'KPT Improvement for Zomato',
        subtitle: 'Python, FastAPI, LightGBM, Kafka, Redis, PostgreSQL, MQTT, ESP32',
        content: 'Built a scalable KPT prediction enhancement system using GPS debiasing and a real-time Kitchen Load Score, reducing error by 33% and rider wait time by ~1.7 minutes with zero merchant friction.',
        buttonText: 'See Website',
        buttonLink: 'https://teambigbytes.streamlit.app/',
        color: '#f97316',
        images: [
            { id: '3a', src: img3a, alt: 'KPT Improvement screenshot 1' },
            { id: '3b', src: img3b, alt: 'KPT Improvement screenshot 2' },
            { id: '3c', src: img3c, alt: 'KPT Improvement screenshot 3' },
            { id: '3d', src: img3d, alt: 'KPT Improvement screenshot 4' },
        ]
    }
]

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-inner">
                <h2 className="projects-heading">What I&apos;ve Built</h2>

                <div className="projects-list">
                    {projects.map((project) => (
                        <div className="project-row" key={project.id}>
                            {/* Left: Card with ElectricBorder */}
                            <div className="project-card-wrapper">
                                <ElectricBorder
                                    color={project.color}
                                    speed={0.8}
                                    chaos={0.1}
                                    borderRadius={20}
                                    style={{ borderRadius: 20 }}
                                >
                                    <div className="project-card">
                                        <div className="project-card-top">
                                            <div
                                                className="project-accent-bar"
                                                style={{ background: project.color }}
                                            />
                                            <h3 className="project-title">{project.title}</h3>
                                            <p
                                                className="project-subtitle"
                                                style={{ color: project.color }}
                                            >
                                                {project.subtitle}
                                            </p>
                                        </div>
                                        <p className="project-content">{project.content}</p>
                                        <div className="project-card-footer">
                                            {project.buttonLink ? (
                                                <a
                                                    href={project.buttonLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-btn"
                                                    style={{
                                                        '--btn-color': project.color,
                                                        borderColor: project.color,
                                                        color: project.color,
                                                    }}
                                                >
                                                    {project.buttonText}
                                                    <span className="project-btn-arrow">→</span>
                                                </a>
                                            ) : (
                                                <button
                                                    className="project-btn project-btn-disabled"
                                                    disabled
                                                    style={{
                                                        '--btn-color': project.color,
                                                        borderColor: `${project.color}44`,
                                                        color: `${project.color}88`,
                                                    }}
                                                >
                                                    {project.buttonText}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </ElectricBorder>
                            </div>

                            {/* Right: Image Carousel */}
                            <div className="project-carousel-wrapper">
                                <ProjectCarousel
                                    items={project.images}
                                    baseWidth={420}
                                    autoplay={true}
                                    autoplayDelay={3200}
                                    pauseOnHover={true}
                                    loop={true}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
