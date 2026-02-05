"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function EindhovenMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [5.4697, 51.4416],
      zoom: 11,
    });

    map.scrollZoom.disable();

    return () => map.remove();
  }, []);

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--forest)]/10 shadow-sm">
      <div ref={mapRef} className="absolute inset-0" />
    </div>
  );
}
