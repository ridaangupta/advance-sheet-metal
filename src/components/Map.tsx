
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapContainer.current) return;

      try {
        // Get Mapbox token from Supabase secrets
        const { data, error } = await supabase.functions.invoke('get-mapbox-token');
        
        if (error || !data?.token) {
          console.error('Failed to get Mapbox token:', error);
          return;
        }

        // Longer delay to ensure page has fully stabilized
        await new Promise(resolve => setTimeout(resolve, 400));

        // Initialize map
        mapboxgl.accessToken = data.token;
        
        // Business location coordinates (1546 Derwent Way # 311C, Delta, BC V4K 3N5)
        const businessLocation: [number, number] = [-123.0569, 49.1466];
        
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/light-v11',
          center: businessLocation,
          zoom: 15,
          pitch: 45,
          interactive: false, // Start non-interactive
        });

        // Add navigation controls
        map.current.addControl(
          new mapboxgl.NavigationControl({
            visualizePitch: true,
          }),
          'top-right'
        );

        // Add marker for business location
        const marker = new mapboxgl.Marker({
          color: '#374151',
          scale: 1.2
        })
          .setLngLat(businessLocation)
          .addTo(map.current);

        // Add popup with business information
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: false,
          closeOnClick: false
        })
          .setLngLat(businessLocation)
          .setHTML(`
            <div class="p-3 text-center">
              <h3 class="font-semibold text-gray-900 mb-1">Advance Sheet Metal Ltd</h3>
              <p class="text-sm text-gray-600 mb-2">1546 Derwent Way # 311C<br>Delta, BC V4K 3N5</p>
              <a 
                href="https://maps.google.com/maps?q=1546+Derwent+Way+311C+Delta+BC+V4K+3N5" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Get Directions
              </a>
            </div>
          `)
          .addTo(map.current);

        // Show popup on marker hover
        marker.getElement().addEventListener('mouseenter', () => {
          if (map.current) {
            popup.addTo(map.current);
          }
        });

        // Map loaded event
        map.current.on('load', () => {
          console.log('Map loaded successfully');
          setIsMapLoaded(true);
          
          // Enable interactivity after load
          setTimeout(() => {
            if (map.current) {
              map.current.getCanvas().style.cursor = '';
              map.current.boxZoom.enable();
              map.current.scrollZoom.enable();
              map.current.dragPan.enable();
              map.current.dragRotate.enable();
              map.current.keyboard.enable();
              map.current.doubleClickZoom.enable();
              map.current.touchZoomRotate.enable();
            }
          }, 200);
        });

      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initializeMap();

    // Cleanup
    return () => {
      if (map.current) {
        // Proper cleanup with null checks
        try {
          map.current.remove();
        } catch (error) {
          console.warn('Error during map cleanup:', error);
        } finally {
          map.current = null;
        }
      }
    };
  }, []);

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div 
        ref={mapContainer} 
        className="absolute inset-0" 
        tabIndex={-1}
        style={{ 
          outline: 'none',
          scrollBehavior: 'auto',
          visibility: isMapLoaded ? 'visible' : 'hidden',
          pointerEvents: isMapLoaded ? 'auto' : 'none'
        }}
      />
      {!isMapLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500">Loading map...</div>
        </div>
      )}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-lg" />
    </div>
  );
};

export default Map;
