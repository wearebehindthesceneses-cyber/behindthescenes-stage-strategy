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
                  <span>1 de agosto, 2025</span>
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
                <p>
                  TikTok ya no es solo la red de bailes virales: es una de las plataformas más influyentes para descubrir música, tendencias y experiencias. Para los espectáculos culturales, representa una oportunidad única para atraer nuevas generaciones y convertir visualizaciones en entradas vendidas.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">1. Habla el lenguaje de TikTok</h2>
                <p>
                  En esta red, los usuarios esperan autenticidad. Los vídeos deben ser breves (15–30 segundos), con un <em>hook</em> potente al inicio. Un tráiler tradicional no funciona; lo que conecta son momentos espontáneos, cercanos y fáciles de compartir.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">2. Contenido que funciona en cultura</h2>
                <p>
                  Algunos formatos efectivos:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Ensayos y backstage (la magia detrás del telón).</li>
                  <li>Clips impactantes del espectáculo (sin revelar demasiado).</li>
                  <li>Testimonios de artistas o técnicos en primera persona.</li>
                  <li>Adaptación de tendencias y challenges virales al universo del show.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">3. Estrategia de publicación constante</h2>
                <p>
                  Publicar de forma regular aumenta la probabilidad de viralidad. Lo recomendable es mínimo 3 veces por semana, combinando distintos formatos: POV, entrevistas rápidas o reacciones del público en directo.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">4. Potencia con TikTok Ads</h2>
                <p>
                  Además del alcance orgánico, TikTok Ads ofrece segmentación avanzada. Un espectáculo en Madrid puede dirigirse a jóvenes de 18–30 años interesados en música, teatro o entretenimiento. Los In-Feed Ads, que se integran en el feed, son los más efectivos para eventos locales.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">5. Mide resultados y ajusta</h2>
                <p>
                  Analizar métricas como visualizaciones, interacciones y clics en el enlace de venta permite calcular el ROI. Con estos datos, puedes ajustar la estrategia: más vídeos backstage si son los que generan más engagement, o más Ads geolocalizados si impulsan conversiones.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Conclusión</h2>
                <p>
                  TikTok es el puente entre la cultura y nuevas audiencias. Integrar esta plataforma en la estrategia de un espectáculo puede marcar la diferencia entre un estreno discreto y un lleno absoluto.
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