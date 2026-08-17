import { useRef } from 'react'
import Hero from './components/Hero.jsx'
import Letter from './components/Letter.jsx'
import Memories from './components/Memories.jsx'
import FinalMessage from './components/FinalMessage.jsx'

export default function App() {
  const heroRef = useRef(null)
  const letterRef = useRef(null)
  const memoriesRef = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="relative">
      <div ref={heroRef}>
        <Hero onOpenLetter={() => scrollTo(letterRef)} />
      </div>

      <div ref={letterRef}>
        <Letter onViewMemories={() => scrollTo(memoriesRef)} />
      </div>

      <div ref={memoriesRef}>
        <Memories />
      </div>

      <FinalMessage onBackToStart={() => scrollTo(heroRef)} />
    </main>
  )
}
