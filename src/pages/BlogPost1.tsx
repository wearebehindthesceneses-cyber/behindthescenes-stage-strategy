import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import pricingStrategyImage from '@/assets/pricing-strategy-blog.jpg';

const BlogPost1 = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = 'Estrategia de precios para espectáculos y eventos culturales en 2025';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aprende cómo fijar precios en cultura y entretenimiento para maximizar ventas y atraer nuevos públicos.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Aprende cómo fijar precios en cultura y entretenimiento para maximizar ventas y atraer nuevos públicos.';
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
                  src={pricingStrategyImage} 
                  alt="Teatro lleno de gente vista desde atrás"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>1 de diciembre, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>8 min de lectura</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>Andrea Pascual</span>
                </div>
              </div>
              
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6">
                Estrategia
              </span>

              <h1 className="section-title mb-8">
                Cómo diseñar una estrategia de precios que llene tu espectáculo o evento
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
                  El precio de una entrada no es solo un número: es una decisión estratégica que puede determinar el éxito de un espectáculo. En un sector donde los márgenes son ajustados y la competencia es intensa, aplicar una estrategia de precios adecuada permite aumentar los ingresos y a la vez acercar la cultura a diferentes públicos.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">1. Conoce a tu público</h2>
                <p>
                  Antes de fijar precios, es esencial entender quién está al otro lado. No es lo mismo un festival dirigido a estudiantes que una ópera para un público internacional. Identificar segmentos como familias, turistas o jóvenes locales ayuda a adaptar los precios a su disposición de pago y a crear ofertas personalizadas.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">2. Ofrece diferentes niveles de precios</h2>
                <p>
                  Un solo precio limita tus opciones. Diseñar varios niveles (gradas económicas, platea estándar, experiencias VIP) permite ampliar la base de público. Cada nivel debe incluir un valor añadido: mejor visibilidad, acceso a un meet & greet o incluso un merchandising exclusivo.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">3. Introduce precios dinámicos</h2>
                <p>
                  El precio no tiene que ser fijo. Al igual que en aerolíneas o hoteles, los espectáculos pueden ajustar sus tarifas en función de la demanda y la proximidad al evento. Si la preventa es baja, se pueden lanzar descuentos estratégicos; si la demanda sube, los precios se incrementan.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">4. Diseña promociones inteligentes</h2>
                <p>
                  Los descuentos funcionan mejor cuando están bien segmentados. Un 2x1 puntual en martes puede atraer nuevos públicos sin dañar la percepción de valor. Los packs familiares, los descuentos a estudiantes o las colaboraciones con influencers para cupones exclusivos son recursos eficaces para diversificar audiencia.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">5. Mide y optimiza constantemente</h2>
                <p>
                  Una estrategia de precios nunca es definitiva. Es clave monitorizar métricas como la tasa de ocupación, el ingreso medio por espectador o la conversión de campañas. Con esos datos, se pueden ajustar precios en tiempo real y mejorar la estrategia para próximas ediciones.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Conclusión</h2>
                <p>
                  Una buena política de precios no consiste en bajar tarifas, sino en encontrar el equilibrio entre rentabilidad y accesibilidad. Con un enfoque estratégico, es posible llenar butacas, llegar a nuevos públicos y garantizar la sostenibilidad del proyecto cultural.
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

export default BlogPost1;