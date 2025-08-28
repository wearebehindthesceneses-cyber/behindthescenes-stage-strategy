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
    <section id="projects" className="py-section bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title fade-in-up mb-16">
          {t('clients.title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 h-24 flex items-center justify-center service-card fade-in-up group"
            >
              <span className="font-poppins font-medium text-center text-sm md:text-base group-hover:text-primary transition-colors duration-300">
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