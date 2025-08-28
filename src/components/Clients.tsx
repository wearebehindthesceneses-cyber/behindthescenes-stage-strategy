import { useLanguage } from '@/contexts/LanguageContext';

const Clients = () => {
  const { t } = useLanguage();

  const clients = [
    {
      name: 'Airotic Soirée',
      logo: '/lovable-uploads/f563d0e5-b3b2-4467-b397-f84db0033e36.png'
    },
    {
      name: 'Dreamtopia',
      logo: '/lovable-uploads/79ee11dc-e411-4f47-91f3-0b280bd5d4aa.png'
    },
    {
      name: 'Circaya',
      logo: '/lovable-uploads/27ea0f9b-46f9-4dfc-9634-ad462c657563.png'
    },
    {
      name: 'Fury',
      logo: '/lovable-uploads/86719183-8e95-458c-a9ee-1d443269a30b.png'
    },
    {
      name: 'Tease',
      logo: '/lovable-uploads/2c86cd0e-b9ef-4759-aead-6effbfbf1f12.png'
    }
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 w-32 h-32 flex items-center justify-center 
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                         border border-border/30 hover:border-primary/30 fade-in-up group"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-full object-contain filter group-hover:brightness-110 
                           transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;