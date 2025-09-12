import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const WorldMap = () => {
  const { t } = useLanguage();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const locations = [
    { name: 'Barcelona', coordinates: [2.1734, 41.3851] },
    { name: 'Madrid', coordinates: [-3.7038, 40.4168] },
    { name: 'Valencia', coordinates: [-0.3763, 39.4699] },
    { name: 'París', coordinates: [2.3522, 48.8566] },
    { name: 'Bruselas', coordinates: [4.3517, 50.8476] },
    { name: 'Nueva York', coordinates: [-74.0060, 40.7128] },
    { name: 'Chicago', coordinates: [-87.6298, 41.8781] },
    { name: 'Dallas', coordinates: [-96.7970, 32.7767] },
    { name: 'Fort Lauderdale', coordinates: [-80.1918, 26.1224] },
    { name: 'Lisboa', coordinates: [-9.1393, 38.7223] },
  ];

  const initializeMap = async (token: string) => {
    if (!mapContainer.current) return;

    // Dynamically import mapbox-gl
    const mapboxgl = await import('mapbox-gl');
    await import('mapbox-gl/dist/mapbox-gl.css');

    mapboxgl.default.accessToken = token;
    
    map.current = new mapboxgl.default.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: 'globe' as any,
      zoom: 1.2,
      center: [0, 20],
    });

    // Add markers for each location
    locations.forEach((location) => {
      // Create custom marker element
      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';
      markerElement.style.cssText = `
        width: 20px;
        height: 20px;
        background: hsl(var(--primary));
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        cursor: pointer;
        transition: all 0.3s ease;
      `;
      
      // Add hover effect
      markerElement.addEventListener('mouseenter', () => {
        markerElement.style.transform = 'scale(1.3)';
        markerElement.style.boxShadow = '0 6px 12px rgba(0,0,0,0.4)';
      });
      
      markerElement.addEventListener('mouseleave', () => {
        markerElement.style.transform = 'scale(1)';
        markerElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
      });

      new mapboxgl.default.Marker(markerElement)
        .setLngLat(location.coordinates as [number, number])
        .setPopup(
          new mapboxgl.default.Popup({ offset: 25 })
            .setHTML(`<div style="color: black; font-weight: 600;">${location.name}</div>`)
        )
        .addTo(map.current);
    });

    // Add atmosphere
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(30, 30, 40)',
        'high-color': 'rgb(50, 50, 70)',
        'horizon-blend': 0.02,
      });
    });

    setShowTokenInput(false);
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

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
          
          {showTokenInput ? (
            <div className="max-w-md mx-auto mb-8 p-6 bg-card rounded-lg border">
              <p className="text-sm mb-4 text-muted-foreground">
                Para mostrar el mapa, necesitas un token de Mapbox. 
                <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  Obtén uno gratis aquí
                </a>
              </p>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Pega tu token de Mapbox aquí"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                />
                <Button onClick={handleTokenSubmit}>
                  Cargar Mapa
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-border/20 fade-in-up">
              <div ref={mapContainer} className="w-full h-full" />
            </div>
          )}
          
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