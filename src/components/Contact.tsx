import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-section bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title fade-in-up mb-16">
          {t('nav.contact')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-pink-500/10 via-card/80 to-rose-500/10 rounded-3xl p-8 shadow-sm border border-border/50 fade-in-up group hover:shadow-lg transition-all duration-500 hover:scale-[1.01] relative overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <h3 className="section-subtitle mb-6 relative z-10 group-hover:text-rose-700 dark:group-hover:text-rose-300 transition-colors duration-300">
              {t('hero.cta')}
            </h3>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder={t('contact.form.name')}
                  className="border-border/50 focus:border-rose-500 focus:ring-rose-500/20 transition-all duration-300"
                />
                <Input
                  type="email"
                  placeholder={t('contact.form.email')}
                  className="border-border/50 focus:border-rose-500 focus:ring-rose-500/20 transition-all duration-300"
                />
              </div>
              
              <Input
                placeholder={t('contact.form.company')}
                className="border-border/50 focus:border-rose-500 focus:ring-rose-500/20 transition-all duration-300"
              />
              
              <Textarea
                placeholder={t('contact.form.message')}
                rows={5}
                className="border-border/50 focus:border-rose-500 focus:ring-rose-500/20 resize-none transition-all duration-300"
              />
              
              <Button className="btn-hero w-full hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300">
                {t('contact.form.send')}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 fade-in-up">
            <div className="bg-gradient-to-br from-amber-500/10 via-card/80 to-orange-500/10 rounded-3xl p-8 shadow-sm border border-border/50 group hover:shadow-lg transition-all duration-500 hover:scale-[1.01] relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <h3 className="section-subtitle mb-6 relative z-10 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-300">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="text-amber-600 dark:text-amber-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium group-hover/item:text-amber-700 dark:group-hover/item:text-amber-300 transition-colors duration-300">{t('contact.info.email')}</p>
                    <p className="text-muted-foreground">andrea@webehind.es</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <Phone className="text-orange-600 dark:text-orange-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium group-hover/item:text-orange-700 dark:group-hover/item:text-orange-300 transition-colors duration-300">{t('contact.info.phone')}</p>
                    <p className="text-muted-foreground">+34 644 49 29 21</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <MapPin className="text-red-600 dark:text-red-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium group-hover/item:text-red-700 dark:group-hover/item:text-red-300 transition-colors duration-300">{t('contact.info.location')}</p>
                    <p className="text-muted-foreground">C/ Pau Gargallo, 30 (entrada Pascual i Vila), Barcelona, España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-border/50 group hover:shadow-lg transition-all duration-500 hover:scale-[1.01] relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <h4 className="font-poppins font-semibold text-lg mb-4 relative z-10 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
                {t('contact.ready.title')}
              </h4>
              <p className="text-muted-foreground mb-6 relative z-10">
                {t('contact.ready.text')}
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                <span className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                  Producción
                </span>
                <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                  Marketing
                </span>
                <span className="bg-gradient-to-r from-pink-500/20 to-red-500/20 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                  Distribución
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;