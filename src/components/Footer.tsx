import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: 'nav.blog', href: '#blog' },
    { key: 'nav.podcast', href: '#podcast' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <footer>
      {/* Con el apoyo de section */}
      <div className="bg-white py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-8 md:gap-12 mb-6">
            <img 
              src="/lovable-uploads/logo-ue-fse.png" 
              alt="Cofinançat per la Unió Europea - FSE+" 
              className="h-14 md:h-20 w-auto object-contain"
            />
            <img 
              src="/lovable-uploads/logo-departament-empresa.png" 
              alt="Generalitat de Catalunya - Departament d'Empresa i Treball" 
              className="h-14 md:h-20 w-auto object-contain"
            />
          </div>
          <p className="text-black text-xs md:text-sm text-center max-w-2xl mx-auto leading-relaxed">
            Aquesta actuació està impulsada i subvencionada pel Departament d'Empresa i Treball i cofinançada per la Unió Europea mitjançant el Fons Social Europeu Plus.
          </p>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/e8c46c1b-1a8d-411c-81db-3b75f2ef9243.png" alt="Behind the Scenes" className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where show meets business ✨
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-poppins font-semibold mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground text-sm text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;