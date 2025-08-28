import { useLanguage } from '@/contexts/LanguageContext';

const Team = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Andrea Pascual',
      roleKey: 'team.andrea.role',
      image: '/api/placeholder/300/400', // We can generate this later
    },
    {
      name: 'Alexia Sánchez',
      roleKey: 'team.alexia.role',
      image: '/api/placeholder/300/400', // We can generate this later
    },
  ];

  return (
    <section id="team" className="py-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up mb-8">
            {t('team.title')}
          </h2>
          <p className="section-text text-muted-foreground max-w-3xl mx-auto fade-in-up">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center fade-in-up group">
              <div className="relative mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                  <div className="w-44 h-44 bg-muted rounded-full flex items-center justify-center">
                    <span className="font-poppins font-bold text-2xl text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-2">{member.name}</h3>
              <p className="section-text text-muted-foreground">{t(member.roleKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;