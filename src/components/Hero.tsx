import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        onError={(e) => {
          console.error('Video failed to load:', e);
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback background for when video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-background/85" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-80" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-60 animation-delay-1000" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/40 rounded-full animate-pulse opacity-70 animation-delay-2000" />

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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-muted-foreground/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;