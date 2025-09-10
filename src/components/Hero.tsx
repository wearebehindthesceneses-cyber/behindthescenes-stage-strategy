import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Video } from '@/components/ui/video';
import { Sparkles } from 'lucide-react';
import heroBackgroundFrame from '@/assets/hero-background-frame.jpg';
import theaterCurtainBackground from '@/assets/theater-curtain-background.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Theater Curtain Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src={theaterCurtainBackground}
          alt="Theater curtain background"
          className="w-full h-full object-cover brightness-150"
        />
      </div>

      {/* Video Background Block - Ready for Visual Edits Upload */}
      <div className="absolute inset-0 -z-10">
        <Video
          src="https://drive.google.com/file/d/1cr2RybZw0szDMQD2hQM3-LiYGpkcO0tI/view"
          poster={heroBackgroundFrame}
          className="opacity-60"
          overlay={true}
          overlayOpacity={0.1}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/lovable-uploads/e8c46c1b-1a8d-411c-81db-3b75f2ef9243.png" alt="Behind the Scenes" className="h-20 w-auto" />
        </div>

        {/* Main Title */}
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title mb-6 fade-in-up">
            {t('hero.title')} <Sparkles className="inline-block ml-2 text-secondary" size={40} />
          </h1>
          
          <p className="hero-subtitle mb-12 fade-in-up mx-auto">
            {t('hero.subtitle')}
          </p>

            <Button 
              className="btn-hero fade-in-up"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;