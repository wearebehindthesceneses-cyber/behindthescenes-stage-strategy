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
    },
    {
      icon: Ticket,
      titleKey: 'services.ticketing.title',
      descKey: 'services.ticketing.desc',
    },
    {
      icon: TrendingUp,
      titleKey: 'services.marketing.title',
      descKey: 'services.marketing.desc',
    },
    {
      icon: Megaphone,
      titleKey: 'services.communication.title',
      descKey: 'services.communication.desc',
    },
    {
      icon: Share2,
      titleKey: 'services.social.title',
      descKey: 'services.social.desc',
    },
    {
      icon: FileText,
      titleKey: 'services.consulting.title',
      descKey: 'services.consulting.desc',
    },
  ];

  return (
    <section id="services" className="py-section">
      <div className="container mx-auto px-6">
        <h2 className="section-title fade-in-up mb-16">
          {t('services.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card fade-in-up group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="section-subtitle mb-3">
                    {t(service.titleKey)}
                  </h3>
                  <p className="section-text text-muted-foreground">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;