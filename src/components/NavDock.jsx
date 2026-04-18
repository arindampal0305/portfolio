import Dock from './Dock'
import '../styles/NavDock.css'

// React Icons — already installed
import { HiHome, HiUser, HiCode, HiAcademicCap, HiMail } from 'react-icons/hi'

const ICON_SIZE = 18

const scrollTo = id => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const navItems = [
    {
        icon: <HiHome size={ICON_SIZE} />,
        label: 'Home',
        onClick: () => scrollTo('hero'),
    },
    {
        icon: <HiUser size={ICON_SIZE} />,
        label: 'About',
        onClick: () => scrollTo('about'),
    },
    {
        icon: <HiCode size={ICON_SIZE} />,
        label: 'Projects',
        onClick: () => scrollTo('projects'),
    },
    {
        icon: <HiAcademicCap size={ICON_SIZE} />,
        label: 'Certifications',
        onClick: () => scrollTo('certifications'),
    },
    {
        icon: <HiMail size={ICON_SIZE} />,
        label: 'Contact',
        onClick: () => scrollTo('social'),
    },
]

export default function NavDock() {
    return (
        <nav className="nav-dock-wrapper" aria-label="Site navigation">
            <Dock
                items={navItems}
                panelHeight={52}
                baseItemSize={40}
                magnification={56}
                distance={140}
                dockHeight={160}
                spring={{ mass: 0.1, stiffness: 180, damping: 14 }}
            />
        </nav>
    )
}
