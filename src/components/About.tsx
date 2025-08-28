import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-section bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title fade-in-up mb-8">
            {t('about.title')}
          </h2>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border/50">
            <p className="section-text fade-in-up leading-relaxed">
              {t('about.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;