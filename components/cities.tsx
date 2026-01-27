"use client";

import { useMemo } from "react";
import { geoMercator, geoPath } from "d3-geo";
import indiaGeo from "../app/data/india_state.json";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { MapPin, TrendingUp } from "lucide-react";
import { Contact } from "./contact";

const CITIES = [
  { name: "Indore", lat: 22.7196, lon: 75.8577 },
  { name: "Bhopal", lat: 23.2599, lon: 77.4126 },
  { name: "Jabalpur", lat: 23.1815, lon: 79.9864 },
  { name: "Nagpur", lat: 21.1458, lon: 79.0882 },
  { name: "Raipur", lat: 21.2514, lon: 81.6296 },
  { name: "Nashik", lat: 19.9975, lon: 73.7898 },
  { name: "Pune", lat: 18.5204, lon: 73.8567 },
  { name: "Chhatrapati Sambhaji Nagar", lat: 19.8762, lon: 75.3433 },
];

export function Cities() {
  const width = 500;
  const height = 500;

  const projection = useMemo(
    () =>
      geoMercator().fitExtent(
        [
          [0, 0], // top-left
          [width, height], // bottom-right
        ],
        indiaGeo as any
      ),
    [indiaGeo]
  );

  const path = geoPath(projection);
  return (
    <section
  id="cities"
  className="py-16 md:py-24 relative overflow-hidden border-t border-border"
>
  {/* Header */}
  <div className="text-center mb-12 md:mb-16 px-4">
    <div className="flex items-center justify-center mb-4">
      <MapPin className="h-10 w-10 animate-bounce" />
    </div>
    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
      Our Presence
    </h2>
    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
      Available across major cities in India
    </p>
  </div>

  {/* Content */}
  <div className="bg-white">
    <div
      className="
        max-w-6xl mx-auto
        flex flex-col-reverse
        md:flex-row
        gap-8 md:gap-12
        px-4
      "
    >
      {/* Contact section */}
      <div
        className="
          w-full md:w-1/2
          flex md:items-center
        "
      >
        <div className="w-full max-w-[500px] mx-auto p-4">
          <Contact />
        </div>
      </div>

      {/* Map section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-[500px] aspect-square p-4">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full"
          >
            {/* Map */}
            <g className="fill-white stroke-blue-400 stroke-[0.6]">
              {indiaGeo.features.map((f: any, i: number) => (
                <path key={i} d={path(f) || ""} />
              ))}
            </g>

            {/* Pins */}
            {CITIES.map((c) => {
              const [x, y] = projection([c.lon, c.lat]) || [0, 0];
              return (
                <Tooltip key={c.name}>
                  <TooltipTrigger asChild>
                    <g
                      transform={`translate(${x}, ${y})`}
                      className="cursor-pointer"
                    >
                      <circle r="10" className="fill-blue-500/20 animate-ping" />
                      <circle r="4" className="fill-blue-600" />
                    </g>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    {c.name}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
