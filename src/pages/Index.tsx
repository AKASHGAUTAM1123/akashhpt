import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import EducationSection from '@/components/portfolio/EducationSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="space-y-2">
        <HeroSection />
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
