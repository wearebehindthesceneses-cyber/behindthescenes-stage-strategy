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
          <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 fade-in-up">
            <h3 className="section-subtitle mb-6">
              {t('hero.cta')}
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder={t('contact.form.name')}
                  className="border-border/50 focus:border-primary"
                />
                <Input
                  type="email"
                  placeholder={t('contact.form.email')}
                  className="border-border/50 focus:border-primary"
                />
              </div>
              
              <Input
                placeholder={t('contact.form.company')}
                className="border-border/50 focus:border-primary"
              />
              
              <Textarea
                placeholder={t('contact.form.message')}
                rows={5}
                className="border-border/50 focus:border-primary resize-none"
              />
              
              <Button className="btn-hero w-full">
                {t('contact.form.send')}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 fade-in-up">
            <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50">
              <h3 className="section-subtitle mb-6">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{t('contact.info.email')}</p>
                    <p className="text-muted-foreground">hello@behindthescenes.es</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{t('contact.info.phone')}</p>
                    <p className="text-muted-foreground">+34 XXX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{t('contact.info.location')}</p>
                    <p className="text-muted-foreground">España</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-border/50">
              <h4 className="font-poppins font-semibold text-lg mb-4">
                {t('contact.ready.title')}
              </h4>
              <p className="text-muted-foreground mb-6">
                {t('contact.ready.text')}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Producción
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Marketing
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
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