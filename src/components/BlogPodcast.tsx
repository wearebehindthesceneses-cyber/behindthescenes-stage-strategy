import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink, Podcast, BookOpen } from 'lucide-react';

const BlogPodcast = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-section bg-gradient-to-br from-muted/20 via-background to-primary/10">
      {/* Section separator */}
      <div className="section-separator mb-16"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Blog Section */}
          <div className="fade-in-up">
            <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-3xl p-8 border border-border/30 h-full
                           hover:shadow-xl transition-all duration-300 hover:from-purple-500/15 hover:to-violet-500/15">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center mr-4 border border-border/20">
                  <BookOpen className="text-purple-500" size={32} />
                </div>
                <div>
                  <h3 className="section-subtitle mb-2">{t('nav.blog')}</h3>
                  <p className="text-muted-foreground">{t('blog.subtitle')}</p>
                </div>
              </div>
              
              <p className="section-text text-muted-foreground mb-8">
                {t('blog.description')}
              </p>
              
              <Button 
                className="btn-hero group"
                onClick={() => window.location.href = '/blog'}
              >
                {t('blog.button')}
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </Button>
            </div>
          </div>

          {/* Podcast Section */}
          <div id="podcast" className="fade-in-up">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-8 border border-border/30 h-full
                           hover:shadow-xl transition-all duration-300 hover:from-blue-500/15 hover:to-cyan-500/15">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center mr-4 border border-border/20">
                  <Podcast className="text-purple-500" size={32} />
                </div>
                <div>
                  <h3 className="section-subtitle mb-2">{t('podcast.title')}</h3>
                  <p className="text-muted-foreground">{t('podcast.subtitle')}</p>
                </div>
              </div>
              
              <p className="section-text text-muted-foreground mb-8">
                {t('podcast.description')}
              </p>
              
              <Button 
                className="btn-hero group"
                onClick={() => window.open('https://open.spotify.com/show/0KyBKKnnb9P9xTiL6OUWe8?si=8626b9de3a2345bb', '_blank')}
              >
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