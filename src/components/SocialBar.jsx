import LogoLoop from './LogoLoop'
import '../styles/SocialBar.css'

import icon1 from '../assets/imlogo/icon1.svg'
import icon2 from '../assets/imlogo/icon2.svg'
import icon3 from '../assets/imlogo/icon3.svg'
import icon4 from '../assets/imlogo/icon4.svg'
import icon5 from '../assets/imlogo/icon5.svg'

const socialLogos = [
    { src: icon1, alt: 'GitHub', title: 'GitHub', href: 'https://github.com/arindampal0305' },
    { src: icon2, alt: 'X / Twitter', title: 'X', href: 'https://x.com/a_random_pal' },
    { src: icon3, alt: 'Instagram', title: 'Instagram', href: 'https://instagram.com/arindampal0305' },
    { src: icon4, alt: 'LinkedIn', title: 'LinkedIn', href: 'https://www.linkedin.com/in/arindam-pal-8b682230b/' },
    { src: icon5, alt: 'Gmail', title: 'PimpBunny', href: 'https://www.gmail.com/mail' },
]

export default function SocialBar() {
    return (
        <div className="social-bar" id="social">
            {/* Decorative divider */}
            <div className="social-divider">
                <span className="social-divider-line" />
                <span className="social-divider-label">find me online</span>
                <span className="social-divider-line" />
            </div>

            {/* Infinite scrolling icon loop */}
            <div className="social-loop-wrap">
                <LogoLoop
                    logos={socialLogos}
                    speed={60}
                    direction="left"
                    logoHeight={48}
                    gap={72}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    ariaLabel="Social media links"
                    style={{ overflow: 'visible' }}
                />
            </div>
        </div>
    )
}
