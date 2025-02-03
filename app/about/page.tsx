import { Container } from '@/components/ui/container'
import AboutHero from './_section/about-hero'
import SkillSection from './_section/skillSection'
import SectionWorkList from './_section/worklist-section'
import MacSticker from './_section/macSticker'

export default function About() {
  return (
    <Container>
      <div className="flex flex-col justify-center pt-16">
        <AboutHero />
        <div className="p-6">
          <h2 className="py-4 text-4xl font-bold text-foreground">Tech Stack.</h2>

          <SkillSection />
        </div>
        <div className="p-6">
          <h2 className="py-4 text-4xl font-bold text-foreground">Where I&apos;ve Worked.</h2>

          <SectionWorkList />
        </div>
        <MacSticker />
      </div>
    </Container>
  )
}
