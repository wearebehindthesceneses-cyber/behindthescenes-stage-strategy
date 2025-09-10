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
                  <span>20 de noviembre, 2024</span>
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
                <h2 className="text-2xl font-semibold text-foreground mb-4">Introducción</h2>
                <p>
                  La visibilidad de un espectáculo no depende solo de su calidad artística. Para que el público se entere, es necesario que los medios hablen de él. Conseguir cobertura en prensa, blogs especializados y radios culturales puede ser la diferencia entre un estreno silencioso y un evento comentado en toda la ciudad.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">1. Define tu historia</h2>
                <p>
                  Los medios buscan historias, no carteles. Antes de enviar nada, piensa qué hace a tu espectáculo único: ¿es innovador en formato?, ¿tiene un impacto social relevante?, ¿participan artistas reconocidos? Cuanto más clara sea la narrativa, más atractivo será para un periodista.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">2. Prepara un kit de prensa profesional</h2>
                <p>
                  No basta con enviar un texto por correo. Un kit de prensa debe incluir una nota clara con titular llamativo, fotos en alta calidad, biografías del equipo y datos prácticos (fecha, lugar, entradas). Este material facilita la labor del periodista y aumenta las probabilidades de publicación.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">3. Construye relaciones con periodistas</h2>
                <p>
                  El error más común es enviar correos masivos. Funciona mucho mejor investigar qué periodistas cubren cultura, personalizar los mensajes y dar seguimiento cercano. Las relaciones auténticas son más efectivas que cien envíos sin contexto.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">4. Refuerza con redes sociales</h2>
                <p>
                  Hoy en día, los medios también miran redes. Comparte las apariciones que consigas, etiqueta a periodistas y medios y crea contenido que complemente la cobertura. Esto multiplica el alcance y genera un efecto de validación social.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">5. Cuida el timing</h2>
                <p>
                  Una nota de prensa enviada el día del estreno llega tarde. Lo ideal es contactar con antelación (al menos 2–3 semanas antes), reforzar en la semana del estreno y asegurar reseñas posteriores. El calendario es tan importante como el mensaje.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Conclusión</h2>
                <p>
                  Lograr cobertura en medios no se trata de suerte, sino de estrategia. Con una narrativa clara, un kit profesional y relaciones cuidadas, cualquier espectáculo puede convertirse en noticia y ganar el espacio que merece en la agenda cultural.
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