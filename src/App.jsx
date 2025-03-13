import AboutMeMain from './components/aboutMeSection/aboutMeMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'

function App() {
  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <ExperienceMain />
      <HelperSection />
    </main>
  )
}

export default App
