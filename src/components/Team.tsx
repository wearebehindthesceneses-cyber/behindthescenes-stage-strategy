import { useLanguage } from '@/contexts/LanguageContext';
import andreaPhoto from '@/assets/andrea-pascual.png.asset.json';

const Team = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Andrea Pascual',
      roleKey: 'team.andrea.role',
      image: andreaPhoto.url,
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

        <div className="flex flex-col md:flex-row justify-center items-start gap-16 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center fade-in-up group flex-1">
              <div className="relative mb-6">
                {/* Circular Profile image */}
                <div className="relative overflow-hidden rounded-full mx-auto group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full shadow-xl border-4 border-border/20 mx-auto"
                  />
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Decorative circular border */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </div>
              
              {/* Name and role - centered */}
              <div className="flex flex-col items-center">
                <h3 className="font-inter font-bold text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name === 'Andrea Pascual' ? (
                    <button 
                      onClick={() => window.open('https://www.linkedin.com/in/pascualandrea/', '_blank')}
                      className="hover:underline cursor-pointer"
                    >
                      {member.name}
                    </button>
                  ) : (
                    member.name
                  )}
                </h3>
                <p className="section-text text-muted-foreground text-center">{t(member.roleKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;