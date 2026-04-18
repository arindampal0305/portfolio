import { useEffect, useRef } from 'react'
import '../styles/Loader.css'

const snippets = [
    'int x = 0;', 'for(;;)', 'System.out.println()', 'def run():',
    'import java.util.*;', 'if __name__=="__main__":', 'return null;',
    'catch(Exception e)', 'public static void', 'lambda x: x*2',
    'ArrayList<>', 'try { }', 'extends Thread', 'void main()',
    '@Override', 'HashMap<>', 'print(x)', 'throws IOException',
    'new Thread()', 'super()', 'break;', 'continue;', 'null',
    'true', 'false', 'this.', '[];', '=>', '::', '{}', '()'
]

const glitchTexts = [
    'ARINDAM PAL',
    'print("backend developer")',
    'System.out.println("Welcome")',
    'ARINDAM PAL'
]

export default function Loader({ onComplete }) {
    const canvasRef = useRef(null)
    const nameRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const nameEl = nameRef.current
        const ctx = canvas.getContext('2d')

        let W = canvas.width = window.innerWidth
        let H = canvas.height = window.innerHeight
        const CX = W / 2
        const CY = H / 2

        const particles = []

        function spawnParticle(fromLeft) {
            const edgeSpread = H * 0.9
            const centerSpread = H * 0.08
            const startY = CY + (Math.random() - 0.5) * edgeSpread
            const targetY = CY + (Math.random() - 0.5) * centerSpread
            const startX = fromLeft ? -180 : W + 180
            const targetX = fromLeft ? CX - 20 : CX + 20

            particles.push({
                x: startX, y: startY,
                targetX, targetY,
                fromLeft,
                speed: 7 + Math.random() * 6,
                text: snippets[Math.floor(Math.random() * snippets.length)],
                opacity: 0.9,
                dissolving: false,
                done: false,
                fontSize: 9 + Math.floor(Math.random() * 6)
            })
        }

        let spawnTimer = setInterval(() => {
            for (let i = 0; i < 4; i++) {
                spawnParticle(true)
                spawnParticle(false)
            }
        }, 40)

        let phase = 'charging'
        let startTime = Date.now()
        const CHARGE_DURATION = 2000
        const GLITCH_DURATION = 1800
        let animId

        function startGlitch() {
            phase = 'glitching'
            clearInterval(spawnTimer)
            let gi = 0
            nameEl.style.color = '#00FF41'

            const glitchInterval = setInterval(() => {
                gi = (gi + 1) % glitchTexts.length
                nameEl.textContent = glitchTexts[gi]
            }, 140)

            setTimeout(() => {
                clearInterval(glitchInterval)
                nameEl.textContent = 'ARINDAM PAL'
                nameEl.style.color = '#fff'
                startExpand()
            }, GLITCH_DURATION)
        }

        function startExpand() {
            phase = 'expanding'
            nameEl.style.transition = 'transform 1.6s cubic-bezier(0.4,0,1,1), color 0.8s ease, opacity 0.8s ease 1s'
            nameEl.style.transform = 'scale(8)'
            nameEl.style.color = '#1a1a1a'
            nameEl.style.opacity = '0'

            setTimeout(() => {
                cancelAnimationFrame(animId)
                onComplete()
            }, 1600)
        }

        function animate() {
            animId = requestAnimationFrame(animate)

            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / CHARGE_DURATION, 1)

            const shakeAmt = (1 - progress) * 10
            const shakeX = (Math.random() - 0.5) * shakeAmt
            const shakeY = (Math.random() - 0.5) * shakeAmt

            if (phase === 'charging') {
                nameEl.style.transform = `translate(${shakeX}px, ${shakeY}px)`
            }

            ctx.clearRect(0, 0, W, H)
            ctx.save()
            ctx.translate(shakeX, shakeY)

            const bounds = nameEl.getBoundingClientRect()

            particles.forEach(p => {
                if (p.done) return
                p.x += p.speed * (p.fromLeft ? 1 : -1)
                p.y += (p.targetY - p.y) * 0.04

                const nearName = p.x > bounds.left - 10 && p.x < bounds.right + 10
                    && p.y > bounds.top - 10 && p.y < bounds.bottom + 10

                if (nearName || p.dissolving) {
                    p.dissolving = true
                    p.opacity -= 0.08
                    if (p.opacity <= 0) { p.done = true; return }
                }

                if (p.x < -300 || p.x > W + 300) { p.done = true; return }

                ctx.globalAlpha = Math.max(p.opacity, 0)
                ctx.fillStyle = '#00FF41'
                ctx.font = `${p.fontSize}px monospace`
                ctx.fillText(p.text, p.x, p.y)
            })

            ctx.restore()

            if (progress >= 1 && phase === 'charging') startGlitch()
        }

        animate()

        return () => {
            clearInterval(spawnTimer)
            cancelAnimationFrame(animId)
        }
    }, [])

    return (
        <div className="loader">
            <canvas ref={canvasRef} className="loader-canvas" />
            <div ref={nameRef} className="loader-name">ARINDAM PAL</div>
        </div>
    )
}