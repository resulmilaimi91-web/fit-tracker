const MUSCLE_ZONES = {
  'Chest': { label: 'Chest', x: 50, y: 28, w: 30, h: 14, color: '#ef4444' },
  'Shoulders': { label: 'Shoulders', x: 50, y: 18, w: 20, h: 10, color: '#f97316' },
  'Side Shoulders': { label: 'Shoulders', x: 50, y: 18, w: 20, h: 10, color: '#f97316' },
  'Rear Shoulders': { label: 'Shoulders', x: 50, y: 18, w: 20, h: 10, color: '#f97316' },
  'Chest/Shoulders': { label: 'Chest/Shoulders', x: 50, y: 23, w: 28, h: 14, color: '#ef4444' },
  'Biceps': { label: 'Biceps', x: 18, y: 30, w: 10, h: 14, color: '#a855f7' },
  'Triceps': { label: 'Triceps', x: 72, y: 30, w: 10, h: 14, color: '#a855f7' },
  'Abs': { label: 'Abs', x: 50, y: 42, w: 18, h: 12, color: '#22c55e' },
  'Lower Abs': { label: 'Lower Abs', x: 50, y: 48, w: 14, h: 8, color: '#22c55e' },
  'Obliques': { label: 'Obliques', x: 50, y: 44, w: 20, h: 10, color: '#22c55e' },
  'Back': { label: 'Back', x: 50, y: 34, w: 24, h: 16, color: '#3b82f6' },
  'Upper Back': { label: 'Upper Back', x: 50, y: 32, w: 28, h: 18, color: '#3b82f6' },
  'Legs': { label: 'Legs', x: 50, y: 60, w: 20, h: 18, color: '#eab308' },
  'Hamstrings': { label: 'Hamstrings', x: 50, y: 60, w: 20, h: 18, color: '#eab308' },
  'Plyo Legs': { label: 'Legs', x: 50, y: 58, w: 22, h: 20, color: '#eab308' },
  'Glutes': { label: 'Glutes', x: 50, y: 54, w: 18, h: 8, color: '#ec4899' },
  'Full Body': { label: 'Full Body', x: 50, y: 40, w: 30, h: 30, color: '#8b5cf6' },
  'Calves': { label: 'Calves', x: 50, y: 82, w: 12, h: 8, color: '#f59e0b' }
};

const MUSCLE_COLORS = {
  'Chest': '#ef4444', 'Shoulders': '#f97316', 'Biceps': '#a855f7', 'Triceps': '#a855f7',
  'Abs': '#22c55e', 'Back': '#3b82f6', 'Legs': '#eab308', 'Glutes': '#ec4899',
  'Full Body': '#8b5cf6', 'Calves': '#f59e0b', 'Upper Back': '#3b82f6',
  'Lower Abs': '#22c55e', 'Obliques': '#22c55e', 'Side Shoulders': '#f97316',
  'Rear Shoulders': '#f97316',
  'Hamstrings': '#eab308', 'Plyo Legs': '#eab308',
  'Chest/Shoulders': '#ef4444'
};

const EXERCISE_THUMBNAILS = {
  'pushup': { bg: '#ef4444', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)' },
  'squat': { bg: '#eab308', gradient: 'linear-gradient(135deg, #eab308, #ca8a04)' },
  'plank': { bg: '#22c55e', gradient: 'linear-gradient(135deg, #22c55e, #16a34a)' },
  'lunges': { bg: '#eab308', gradient: 'linear-gradient(135deg, #eab308, #ca8a04)' },
  'pullup': { bg: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
  'dips': { bg: '#ef4444', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)' },
  'burpee': { bg: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
  'crunch': { bg: '#22c55e', gradient: 'linear-gradient(135deg, #22c55e, #16a34a)' },
  'legraises': { bg: '#22c55e', gradient: 'linear-gradient(135deg, #22c55e, #16a34a)' },
  'glutebridge': { bg: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899, #db2777)' },
  'benchpress': { bg: '#ef4444', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)' },
  'deadlift': { bg: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
  'overheadpress': { bg: '#f97316', gradient: 'linear-gradient(135deg, #f97316, #ea580c)' },
  'barbellrow': { bg: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
  'bicepcurl': { bg: '#a855f7', gradient: 'linear-gradient(135deg, #a855f7, #9333ea)' },
  'tricepextension': { bg: '#a855f7', gradient: 'linear-gradient(135deg, #a855f7, #9333ea)' },
  'lateralraise': { bg: '#f97316', gradient: 'linear-gradient(135deg, #f97316, #ea580c)' },
  'legpress': { bg: '#eab308', gradient: 'linear-gradient(135deg, #eab308, #ca8a04)' },
  'latpulldown': { bg: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
  'calfraise': { bg: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  'mountainclimber': { bg: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
  'jumpingjack': { bg: '#8b5cf6', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
  'romaniandeadlift': { bg: '#eab308', gradient: 'linear-gradient(135deg, #eab308, #ca8a04)' },
  'gobletsquat': { bg: '#eab308', gradient: 'linear-gradient(135deg, #eab308, #ca8a04)' },
  'facepull': { bg: '#f97316', gradient: 'linear-gradient(135deg, #f97316, #ea580c)' },
  'hipthrust': { bg: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899, #db2777)' },
  'russiantwist': { bg: '#22c55e', gradient: 'linear-gradient(135deg, #22c55e, #16a34a)' },
  'boxjump': { bg: '#eab308', gradient: 'linear-gradient(135deg, #eab308, #ca8a04)' }
};

function renderBodyMap(exercise, containerId) {
  const zone = MUSCLE_ZONES[exercise.muscle];
  if (!zone) return;

  const svg = `
    <svg viewBox="0 0 100 100" class="body-map-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${zone.color}" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="${zone.color}" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <ellipse cx="50" cy="22" rx="24" ry="15" fill="none" stroke="#333" stroke-width="0.8"/>
      <ellipse cx="50" cy="55" rx="28" ry="32" fill="none" stroke="#333" stroke-width="0.8"/>
      <line x1="50" y1="85" x2="50" y2="55" stroke="#333" stroke-width="0.8"/>
      <line x1="22" y1="35" x2="30" y2="55" stroke="#333" stroke-width="0.8"/>
      <line x1="78" y1="35" x2="70" y2="55" stroke="#333" stroke-width="0.8"/>
      <line x1="30" y1="55" x2="22" y2="87" stroke="#333" stroke-width="0.8"/>
      <line x1="70" y1="55" x2="78" y2="87" stroke="#333" stroke-width="0.8"/>

      <circle cx="50" cy="8" r="6" fill="none" stroke="#333" stroke-width="0.8"/>

      <ellipse cx="${zone.x}" cy="${zone.y}" rx="${zone.w / 1.5}" ry="${zone.h * 1.2}" fill="url(#glow)"/>
      <ellipse cx="${zone.x}" cy="${zone.y}" rx="${zone.w / 2}" ry="${zone.h / 2}" fill="${zone.color}" fill-opacity="0.6" stroke="${zone.color}" stroke-width="0.5"/>

      <text x="50" y="97" text-anchor="middle" font-size="3.5" fill="#888" font-family="sans-serif">${zone.label}</text>
    </svg>
  `;

  document.getElementById(containerId).innerHTML = svg;
}

function getExerciseGradient(exId) {
  return EXERCISE_THUMBNAILS[exId] || { bg: '#667eea', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' };
}
