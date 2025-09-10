import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-section bg-gradient-to-br from-emerald-500/5 via-background to-teal-500/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-500/10 via-card/60 to-teal-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-border/50 shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10"></div>
            
            <h2 className="hero-title mb-8 fade-in-up relative z-10 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
              {t('cta.title')}
            </h2>
            
            <Button 
              className="btn-hero fade-in-up group/btn relative z-10 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;