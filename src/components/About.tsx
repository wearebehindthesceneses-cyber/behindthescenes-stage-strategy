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
          
          <div className="bg-gradient-to-br from-violet-500/10 via-card/60 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-border/50 relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 to-blue-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
            
            <p className="section-text fade-in-up leading-relaxed relative z-10 group-hover:text-foreground transition-colors duration-300">
              {t('about.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;