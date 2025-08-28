import { useLanguage } from '@/contexts/LanguageContext';

const Clients = () => {
  const { t } = useLanguage();

  const clients = [
    'Airotic Soirée',
    'Tease',
    'Dreamtopia',
    'Circaya',
    'Les Farfadais',
    'El Dorado',
    'Festival El Desvarío',
    "Jacky's",
    'Fury'
  ];

  return (
    <section id="projects" className="py-section bg-gradient-to-br from-secondary/5 via-background to-muted/30 relative">
      {/* Section separator */}
      <div className="section-separator mb-16"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="section-title fade-in-up mb-16">
          {t('clients.title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 h-24 flex items-center justify-center 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                         border border-border/30 hover:border-primary/30 fade-in-up group"
            >
              <span className="font-inter font-medium text-center text-sm md:text-base 
                             group-hover:text-primary transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;