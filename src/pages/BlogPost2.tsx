import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import mediaCoverageImage from '@/assets/media-coverage-blog.jpg';

const BlogPost2 = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = 'Consejos para conseguir cobertura en prensa para espectáculos culturales';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubre cómo aparecer en medios y dar visibilidad a tu espectáculo cultural con una estrategia de PR eficaz.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Descubre cómo aparecer en medios y dar visibilidad a tu espectáculo cultural con una estrategia de PR eficaz.';
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
                  src={mediaCoverageImage} 
                  alt="Cobertura en medios para espectáculos culturales"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>1 de julio, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>6 min de lectura</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  <span>Andrea Pascual</span>
                </div>
              </div>
              
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6">
                PR y Medios
              </span>

              <h1 className="section-title mb-8">
                Cómo lograr cobertura en medios para tu espectáculo cultural
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
                  La calidad artística de un espectáculo es fundamental, pero si nadie se entera de que existe, puede pasar desapercibido. Conseguir cobertura en medios —prensa, blogs especializados, radios y TV— es la mejor forma de posicionar un proyecto cultural en la agenda pública.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">1. Encuentra tu historia noticiosa</h2>
                <p>
                  Los periodistas buscan relatos únicos. ¿Qué tiene tu espectáculo que lo hace diferente? Puede ser un enfoque innovador, un impacto social o la participación de artistas reconocidos. Cuanto más claro y atractivo sea tu ángulo, más opciones tendrás de que se publique.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">2. Prepara un kit de prensa completo</h2>
                <p>
                  Un buen kit debe incluir:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Nota con titular llamativo.</li>
                  <li>Fotografías y vídeos en alta resolución.</li>
                  <li>Biografías del equipo artístico.</li>
                  <li>Información práctica (fechas, lugar, cómo comprar entradas).</li>
                </ul>
                <p>
                  Facilitar el trabajo al periodista aumenta mucho las probabilidades de cobertura.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">3. Crea relaciones con periodistas</h2>
                <p>
                  No se trata de enviar cientos de correos, sino de construir confianza. Identifica qué medios y periodistas cubren cultura, personaliza los mensajes y mantén un contacto continuo. Una llamada de seguimiento o una invitación al ensayo puede marcar la diferencia.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">4. Multiplica el impacto en redes</h2>
                <p>
                  La prensa y las redes están cada vez más conectadas. Compartir artículos, etiquetar medios y crear contenido complementario refuerza la cobertura. Ejemplo: si un diario local te menciona, publícalo en Instagram Stories y etiquétalos: generas reciprocidad y mayor alcance.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">5. El timing lo es todo</h2>
                <p>
                  Los envíos masivos el mismo día del estreno rara vez funcionan. Lo ideal es calendarizar: un primer contacto 2–3 semanas antes, recordatorio en la semana del estreno y seguimiento posterior para reseñas.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Conclusión</h2>
                <p>
                  La cobertura mediática no es cuestión de suerte, sino de estrategia. Un buen relato, materiales preparados y relaciones sólidas pueden transformar un estreno modesto en un evento que marque tendencia en la ciudad.
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

export default BlogPost2;