import { useLanguage } from '@/contexts/LanguageContext';

const Team = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Andrea Pascual',
      roleKey: 'team.andrea.role',
      image: '/lovable-uploads/d433e341-9050-4f03-be64-3950020f1738.png',
    },
    {
      name: 'Alexia Sánchez',
      roleKey: 'team.alexia.role',
      image: '/lovable-uploads/e36d2e3c-cdf3-4e5c-9fdd-3e788f837aa0.png',
    },
  ];

  return (
    <section id="team" className="py-section relative">
      {/* Section separator */}
      <div className="section-separator mb-16"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-32 left-16 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up mb-8">
            {t('team.title')}
          </h2>
          <p className="section-text text-muted-foreground max-w-3xl mx-auto fade-in-up">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center fade-in-up group">
              <div className="relative mb-6">
                {/* Profile image */}
                <div className="relative overflow-hidden rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-64 h-80 object-cover rounded-2xl shadow-xl"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                </div>
                
                {/* Decorative border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              
              {/* Name and role */}
              <h3 className="font-inter font-bold text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="section-text text-muted-foreground">{t(member.roleKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;