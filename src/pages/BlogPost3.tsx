import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import tiktokTheaterImage from '@/assets/tiktok-theater-blog.jpg';

const BlogPost3 = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = 'TikTok para espectáculos: cómo vender más entradas en 2025';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aprende a usar TikTok para promocionar espectáculos culturales y conectar con nuevos públicos.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Aprende a usar TikTok para promocionar espectáculos culturales y conectar con nuevos públicos.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-primary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center mb-8 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="mr-2" size={16} />
                Volver al blog
              </Link>
              
              <div className="aspect-video overflow-hidden rounded-3xl mb-8">
                <img 
                  src={tiktokTheaterImage} 
                  alt="TikTok para promocionar espectáculos teatrales"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>15 de noviembre, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>7 min de lectura</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>Andrea Pascual</span>
                </div>
              </div>
              
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6">
                Marketing Digital
              </span>

              <h1 className="section-title mb-8">
                Cómo aprovechar TikTok para llenar butacas en tu espectáculo
              </h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <article className="max-w-4xl mx-auto prose prose-lg">
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Introducción</h2>
                <p>
                  TikTok ha transformado la forma en la que descubrimos contenido cultural. Lo que antes pasaba por televisión o carteles en la calle, ahora se viraliza en vídeos de 15 segundos. Para el sector cultural, esta plataforma es una oportunidad única para atraer a nuevas generaciones y convertir likes en entradas vendidas.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">1. Comprende el lenguaje de TikTok</h2>
                <p>
                  El algoritmo premia la autenticidad y la frescura. Los vídeos deben ser breves, con un hook fuerte en los primeros segundos y un estilo cercano. Los espectadores no buscan anuncios tradicionales, sino experiencias con las que puedan identificarse o entretenerse.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">2. Crea contenido atractivo del espectáculo</h2>
                <p>
                  El backstage funciona muy bien: ensayos, preparación de vestuario, montaje de luces. También los fragmentos destacados del show, siempre sin revelar demasiado. Los testimonios del equipo técnico o artístico aportan humanidad. Y por último, adaptar trends o challenges aporta viralidad.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">3. Diseña una estrategia de publicación</h2>
                <p>
                  No basta con subir un vídeo de vez en cuando. Publicar varias veces por semana aumenta las posibilidades de viralidad. Alternar formatos (clips de espectáculo, entrevistas rápidas, POV del público) ayuda a mantener variedad y frescura.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">4. Activa campañas de TikTok Ads</h2>
                <p>
                  Además del alcance orgánico, TikTok ofrece opciones de pago muy efectivas para espectáculos locales. Con geolocalización se puede impactar a usuarios en la ciudad del evento. Los In-Feed Ads son casi indistinguibles del contenido orgánico y tienen gran tasa de visualización.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">5. Mide y optimiza</h2>
                <p>
                  Como en cualquier estrategia digital, lo que no se mide no se mejora. Analizar el engagement (likes, comentarios, compartidos) y el tráfico a la página de venta permite calcular el ROI. Ajustar contenidos en función de estos datos es lo que convierte a TikTok en una herramienta de venta real.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Conclusión</h2>
                <p>
                  TikTok no es solo entretenimiento: es un escaparate cultural con millones de usuarios activos. Usado con estrategia, puede transformar la visibilidad de un espectáculo y convertir a nuevas audiencias digitales en público presencial.
                </p>
              </div>
            </article>

            <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
              <Link to="/blog">
                <Button variant="outline" className="group">
                  <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" size={16} />
                  Volver al blog
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost3;