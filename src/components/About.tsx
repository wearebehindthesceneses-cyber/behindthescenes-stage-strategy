import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-section bg-gradient-to-br from-muted/40 via-background to-primary/5 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title fade-in-up mb-8">
            {t('about.title')}
          </h2>
          
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-border/50 relative overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-3xl opacity-50"></div>
            
            <p className="section-text fade-in-up leading-relaxed relative z-10">
              {t('about.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;