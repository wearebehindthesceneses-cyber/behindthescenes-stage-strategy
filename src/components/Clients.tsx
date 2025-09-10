import { useLanguage } from '@/contexts/LanguageContext';

const Clients = () => {
  const { t } = useLanguage();

  const clients = [
    {
      name: 'Airotic Soirée',
      logo: '/lovable-uploads/f563d0e5-b3b2-4467-b397-f84db0033e36.png'
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
    },
    {
      name: 'GREC Festival',
      logo: '/lovable-uploads/d0aa4f42-a2e4-4a4e-9d15-0f75031de837.png'
    },
    {
      name: 'Jackies',
      logo: '/lovable-uploads/1b14393c-6f45-4114-a811-dfecff337158.png'
    },
    {
      name: 'El Dorado',
      logo: '/lovable-uploads/73c65180-49de-4afa-8763-8e69a589a8ab.png'
    },
    {
      name: 'Festival El Desvarío',
      logo: '/lovable-uploads/festival-desvario-logo.png'
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 items-center justify-items-center max-w-7xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card/60 backdrop-blur-sm rounded-3xl p-12 w-56 h-56 flex items-center justify-center 
                         hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 
                         border border-border/30 hover:border-primary/40 fade-in-up group
                         hover:bg-card/80"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-full object-contain filter 
                           group-hover:brightness-110 group-hover:contrast-110
                           transition-all duration-300 drop-shadow-sm"
                style={{
                  filter: client.name === 'GREC Festival' ? 'hue-rotate(10deg) saturate(1.1)' :
                          'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;