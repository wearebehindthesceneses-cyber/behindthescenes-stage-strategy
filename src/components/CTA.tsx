import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-section bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-border/50 shadow-lg">
            <h2 className="hero-title mb-8 fade-in-up">
              {t('cta.title')}
            </h2>
            
            <Button 
              className="btn-hero fade-in-up group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;