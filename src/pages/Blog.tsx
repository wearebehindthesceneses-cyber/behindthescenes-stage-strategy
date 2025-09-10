import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: "El Futuro del Entertainment Business en España",
      excerpt: "Exploramos las tendencias emergentes en la industria del entretenimiento y cómo están transformando el panorama empresarial español.",
      date: "2024-03-15",
      author: "Andrea Pascual",
      readTime: "5 min",
      image: "/lovable-uploads/73c65180-49de-4afa-8763-8e69a589a8ab.png",
      category: "Tendencias"
    },
    {
      id: 2,
      title: "Estrategias de Marketing Digital para Eventos",
      excerpt: "Descubre cómo maximizar el alcance y engagement de tus eventos a través de estrategias digitales innovadoras.",
      date: "2024-03-10",
      author: "Andrea Pascual",
      readTime: "7 min",
      image: "/lovable-uploads/e36d2e3c-cdf3-4e5c-9fdd-3e788f837aa0.png",
      category: "Marketing"
    },
    {
      id: 3,
      title: "Behind the Scenes: Gestión de Proyectos Creativos",
      excerpt: "Una mirada profunda a los procesos y metodologías que utilizamos para gestionar proyectos creativos exitosos.",
      date: "2024-03-05",
      author: "Andrea Pascual", 
      readTime: "6 min",
      image: "/lovable-uploads/d433e341-9050-4f03-be64-3950020f1738.png",
      category: "Gestión"
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
                <article key={post.id} className="bg-card/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:border-primary/30 group">
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