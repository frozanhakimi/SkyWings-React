function AirlineLogo({ airline, size = 40 }) {
  const colors = {
    'Qatar Airways': 'linear-gradient(135deg, #5c0632, #8b1a4a)',
    Emirates: 'linear-gradient(135deg, #d71920, #b5121b)',
    'Turkish Airlines': 'linear-gradient(135deg, #c8102e, #a00d24)',
    Lufthansa: 'linear-gradient(135deg, #05164d, #f9ba00)',
    'Singapore Airlines': 'linear-gradient(135deg, #1e3a8a, #dc2626)',
    Flydubai: 'linear-gradient(135deg, #f59e0b, #2563eb)',
    'British Airways': 'linear-gradient(135deg, #075aaa, #eb2226)',
    'Air India': 'linear-gradient(135deg, #e31e24, #f58220)',
  };

  const initials = {
    'Qatar Airways': 'QR',
    Emirates: 'EK',
    'Turkish Airlines': 'TK',
    Lufthansa: 'LH',
    'Singapore Airlines': 'SQ',
    Flydubai: 'FZ',
    'British Airways': 'BA',
    'Air India': 'AI',
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: size * 0.35,
        color: 'white',
        flexShrink: 0,
        letterSpacing: '-0.5px',
        background:
          colors[airline] || 'linear-gradient(135deg, #1e3a8a, #2563eb)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      }}
    >
      {initials[airline] || '✈'}
    </div>
  );
}

export default AirlineLogo;