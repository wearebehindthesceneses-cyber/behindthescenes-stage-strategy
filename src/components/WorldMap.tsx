import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import worldMapIllustration from '@/assets/world-map-illustration.jpg';

const WorldMap = () => {
  const { t } = useLanguage();

  const locations = [
    { name: 'Barcelona', coordinates: { x: 73.2, y: 47.5 } },
    { name: 'Madrid', coordinates: { x: 70.1, y: 48.7 } },
    { name: 'Valencia', coordinates: { x: 71.9, y: 49.9 } },
    { name: 'París', coordinates: { x: 73.3, y: 37.8 } },
    { name: 'Bruselas', coordinates: { x: 74.4, y: 34.9 } },
    { name: 'Nueva York', coordinates: { x: 32.6, y: 48.4 } },
    { name: 'Chicago', coordinates: { x: 25.3, y: 46.9 } },
    { name: 'Dallas', coordinates: { x: 20.4, y: 57.5 } },
    { name: 'Fort Lauderdale', coordinates: { x: 29.6, y: 64.5 } },
    { name: 'Lisboa', coordinates: { x: 67.2, y: 50.7 } },
    { name: 'Puerto Vallarta', coordinates: { x: 17, y: 71.5 } },
  ];

  return (
    <section className="py-section bg-gradient-to-br from-background via-muted/20 to-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="section-title fade-in-up mb-6">
            Nuestra Presencia Internacional
          </h2>
          <p className="section-text fade-in-up text-muted-foreground mb-8">
            Gestionamos proyectos culturales en las principales ciudades del mundo
          </p>
          
          <div className="relative w-full max-w-4xl mx-auto mb-8 fade-in-up">
            <img 
              src={worldMapIllustration} 
              alt="Mapa mundial con ubicaciones de proyectos"
              className="w-full h-auto rounded-2xl shadow-2xl border border-border/20"
            />
            
            {/* Location pins overlay */}
            {locations.map((location, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${location.coordinates.x}%`,
                  top: `${location.coordinates.y}%`,
                }}
              >
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  {location.name}
                </div>
              </div>
            ))}
          </div>
          
          {/* Location grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 fade-in-up">
            {locations.map((location, index) => (
              <div key={index} className="text-center p-3 bg-card/30 rounded-lg border border-border/10">
                <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-2"></div>
                <span className="text-sm font-medium">{location.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;