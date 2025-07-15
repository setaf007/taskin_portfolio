import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import Divider from './components/Divider'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectMain from './components/projectSection/ProjectMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ContactMeMain from './components/contactMeSection/ContactMeMain'

function App() {
  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <Divider />
      <ProjectMain />
      <ContactMeMain />
      <HelperSection />
    </main>
  )
}

export default App
