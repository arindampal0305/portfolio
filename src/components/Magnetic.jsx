import { useRef, useState, useCallback, useEffect } from 'react'

function springLerp(current, target, { stiffness = 150, damping = 15, mass = 1 }, dt) {
    const force = stiffness * (target - current)
    const dampingForce = -damping * ((current - (current - force * dt / mass)) / dt || 0)
    return current + (force + dampingForce) * dt / mass
}

export default function Magnetic({
    children,
    intensity = 0.2,
    range = 200,
    actionArea = 'global',
    springOptions = { bounce: 0.1 },
    className = '',
    style = {}
}) {
    const ref = useRef(null)
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const animRef = useRef(null)
    const targetRef = useRef({ x: 0, y: 0 })
    const currentRef = useRef({ x: 0, y: 0 })
    const activeRef = useRef(false)

    const stiffness = springOptions.bounce != null ? 120 + (1 - springOptions.bounce) * 80 : 150
    const damping = springOptions.bounce != null ? 10 + (1 - springOptions.bounce) * 10 : 15

    const animate = useCallback(() => {
        const dt = 1 / 60
        const tx = targetRef.current.x
        const ty = targetRef.current.y
        const cx = currentRef.current.x
        const cy = currentRef.current.y

        const nx = cx + (tx - cx) * Math.min(1, stiffness * dt / damping)
        const ny = cy + (ty - cy) * Math.min(1, stiffness * dt / damping)

        currentRef.current.x = nx
        currentRef.current.y = ny
        setOffset({ x: nx, y: ny })

        if (Math.abs(tx - nx) > 0.01 || Math.abs(ty - ny) > 0.01 || activeRef.current) {
            animRef.current = requestAnimationFrame(animate)
        } else {
            currentRef.current.x = tx
            currentRef.current.y = ty
            setOffset({ x: tx, y: ty })
        }
    }, [stiffness, damping])

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const handleMove = (e) => {
            const rect = el.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            const dx = e.clientX - cx
            const dy = e.clientY - cy
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (actionArea === 'global' || dist < range) {
                const factor = Math.max(0, 1 - dist / range)
                targetRef.current.x = dx * intensity * factor
                targetRef.current.y = dy * intensity * factor
                activeRef.current = true

                if (!animRef.current) {
                    animRef.current = requestAnimationFrame(animate)
                }
            }
        }

        const handleLeave = () => {
            activeRef.current = false
            targetRef.current.x = 0
            targetRef.current.y = 0
            if (!animRef.current) {
                animRef.current = requestAnimationFrame(animate)
            }
        }

        const target = actionArea === 'global' ? window : el
        target.addEventListener('mousemove', handleMove, { passive: true })
        target.addEventListener('mouseleave', handleLeave, { passive: true })

        return () => {
            target.removeEventListener('mousemove', handleMove)
            target.removeEventListener('mouseleave', handleLeave)
            if (animRef.current) cancelAnimationFrame(animRef.current)
        }
    }, [intensity, range, actionArea, animate])

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                willChange: 'transform',
                display: 'inline-block'
            }}
        >
            {children}
        </div>
    )
}
