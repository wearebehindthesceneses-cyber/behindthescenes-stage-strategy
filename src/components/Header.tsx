import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.team', href: '#team' },
    { key: 'nav.blog', href: '#blog' },
    { key: 'nav.podcast', href: '#podcast' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/e8c46c1b-1a8d-411c-81db-3b75f2ef9243.png" alt="Behind the Scenes" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="font-inter text-sm hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Language Switch & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'es' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="font-inter text-sm hover:text-primary transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;