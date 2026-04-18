import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContactButton from './ContactButton'
import MessageButton from './MessageButton'
import FuzzyText from './FuzzyText'
import LetterGlitch from './LetterGlitch'
import RotatingText from './RotatingText'
import About from './About'
import Projects from './Projects'
import Certifications from './Certifications'
import SocialBar from './SocialBar'
import NavDock from './NavDock'
import '../styles/Hero.css'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const overlayRef = useRef(null)
    const aboutRef = useRef(null)

    useEffect(() => {
        const overlay = overlayRef.current
        const about = aboutRef.current
        if (!overlay || !about) return

        gsap.fromTo(
            overlay,
            { opacity: 0 },
            {
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: about,
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: true
                }
            }
        )

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])

    return (
        <div className="site-wrapper">
            {/* Fixed top navigation dock */}
            <NavDock />

            {/* Fixed background */}
            <div className="site-bg">
                <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={true}
                    smooth={true}
                    highlightWords={['JAVA DEVELOPER', 'SPRING BOOT', 'PYTHON', 'BACKEND', 'REST API', 'MICROSERVICES']}
                    highlightColor="#c084fc"
                />
                {/* Overlay that fades in on scroll */}
                <div ref={overlayRef} className="site-bg-overlay" />
            </div>

            {/* Scrollable content */}
            <main className="site-content">
                <section className="hero" id="hero">
                    <ContactButton />
                    <MessageButton />
                    <div className="hero-center">
                        <div className="hero-name">
                            <FuzzyText
                                fontSize="clamp(4rem, 13vw, 14rem)"
                                fontWeight={400}
                                fontFamily="'Bebas Neue', sans-serif"
                                color="#fff"
                                hoverColor="#61dca3"
                                baseIntensity={0.15}
                                hoverIntensity={0.6}
                                enableHover={true}
                                fuzzRange={20}
                                direction="horizontal"
                            >
                                ARINDAM PAL
                            </FuzzyText>
                        </div>
                        <div className="hero-rotating-text">
                            <RotatingText
                                texts={['Java Programmer', 'Backend Developer', 'Web Development']}
                                mainClassName="rotating-text-main"
                                staggerFrom="last"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="rotating-text-split"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </div>
                    </div>
                </section>

                <div ref={aboutRef}>
                    <About />
                </div>

                <Projects />

                <Certifications />

                <SocialBar />
            </main>
        </div>
    )
}