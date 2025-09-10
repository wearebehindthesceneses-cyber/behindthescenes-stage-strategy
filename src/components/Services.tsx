import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Building2, 
  Ticket, 
  TrendingUp, 
  Megaphone, 
  Share2, 
  FileText 
} from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      titleKey: 'services.production.title',
      descKey: 'services.production.desc',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-500'
    },
    {
      icon: Ticket,
      titleKey: 'services.ticketing.title',
      descKey: 'services.ticketing.desc',
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-500'
    },
    {
      icon: TrendingUp,
      titleKey: 'services.marketing.title',
      descKey: 'services.marketing.desc',
      gradient: 'from-violet-400/30 to-purple-400/30',
      iconColor: 'text-violet-600'
    },
    {
      icon: Megaphone,
      titleKey: 'services.communication.title',
      descKey: 'services.communication.desc',
      gradient: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-500'
    },
    {
      icon: Share2,
      titleKey: 'services.social.title',
      descKey: 'services.social.desc',
      gradient: 'from-pink-500/20 to-rose-500/20',
      iconColor: 'text-pink-500'
    },
    {
      icon: FileText,
      titleKey: 'services.consulting.title',
      descKey: 'services.consulting.desc',
      gradient: 'from-secondary/20 to-yellow-500/20',
      iconColor: 'text-secondary'
    },
  ];

  return (
    <section id="services" className="py-section bg-gradient-to-br from-yellow-500/10 via-background to-amber-500/10 relative">
      {/* Section separator */}
      <div className="section-separator mb-16"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-amber-500/20 rounded-full blur-xl"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-amber-500/5 animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="section-title fade-in-up mb-16">
          {t('services.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center fade-in-up group">
                {/* Circular Icon */}
                <div className="relative mb-6 mx-auto">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${service.gradient} 
                                  flex items-center justify-center mx-auto mb-4 
                                  group-hover:scale-110 transition-transform duration-300
                                  border border-border/20`}>
                    <Icon size={40} className={service.iconColor} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="section-subtitle mb-3 group-hover:text-primary transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="section-text text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {t(service.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;