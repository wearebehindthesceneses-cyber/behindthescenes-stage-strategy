import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink, Podcast, BookOpen } from 'lucide-react';

const BlogPodcast = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-section">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Blog Section */}
          <div className="fade-in-up">
            <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <BookOpen className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="section-subtitle mb-2">{t('nav.blog')}</h3>
                  <p className="text-muted-foreground">{t('blog.subtitle')}</p>
                </div>
              </div>
              
              <p className="section-text text-muted-foreground mb-8">
                {t('blog.description')}
              </p>
              
              <Button variant="outline" className="group">
                {t('blog.button')}
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </Button>
            </div>
          </div>

          {/* Podcast Section */}
          <div id="podcast" className="fade-in-up">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-border/50 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <Podcast className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="section-subtitle mb-2">{t('podcast.title')}</h3>
                  <p className="text-muted-foreground">{t('podcast.subtitle')}</p>
                </div>
              </div>
              
              <p className="section-text text-muted-foreground mb-8">
                {t('podcast.description')}
              </p>
              
              <Button className="btn-hero group">
                {t('podcast.button')}
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPodcast;