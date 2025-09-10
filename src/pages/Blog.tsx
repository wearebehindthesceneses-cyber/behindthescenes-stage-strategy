import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import pricingStrategyImage from '@/assets/pricing-strategy-blog.jpg';
import mediaCoverageImage from '@/assets/media-coverage-blog.jpg';
import tiktokTheaterImage from '@/assets/tiktok-theater-blog.jpg';

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: "Cómo diseñar una estrategia de precios que llene tu espectáculo o evento",
      excerpt: "El precio de una entrada no es solo un número: es una decisión estratégica que puede determinar el éxito de un espectáculo. Aprende a fijar precios que maximicen ventas y atraigan nuevos públicos.",
      date: "2025-06-01",
      author: "Andrea Pascual",
      readTime: "8 min",
      image: pricingStrategyImage,
      category: "Estrategia",
      metaTitle: "Estrategia de precios para espectáculos y eventos culturales en 2025",
      metaDescription: "Aprende cómo fijar precios en cultura y entretenimiento para maximizar ventas y atraer nuevos públicos."
    },
    {
      id: 2,
      title: "Cómo lograr cobertura en medios para tu espectáculo cultural",
      excerpt: "La visibilidad de un espectáculo no depende solo de su calidad artística. Conseguir cobertura en prensa, blogs especializados y radios culturales puede ser la diferencia entre un estreno silencioso y un evento comentado en toda la ciudad.",
      date: "2025-07-01",
      author: "Andrea Pascual",
      readTime: "6 min",
      image: mediaCoverageImage,
      category: "PR y Medios",
      metaTitle: "Consejos para conseguir cobertura en prensa para espectáculos culturales",
      metaDescription: "Descubre cómo aparecer en medios y dar visibilidad a tu espectáculo cultural con una estrategia de PR eficaz."
    },
    {
      id: 3,
      title: "Cómo aprovechar TikTok para llenar butacas en tu espectáculo",
      excerpt: "TikTok ha transformado la forma en la que descubrimos contenido cultural. Para el sector cultural, esta plataforma es una oportunidad única para atraer a nuevas generaciones y convertir likes en entradas vendidas.",
      date: "2025-08-01",
      author: "Andrea Pascual", 
      readTime: "7 min",
      image: tiktokTheaterImage,
      category: "Marketing Digital",
      metaTitle: "TikTok para espectáculos: cómo vender más entradas en 2025",
      metaDescription: "Aprende a usar TikTok para promocionar espectáculos culturales y conectar con nuevos públicos."
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-primary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="section-title mb-6">Blog</h1>
              <p className="section-text text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descubre insights, tendencias y estrategias del mundo del entretenimiento y los eventos.
              </p>
              <Link to="/">
                <Button variant="outline" className="group">
                  <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" size={16} />
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={
                    post.id === 1 ? "/blog/estrategia-precios-espectaculos" :
                    post.id === 2 ? "/blog/cobertura-medios-espectaculos-culturales" :
                    "/blog/tiktok-espectaculos-entradas"
                  }
                  className="block"
                >
                  <article className="bg-card/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:border-primary/30 group cursor-pointer">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                        {post.category}
                      </span>
                      
                      <h3 className="section-subtitle mb-3 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        
                        <Button variant="outline" size="sm" className="group/btn">
                          Leer más
                          <ArrowLeft className="ml-2 rotate-180 group-hover/btn:translate-x-1 transition-transform duration-300" size={14} />
                        </Button>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;