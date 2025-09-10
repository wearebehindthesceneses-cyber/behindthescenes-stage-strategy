import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import heroBackgroundFrame from '@/assets/hero-background-frame.jpg';
import theaterCurtainBackground from '@/assets/theater-curtain-background.jpg';

const DRIVE_DIRECT_MP4 =
  'https://drive.usercontent.google.com/uc?id=1cr2RybZw0szDMQD2hQM3-LiYGpkcO0tI&export=download';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Theater Curtain Background */}
      {/*<div className="absolute inset-0 -z-20">
        <img
          src={theaterCurtainBackground}
          alt="Theater curtain background"
          className="w-full h-full object-cover brightness-150"
        />
      </div>*/}

      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroBackgroundFrame}   // fallback visual
          aria-hidden="true"
          onCanPlay={(e) => {
            // Evita el flash inicial y muestra cuando esté listo
            (e.currentTarget as HTMLVideoElement).classList.remove('opacity-0');
          }}
          // evita que el usuario interactúe con el vídeo de fondo
          style={{ pointerEvents: 'none' }}
          // iOS/tvOS: evita remote playback
          disablePictureInPicture
          controls={false}
        >
          <source src={DRIVE_DIRECT_MP4} type="video/mp4" />
          {/* Si subes una versión WEBM, añádela aquí:
          <source src="/media/hero.webm" type="video/webm" />
          */}
        </video>

        {/* Fallback estático si el usuario prefiere menos movimiento */}
        <div
          className="hidden motion-safe:hidden motion-reduce:block absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${heroBackgroundFrame})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/lovable-uploads/e8c46c1b-1a8d-411c-81db-3b75f2ef9243.png"
            alt="Behind the Scenes"
            className="h-20 w-auto"
          />
        </div>

        {/* Main Title */}
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title mb-6 fade-in-up">
            {t('hero.title')}
          </h1>

          <p className="hero-subtitle mb-12 fade-in-up mx-auto">
            {t('hero.subtitle')}
          </p>

          <Button
            className="btn-hero fade-in-up"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;