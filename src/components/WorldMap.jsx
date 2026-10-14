import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps';
import { useEffect, useState } from 'react';

const geoUrl = '/data/countries-110m.json';

const airports = [
  { code: 'KBL', name: 'Kabul', coords: [69.2075, 34.5553] },
  { code: 'DXB', name: 'Dubai', coords: [55.2708, 25.2048] },
  { code: 'IST', name: 'Istanbul', coords: [28.9784, 41.0082] },
  { code: 'LHR', name: 'London', coords: [-0.1276, 51.5074] },
  { code: 'SIN', name: 'Singapore', coords: [103.8198, 1.3521] },
  { code: 'FRA', name: 'Frankfurt', coords: [8.6821, 50.1109] },
];

const routes = [
  { from: 'KBL', to: 'DXB', status: 'active', flightId: 'SW-101' },
  { from: 'KBL', to: 'IST', status: 'active', flightId: 'SW-102' },
  { from: 'DXB', to: 'LHR', status: 'active', flightId: 'SW-103' },
  { from: 'KBL', to: 'SIN', status: 'scheduled', flightId: 'SW-105' },
  { from: 'KBL', to: 'LHR', status: 'active', flightId: 'SW-107' },
  { from: 'DXB', to: 'SIN', status: 'active', flightId: 'SW-109' },
];

function interpolate(from, to, progress) {
  return [
    from[0] + (to[0] - from[0]) * progress,
    from[1] + (to[1] - from[1]) * progress,
  ];
}

function getAngle(from, to) {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  return Math.atan2(-dy, dx) * (180 / Math.PI);
}

function WorldMap() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 1 ? 0 : prev + 0.002));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const getAirport = (code) => airports.find((a) => a.code === code);

  return (
    <div className="world-map-wrapper vintage">
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
        width={800}
        height={400}
        style={{ width: '100%', height: 'auto' }}
      >
        <rect x={0} y={0} width={800} height={400} fill="#1e3a3f" />

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#d4c5a0"
                stroke="#3d2f1f"
                strokeWidth={0.4}
                style={{
                  default: { outline: 'none' },
                  hover: { fill: '#c4b088', outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {routes.map((route, i) => {
          const from = getAirport(route.from);
          const to = getAirport(route.to);
          if (!from || !to) return null;

          return (
            <Line
              key={`line-${i}`}
              from={from.coords}
              to={to.coords}
              stroke={route.status === 'active' ? '#d4af37' : '#8b7d4a'}
              strokeWidth={route.status === 'active' ? 1.8 : 1.2}
              strokeLinecap="round"
              strokeDasharray={route.status === 'scheduled' ? '4 4' : '0'}
              opacity={route.status === 'active' ? 0.9 : 0.5}
            />
          );
        })}
    
{routes.map((route, i) => {
  const from = getAirport(route.from);
  const to = getAirport(route.to);
  if (!from || !to) return null;

  const delayedProgress = (progress + i * 0.15) % 1;
  const pos = interpolate(from.coords, to.coords, delayedProgress);
  const angle = getAngle(from.coords, to.coords);

  return (
    <Marker key={`plane-${i}`} coordinates={pos}>
   
      <circle
        r={12}
        fill="#dc2626"
        opacity={0.15}
        style={{
          animation: 'planeGlow 1.5s ease-in-out infinite',
        }}
      />

      <g
        transform={`rotate(${angle})`}
        style={{
          filter: 'drop-shadow(0 0 6px rgba(220, 38, 38, 0.9))',
        }}
      >
        <path
          d="M0,-7 L1.5,-2 L7,1 L7,2.5 L1.5,1.5 L1.5,5 L3,6.5 L3,7.5 L0,6.5 L-3,7.5 L-3,6.5 L-1.5,5 L-1.5,1.5 L-7,2.5 L-7,1 L-1.5,-2 Z"
          fill={route.status === 'active' ? '#dc2626' : '#f87171'}
          stroke="#ffffff"
          strokeWidth={0.8}
        />
      </g>
    </Marker>
  );
})} 

        {airports.map((airport) => (
          <Marker key={airport.code} coordinates={airport.coords}>
            <circle
              r={8}
              fill="#f0d78c"
              opacity={0.3}
              style={{ animation: 'airportPulse 2s ease-in-out infinite' }}
            />
            <circle r={4} fill="#f0d78c" stroke="#1e3a3f" strokeWidth={1.2} />
            <circle r={1.5} fill="#1e3a3f" />
            <text
              textAnchor="middle"
              y={-12}
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 9,
                fontWeight: 'bold',
                fill: '#e8dfc8',
                letterSpacing: '1px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              {airport.code}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

export default WorldMap;