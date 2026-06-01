const EMOJIS = {
  'Gjoks': '🏋️', 'Këmbë': '🦵', 'Bark': '💪', 'Shpinë': '🔙',
  'Shpatulla': '🏔️', 'Biceps': '💪', 'Triceps': '💪', 'Full Body': '🔥',
  'Bark i Poshtëm': '💪', 'Të Pasme': '🍑', 'Gjoks/Shpatulla': '🏋️',
  'Shpatulla anësore': '🏔️', 'Shpinë e gjerë': '🔙', 'Këmbë plyometric': '🦵',
  'Këmbë pasme': '🦵', 'Bark anësor': '💪', 'Viça': '🦵'
};

const DEFAULT_EMOJI = '💪';

// === PAYSERA CONFIG ===
// Zëvendëso me vlerat e tua nga https://developers.paysera.com
const PAYSERA = {
  projectId: '19103323',
  // For Checkout Classic (simpler):
  // Get project ID and password from Paysera admin
  acceptUrl: 'https://www.paysera.com/pay/accept.php',
  // For Checkout Modern (API):
  apiUrl: 'https://api.paysera.com',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET'
};

const PRO_PRICE = 2.99;
const PRO_PRICE_YEARLY = 19.99;

const PREDEFINED_PLANS = [
  {
    name: '🔥 Full Body (Beginner)',
    desc: 'Complete full body workout 3x/week',
    level: 'Beginner',
    exercises: [
      { id: 'squat', name: 'Squat', sets: 3, reps: 12, weight: 0 },
      { id: 'pushup', name: 'Push Up', sets: 3, reps: 10, weight: 0 },
      { id: 'plank', name: 'Plank', sets: 3, reps: 30, weight: 0 },
      { id: 'lunges', name: 'Lunges', sets: 3, reps: 10, weight: 0 },
      { id: 'crunch', name: 'Crunch', sets: 3, reps: 15, weight: 0 }
    ]
  },
  {
    name: '💪 Push Day (Chest/Shoulders/Tri)',
    desc: 'Push workout for muscle mass',
    level: 'Intermediate',
    exercises: [
      { id: 'benchpress', name: 'Bench Press', sets: 4, reps: 10, weight: 0 },
      { id: 'overheadpress', name: 'Overhead Press', sets: 4, reps: 10, weight: 0 },
      { id: 'dips', name: 'Dips', sets: 3, reps: 10, weight: 0 },
      { id: 'lateralraise', name: 'Lateral Raise', sets: 3, reps: 15, weight: 0 },
      { id: 'tricepextension', name: 'Triceps Extension', sets: 3, reps: 12, weight: 0 }
    ]
  },
  {
    name: '🔙 Pull Day (Back/Biceps)',
    desc: 'Pull workout for muscle mass',
    level: 'Intermediate',
    exercises: [
      { id: 'deadlift', name: 'Deadlift', sets: 4, reps: 8, weight: 0 },
      { id: 'barbellrow', name: 'Barbell Row', sets: 4, reps: 10, weight: 0 },
      { id: 'latpulldown', name: 'Lat Pulldown', sets: 3, reps: 12, weight: 0 },
      { id: 'facepull', name: 'Face Pull', sets: 3, reps: 15, weight: 0 },
      { id: 'bicepcurl', name: 'Bicep Curl', sets: 3, reps: 12, weight: 0 }
    ]
  },
  {
    name: '🦵 Leg Day',
    desc: 'Leg workout for strength and mass',
    level: 'Intermediate',
    exercises: [
      { id: 'squat', name: 'Squat', sets: 4, reps: 10, weight: 0 },
      { id: 'romaniandeadlift', name: 'Romanian Deadlift', sets: 4, reps: 10, weight: 0 },
      { id: 'lunges', name: 'Lunges', sets: 3, reps: 12, weight: 0 },
      { id: 'legpress', name: 'Leg Press', sets: 3, reps: 12, weight: 0 },
      { id: 'calfraise', name: 'Calf Raise', sets: 4, reps: 15, weight: 0 }
    ]
  },
  {
    name: '🏆 PPL (Push/Pull/Legs) 6x/week',
    desc: 'Advanced 6-day split',
    level: 'Advanced',
    exercises: [
      { id: 'benchpress', name: 'Bench Press', sets: 4, reps: 10, weight: 0 },
      { id: 'overheadpress', name: 'Overhead Press', sets: 4, reps: 10, weight: 0 },
      { id: 'lateralraise', name: 'Lateral Raise', sets: 3, reps: 15, weight: 0 },
      { id: 'tricepextension', name: 'Triceps Extension', sets: 3, reps: 12, weight: 0 },
      { id: 'dips', name: 'Dips', sets: 3, reps: 10, weight: 0 }
    ]
  },
  {
    name: '🏠 Home Workout (No Equipment)',
    desc: 'Full home workout with zero equipment',
    level: 'Beginner',
    exercises: [
      { id: 'squat', name: 'Squat', sets: 3, reps: 20, weight: 0 },
      { id: 'pushup', name: 'Push Up', sets: 3, reps: 15, weight: 0 },
      { id: 'lunges', name: 'Lunges', sets: 3, reps: 12, weight: 0 },
      { id: 'plank', name: 'Plank', sets: 3, reps: 45, weight: 0 },
      { id: 'glutebridge', name: 'Glute Bridge', sets: 3, reps: 15, weight: 0 },
      { id: 'mountainclimber', name: 'Mountain Climber', sets: 3, reps: 20, weight: 0 }
    ]
  },
  {
    name: '⚡ HIIT Fat Burner',
    desc: 'High intensity interval training for fat loss',
    level: 'Intermediate',
    exercises: [
      { id: 'burpee', name: 'Burpee', sets: 4, reps: 15, weight: 0 },
      { id: 'mountainclimber', name: 'Mountain Climber', sets: 4, reps: 20, weight: 0 },
      { id: 'boxjump', name: 'Box Jump', sets: 3, reps: 12, weight: 0 },
      { id: 'squat', name: 'Squat', sets: 3, reps: 20, weight: 0 },
      { id: 'jumpingjack', name: 'Jumping Jack', sets: 3, reps: 30, weight: 0 }
    ]
  },
  {
    name: '🎯 Strength 5x5',
    desc: 'Classic 5x5 program for maximum strength',
    level: 'Intermediate',
    exercises: [
      { id: 'squat', name: 'Squat', sets: 5, reps: 5, weight: 0 },
      { id: 'benchpress', name: 'Bench Press', sets: 5, reps: 5, weight: 0 },
      { id: 'barbellrow', name: 'Barbell Row', sets: 5, reps: 5, weight: 0 },
      { id: 'overheadpress', name: 'Overhead Press', sets: 5, reps: 5, weight: 0 },
      { id: 'deadlift', name: 'Deadlift', sets: 5, reps: 5, weight: 0 }
    ]
  },
  {
    name: '🍑 Glute & Legs Focus',
    desc: 'Focused glute and leg development workout',
    level: 'Beginner',
    exercises: [
      { id: 'glutebridge', name: 'Glute Bridge', sets: 4, reps: 15, weight: 0 },
      { id: 'hipthrust', name: 'Hip Thrust', sets: 4, reps: 12, weight: 0 },
      { id: 'squat', name: 'Squat', sets: 3, reps: 15, weight: 0 },
      { id: 'lunges', name: 'Lunges', sets: 3, reps: 12, weight: 0 },
      { id: 'romaniandeadlift', name: 'Romanian Deadlift', sets: 3, reps: 12, weight: 0 },
      { id: 'calfraise', name: 'Calf Raise', sets: 3, reps: 15, weight: 0 }
    ]
  },
  {
    name: '💪 Arms & Abs',
    desc: 'Sculpted arms and shredded abs workout',
    level: 'Beginner',
    exercises: [
      { id: 'bicepcurl', name: 'Bicep Curl', sets: 4, reps: 12, weight: 0 },
      { id: 'tricepextension', name: 'Triceps Extension', sets: 4, reps: 12, weight: 0 },
      { id: 'crunch', name: 'Crunch', sets: 3, reps: 20, weight: 0 },
      { id: 'legraises', name: 'Leg Raises', sets: 3, reps: 15, weight: 0 },
      { id: 'plank', name: 'Plank', sets: 3, reps: 45, weight: 0 },
      { id: 'russiantwist', name: 'Russian Twist', sets: 3, reps: 20, weight: 0 }
    ]
  },
  {
    name: '🔄 Upper/Lower Split 4x/week',
    desc: 'Upper-lower split for optimal results',
    level: 'Intermediate',
    exercises: [
      { id: 'benchpress', name: 'Bench Press', sets: 4, reps: 10, weight: 0 },
      { id: 'barbellrow', name: 'Barbell Row', sets: 4, reps: 10, weight: 0 },
      { id: 'overheadpress', name: 'Overhead Press', sets: 3, reps: 10, weight: 0 },
      { id: 'latpulldown', name: 'Lat Pulldown', sets: 3, reps: 12, weight: 0 },
      { id: 'bicepcurl', name: 'Bicep Curl', sets: 3, reps: 12, weight: 0 },
      { id: 'tricepextension', name: 'Triceps Extension', sets: 3, reps: 12, weight: 0 }
    ]
  },
  {
    name: '🤸 Calisthenics Master',
    desc: 'Bodyweight mastery workout',
    level: 'Advanced',
    exercises: [
      { id: 'pullup', name: 'Pull Up', sets: 4, reps: 8, weight: 0 },
      { id: 'dips', name: 'Dips', sets: 4, reps: 10, weight: 0 },
      { id: 'pushup', name: 'Push Up', sets: 3, reps: 20, weight: 0 },
      { id: 'squat', name: 'Squat', sets: 3, reps: 20, weight: 0 },
      { id: 'legraises', name: 'Leg Raises', sets: 3, reps: 15, weight: 0 },
      { id: 'boxjump', name: 'Box Jump', sets: 3, reps: 10, weight: 0 }
    ]
  }
];

let state = {
  currentView: 'home',
  plans: [],
  history: [],
  selectedPlan: null,
  selectedExercise: null,
  activeWorkout: null,
  timerInterval: null,
  seconds: 0
};

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initNavigation();
  initViews();
  renderHome();
  renderExercises();
  renderPlans();
  renderHistory();
  registerSW();
  checkPaymentStatus();
});

function loadState() {
  const saved = localStorage.getItem('fittracker');
  if (saved) {
    const data = JSON.parse(saved);
    state.plans = data.plans || [];
    state.history = data.history || [];
  }
}

function saveState() {
  localStorage.setItem('fittracker', JSON.stringify({
    plans: state.plans,
    history: state.history
  }));
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
}

function navigateTo(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-btn[data-view="${view}"]`);
  if (navBtn) navBtn.classList.add('active');
  state.currentView = view;
  document.getElementById('mainContent').scrollTop = 0;
}

function initNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (state.activeWorkout && view !== 'workout') return;
      navigateTo(view);
      if (view === 'home') renderHome();
      if (view === 'exercises') renderExercises();
      if (view === 'planner') renderPlans();
      if (view === 'history') renderHistory();
    });
  });
}

function initViews() {
  document.getElementById('btnQuickStart').addEventListener('click', quickStart);
  document.getElementById('homeNewPlan').addEventListener('click', createPlanModal);
  document.getElementById('detailBack').addEventListener('click', () => navigateTo('exercises'));
  document.getElementById('planDetailBack').addEventListener('click', () => navigateTo('planner'));
  document.getElementById('plannerNew').addEventListener('click', createPlanModal);
  document.getElementById('exerciseSearch').addEventListener('input', renderExercises);

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderExercises();
    });
  });

  document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
}

// ============ MODAL ============

function openModal(html) {
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
}

// ============ HOME ============

function renderHome() {
  const totalWorkouts = state.history.length;
  const totalSets = state.history.reduce((sum, w) => sum + (w.totalSets || 0), 0);
  const totalMinutes = state.history.reduce((sum, w) => sum + (w.duration || 0), 0);
  let streak = 0;
  if (state.history.length > 0) {
    const dates = [...new Set(state.history.map(w => w.date))].sort().reverse();
    const today = new Date().toISOString().split('T')[0];
    let checkDate = new Date(today);
    for (const d of dates) {
      const expected = checkDate.toISOString().split('T')[0];
      if (d === expected) { streak++; checkDate.setDate(checkDate.getDate() - 1); }
      else break;
    }
  }

  document.getElementById('statWorkouts').textContent = totalWorkouts;
  document.getElementById('statMinutes').textContent = totalMinutes;
  document.getElementById('statSets').textContent = totalSets;
  document.getElementById('statStreak').textContent = streak;

  const plansDiv = document.getElementById('homePlans');
  if (!isPro()) {
    const proDiv = document.createElement('div');
    proDiv.innerHTML = `
      <div class="pro-card" onclick="showProModal()">
        <div class="pro-card-content">
          <span class="pro-card-icon">⭐</span>
          <div><div class="pro-card-title">FitTracker Pro</div>
          <div class="pro-card-desc">Unlock unlimited plans + advanced stats</div></div>
        </div>
        <span class="pro-card-price">${PRO_PRICE}€/muaj</span>
      </div>
    `;
    plansDiv.parentNode.insertBefore(proDiv.firstElementChild, plansDiv);
  }
  if (state.plans.length === 0) {
    plansDiv.innerHTML = '<p class="empty-msg">No plans yet. Create one!</p>';
  } else {
    plansDiv.innerHTML = state.plans.map(p => `
      <div class="plan-card" onclick="viewPlan('${p.id}')">
        <div><div class="plan-name">${p.name}</div><div class="plan-count">${p.exercises.length} ushtrime</div></div>
        <span class="plan-arrow">›</span>
      </div>
    `).join('');
  }

  const lastDiv = document.getElementById('lastWorkout');
  if (state.history.length === 0) {
    lastDiv.innerHTML = '<p class="empty-msg">Nuk ke bërë asnjë stërvitje ende.</p>';
  } else {
    const last = state.history[state.history.length - 1];
    lastDiv.innerHTML = `
      <div class="lw-name">${last.planName}</div>
      <div class="lw-date">${formatDate(last.date)} • ${last.duration || 0} min</div>
      <div class="lw-stats">
        <span>🏋️ ${last.totalSets || 0} sete</span>
        <span>🔥 ${last.totalReps || 0} reps</span>
      </div>
    `;
  }
}

// ============ EXERCISES ============

function renderExercises() {
  const search = document.getElementById('exerciseSearch').value.toLowerCase();
  const filter = document.querySelector('.filter-btn.active').dataset.filter;

  let filtered = EXERCISES;
  if (filter !== 'all') filtered = filtered.filter(e => e.category === filter);
  if (search) filtered = filtered.filter(e =>
    e.name.toLowerCase().includes(search) ||
    e.muscle.toLowerCase().includes(search) ||
    e.equipment.toLowerCase().includes(search)
  );

  const grid = document.getElementById('exerciseGrid');
  grid.innerHTML = filtered.map(ex => {
    const thumb = getExerciseGradient(ex.id);
    const emoji = EMOJIS[ex.muscle] || DEFAULT_EMOJI;
    return `
    <div class="exercise-card" onclick="viewExercise('${ex.id}')">
      <div class="ex-thumb" style="background:${thumb.gradient}">
        <span class="ex-thumb-emoji">${emoji}</span>
      </div>
      <span class="name">${ex.name}</span>
      <span class="meta">${ex.muscle} • ${ex.difficulty}</span>
    </div>
  `}).join('');

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="empty-msg" style="grid-column:span 2">Asnjë ushtrim nuk u gjet.</p>';
  }
}

function viewExercise(id) {
  const ex = EXERCISES.find(e => e.id === id);
  if (!ex) return;
  state.selectedExercise = ex;

  navigateTo('exercise-detail');
  document.getElementById('detailName').textContent = ex.name;

  const thumb = getExerciseGradient(ex.id);
  const emoji = EMOJIS[ex.muscle] || DEFAULT_EMOJI;
  const thumbEl = document.getElementById('detailThumb');
  thumbEl.style.background = thumb.gradient;
  thumbEl.innerHTML = `<span style="font-size:48px">${emoji}</span>`;

  renderBodyMap(ex, 'detailBodyMap');

  document.getElementById('detailMuscle').textContent = ex.muscle;
  document.getElementById('detailDifficulty').textContent = ex.difficulty;
  document.getElementById('detailEquipment').textContent = ex.equipment;
  document.getElementById('detailInstructions').textContent = ex.instructions;
  document.getElementById('detailAddToWorkout').onclick = () => addToWorkoutModal(ex);
}

// ============ PLANS ============

function renderPlans() {
  const list = document.getElementById('plannerList');
  if (state.plans.length === 0) {
    list.innerHTML = '<p class="empty-msg">No plans yet. Create a new plan!</p>';
  } else {
    list.innerHTML = state.plans.map(p => `
      <div class="plan-card" onclick="viewPlan('${p.id}')">
        <div><div class="plan-name">${p.name}</div><div class="plan-count">${p.exercises.length} ushtrime</div></div>
        <span class="plan-arrow">›</span>
      </div>
    `).join('');
  }

  const predGrid = document.getElementById('predefinedPlans');
  predGrid.innerHTML = PREDEFINED_PLANS.map((plan, i) => `
    <div class="predefined-card" onclick="importPredefinedPlan(${i})">
      <div class="pd-header">
        <span class="pd-name">${plan.name}</span>
        <span class="pd-level ${plan.level}">${plan.level}</span>
      </div>
      <div class="pd-desc">${plan.desc}</div>
      <div class="pd-exercises">
        ${plan.exercises.map(ex => `<span class="pd-ex-tag">${ex.name} ${ex.sets}×${ex.reps}</span>`).join('')}
      </div>
      <span class="pd-import">+ Importo në planet e mia</span>
    </div>
  `).join('');
}

function createPlanModal() {
  openModal(`
    <h2>Create New Plan</h2>
    <input class="modal-input" id="planNameInput" placeholder="Plan name (e.g. Push Day)">
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="createPlan()">Create</button>
    </div>
  `);
  setTimeout(() => document.getElementById('planNameInput').focus(), 100);
}

function createPlan() {
  const name = document.getElementById('planNameInput').value.trim();
  if (!name) return;
  if (!checkPlanLimit()) return;
  const plan = {
    id: Date.now().toString(),
    name,
    exercises: []
  };
  state.plans.push(plan);
  saveState();
  closeModal();
  renderPlans();
  renderHome();
  viewPlan(plan.id);
}

function viewPlan(id) {
  const plan = state.plans.find(p => p.id === id);
  if (!plan) return;
  state.selectedPlan = plan;

  navigateTo('plan-detail');
  document.getElementById('planDetailName').textContent = plan.name;
  document.getElementById('planAddExercise').onclick = () => addExerciseToPlanModal();
  document.getElementById('planStartWorkout').onclick = () => startWorkout(plan.id);
  document.getElementById('planDelete').onclick = () => deletePlan(plan.id);

  renderPlanExercises();
}

function renderPlanExercises() {
  const plan = state.selectedPlan;
  if (!plan) return;
  const list = document.getElementById('planExercises');
  if (plan.exercises.length === 0) {
    list.innerHTML = '<p class="empty-msg">No exercises in this plan. Add some!</p>';
    return;
  }
  list.innerHTML = plan.exercises.map((ex, i) => `
    <div class="plan-exercise-item">
      <div>
        <div class="pe-name">${EMOJIS[EXERCISES.find(e => e.id === ex.id)?.muscle] || ''} ${ex.name}</div>
        <div class="pe-detail">${ex.sets} set × ${ex.reps} reps</div>
      </div>
      <button class="pe-remove" onclick="removeExerciseFromPlan(${i})">✕</button>
    </div>
  `).join('');
}

function addExerciseToPlanModal() {
  let html = `<h2>Add Exercise</h2><div style="max-height:300px;overflow-y:auto">`;
  EXERCISES.forEach(ex => {
    html += `<div class="exercise-select-item" onclick="showSetConfigModal('${ex.id}')">
      <div><div class="es-name">${EMOJIS[ex.muscle] || ''} ${ex.name}</div><div class="es-meta">${ex.muscle}</div></div>
      <span>›</span>
    </div>`;
  });
  html += `</div><div class="modal-actions"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button></div>`;
  openModal(html);
}

function showSetConfigModal(exId) {
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex) return;
  openModal(`
    <h2>${ex.name}</h2>
    <label style="font-size:13px;color:#888">Sets:</label>
    <input class="modal-input" id="setsInput" type="number" value="3" min="1">
    <label style="font-size:13px;color:#888">Reps:</label>
    <input class="modal-input" id="repsInput" type="number" value="10" min="1">
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addExerciseToPlan('${exId}')">Add</button>
    </div>
  `);
}

function addExerciseToPlan(exId) {
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex || !state.selectedPlan) return;
  const sets = parseInt(document.getElementById('setsInput').value) || 3;
  const reps = parseInt(document.getElementById('repsInput').value) || 10;
  state.selectedPlan.exercises.push({ id: exId, name: ex.name, sets, reps, weight: 0 });
  saveState();
  closeModal();
  renderPlanExercises();
}

function removeExerciseFromPlan(index) {
  if (!state.selectedPlan) return;
  state.selectedPlan.exercises.splice(index, 1);
  saveState();
  renderPlanExercises();
}

function deletePlan(id) {
  if (!confirm('A je i sigurt që do ta fshish këtë plan?')) return;
  state.plans = state.plans.filter(p => p.id !== id);
  saveState();
  navigateTo('planner');
  renderPlans();
  renderHome();
}

function importPredefinedPlan(index) {
  const pred = PREDEFINED_PLANS[index];
  if (!pred) return;

  let name = pred.name;
  let suffix = 1;
  while (state.plans.some(p => p.name === name)) {
    suffix++;
    name = `${pred.name} (${suffix})`;
  }

  const plan = {
    id: Date.now().toString(),
    name: name,
    exercises: pred.exercises.map(ex => ({ ...ex }))
  };

  state.plans.push(plan);
  saveState();
  renderPlans();
  renderHome();
  viewPlan(plan.id);
}

// ============ WORKOUT ============

function startWorkout(planId) {
  const plan = state.plans.find(p => p.id === planId);
  if (!plan || plan.exercises.length === 0) return;

  state.activeWorkout = {
    planId: plan.id,
    planName: plan.name,
    startTime: Date.now(),
    exercises: plan.exercises.map(ex => ({
      ...ex,
      sets: Array.from({ length: ex.sets }, (_, i) => ({
        setNum: i + 1,
        reps: ex.reps || 0,
        weight: ex.weight || 0,
        done: false
      }))
    }))
  };
  state.seconds = 0;

  navigateTo('workout');
  document.getElementById('workoutName').textContent = plan.name;
  renderWorkoutExercises();

  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.seconds++;
    document.getElementById('workoutTimer').textContent = formatTime(state.seconds);
  }, 1000);

  document.getElementById('workoutFinish').onclick = finishWorkout;
}

function quickStart() {
  if (state.plans.length === 0) {
    createPlanModal();
    return;
  }
  openModal(`
    <h2>Select Plan</h2>
    <div style="max-height:300px;overflow-y:auto">
      ${state.plans.map(p => `
        <div class="exercise-select-item" onclick="closeModal();startWorkout('${p.id}')">
          <div><div class="es-name">${p.name}</div><div class="es-meta">${p.exercises.length} exercises</div></div>
          <span>›</span>
        </div>
      `).join('')}
    </div>
    <div class="modal-actions"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button></div>
  `);
}

function renderWorkoutExercises() {
  const wo = state.activeWorkout;
  if (!wo) return;
  const list = document.getElementById('workoutExercises');
  list.innerHTML = wo.exercises.map((ex, exIdx) => {
    const allDone = ex.sets.every(s => s.done);
    return `
      <div class="workout-exercise-card">
        <div class="we-header">
          <span class="we-name">${ex.name}</span>
          <span class="we-status ${allDone ? 'done' : ''}">${allDone ? '✅ Done' : `${ex.sets.filter(s => s.done).length}/${ex.sets.length}`}</span>
        </div>
        ${ex.sets.map((set, sIdx) => `
          <div class="set-row">
            <span class="set-label">Set ${set.setNum}</span>
            <input type="number" class="set-reps" value="${set.reps}" data-ex="${exIdx}" data-set="${sIdx}" min="0" ${set.done ? 'disabled' : ''}>
            <span class="set-unit">reps</span>
            <input type="number" class="set-weight" value="${set.weight}" data-ex="${exIdx}" data-set="${sIdx}" min="0" step="0.5" ${set.done ? 'disabled' : ''}>
            <span class="set-unit">kg</span>
            <input type="checkbox" class="set-check" ${set.done ? 'checked' : ''} data-ex="${exIdx}" data-set="${sIdx}">
          </div>
        `).join('')}
      </div>
    `;
  }).join('');

  list.querySelectorAll('.set-reps').forEach(input => {
    input.addEventListener('change', (e) => {
      const ex = parseInt(e.target.dataset.ex);
      const set = parseInt(e.target.dataset.set);
      state.activeWorkout.exercises[ex].sets[set].reps = parseInt(e.target.value) || 0;
    });
  });

  list.querySelectorAll('.set-weight').forEach(input => {
    input.addEventListener('change', (e) => {
      const ex = parseInt(e.target.dataset.ex);
      const set = parseInt(e.target.dataset.set);
      state.activeWorkout.exercises[ex].sets[set].weight = parseFloat(e.target.value) || 0;
    });
  });

  list.querySelectorAll('.set-check').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const ex = parseInt(e.target.dataset.ex);
      const set = parseInt(e.target.dataset.set);
      state.activeWorkout.exercises[ex].sets[set].done = e.target.checked;

      const exDiv = e.target.closest('.workout-exercise-card');
      const sets = exDiv.querySelectorAll('.set-check');
      const done = exDiv.querySelectorAll('.set-check:checked');
      const status = exDiv.querySelector('.we-status');
      const name = state.activeWorkout.exercises[ex].name;

      if (done.length === sets.length) {
        status.textContent = '✅ Done';
        status.classList.add('done');
      } else {
        status.textContent = `${done.length}/${sets.length}`;
        status.classList.remove('done');
      }

      const inputs = exDiv.querySelectorAll('.set-reps, .set-weight');
      inputs.forEach(inp => {
        inp.disabled = e.target.checked;
      });
    });
  });
}

function finishWorkout() {
  const wo = state.activeWorkout;
  if (!wo) return;
  if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }

  const totalSets = wo.exercises.reduce((sum, ex) => sum + ex.sets.filter(s => s.done).length, 0);
  const totalReps = wo.exercises.reduce((sum, ex) => sum + ex.sets.filter(s => s.done).reduce((r, s) => r + s.reps, 0), 0);

  const log = {
    id: Date.now().toString(),
    planId: wo.planId,
    planName: wo.planName,
    date: new Date().toISOString().split('T')[0],
    duration: state.seconds,
    totalSets,
    totalReps,
    exercises: wo.exercises.map(ex => ({
      id: ex.id,
      name: ex.name,
      sets: ex.sets.filter(s => s.done).map(s => ({ reps: s.reps, weight: s.weight }))
    }))
  };

  state.history.push(log);
  saveState();

  const minutes = Math.floor(state.seconds / 60);
  const secs = state.seconds % 60;

  openModal(`
      <div class="complete-stats">
      <div style="font-size:48px;margin-bottom:8px">🎉</div>
      <h2>Workout Complete!</h2>
      <div class="complete-stats-grid">
        <div>        <div class="cs-number">${totalSets}</div><div class="cs-label">Sets</div></div>
        <div><div class="cs-number">${totalReps}</div><div class="cs-label">Reps</div></div>
        <div>        <div class="cs-number">${minutes}:${secs.toString().padStart(2, '0')}</div><div class="cs-label">Time</div></div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="closeModal();navigateTo('home');state.activeWorkout=null;renderHome()">Home</button>
      <button class="btn btn-secondary" onclick="closeModal();state.activeWorkout=null;navigateTo('history');renderHistory()">View History</button>
    </div>
  `);

  state.activeWorkout = null;
}

// ============ HISTORY ============

function renderHistory() {
  const list = document.getElementById('historyList');
  if (state.history.length === 0) {
    list.innerHTML = '<p class="empty-msg">No workouts recorded yet. Start one!</p>';
    return;
  }
  const reversed = [...state.history].reverse();
  list.innerHTML = reversed.map(w => `
    <div class="history-card">
      <div class="h-date">${formatDate(w.date)}</div>
      <div class="h-name">${w.planName}</div>
      <div class="h-stats">
        <span>⏱️ ${w.duration || 0} min</span>
        <span>🏋️ ${w.totalSets || 0} sete</span>
        <span>🔥 ${w.totalReps || 0} reps</span>
      </div>
    </div>
  `).join('');
}

function addToWorkoutModal(ex) {
  if (state.plans.length === 0) {
    openModal(`    <h2>No plans yet</h2><p style="color:#888;margin-bottom:16px">Create a workout plan first.</p>
    <div class="modal-actions">    <button class="btn btn-primary" onclick="closeModal();createPlanModal()">Create Plan</button></div>`);
    return;
  }
  openModal(`
    <h2>Add ${ex.name} to plan</h2>
    <div style="max-height:300px;overflow-y:auto">
      ${state.plans.map(p => `
        <div class="exercise-select-item" onclick="closeModal();showSetConfigForPlan('${ex.id}','${p.id}')">
          <div><div class="es-name">${p.name}</div><div class="es-meta">${p.exercises.length} exercises</div></div>
          <span>›</span>
        </div>
      `).join('')}
    </div>
    <div class="modal-actions"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button></div>
  `);
}

function showSetConfigForPlan(exId, planId) {
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex) return;
  openModal(`
    <h2>${ex.name}</h2>
    <input class="modal-input" id="psSets" type="number" value="3" min="1" placeholder="Sets">
    <input class="modal-input" id="psReps" type="number" value="10" min="1" placeholder="Reps">
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addToPlanFromDetail('${exId}','${planId}')">Add</button>
    </div>
  `);
}

function addToPlanFromDetail(exId, planId) {
  const ex = EXERCISES.find(e => e.id === exId);
  const plan = state.plans.find(p => p.id === planId);
  if (!ex || !plan) return;
  const sets = parseInt(document.getElementById('psSets').value) || 3;
  const reps = parseInt(document.getElementById('psReps').value) || 10;
  plan.exercises.push({ id: exId, name: ex.name, sets, reps, weight: 0 });
  saveState();
  closeModal();
}

// ============ PAYMENT / PRO ============

function isPro() {
  return localStorage.getItem('fittracker_pro') === 'true';
}

function getPlanLimit() {
  return isPro() ? 999 : 3;
}

function proFeature(feature) {
  if (!isPro()) {
    showProModal();
    return false;
  }
  return true;
}

function checkPlanLimit() {
  if (state.plans.length >= getPlanLimit()) {
    showProModal('You reached the plan limit. Upgrade to Pro for unlimited plans!');
    return false;
  }
  return true;
}

function showProModal(msg) {
  openModal(`
    <div style="text-align:center;padding:8px 0">
      <div style="font-size:48px;margin-bottom:8px">⭐</div>
      <h2>FitTracker Pro</h2>
      <p style="color:#888;margin:12px 0;line-height:1.5">${msg || 'Unlock all Pro features!'}</p>
      <div style="background:var(--surface2);border-radius:10px;padding:12px;margin:12px 0;text-align:left">
        <div style="padding:4px 0">✅ Unlimited workout plans</div>
        <div style="padding:4px 0">✅ Advanced statistics</div>
        <div style="padding:4px 0">✅ PDF workout export</div>
        <div style="padding:4px 0">✅ No ads</div>
        <div style="padding:4px 0">✅ Priority updates</div>
      </div>
      <div style="margin:16px 0">
        <div style="font-size:28px;font-weight:700;color:var(--primary)">${PRO_PRICE}€ <span style="font-size:14px;color:#888">/month</span></div>
        <div style="font-size:14px;color:#888;margin-top:4px">or ${PRO_PRICE_YEARLY}€/year (save 33%)</div>
      </div>
      <button class="btn btn-primary btn-large" onclick="payseraCheckout()" style="margin-bottom:8px">
        💳 Proceed to Payment
      </button>
      <button class="btn btn-secondary" onclick="closeModal()" style="margin-bottom:4px">Later</button>
    </div>
  `);
}

function payseraCheckout() {
  closeModal();

  // Method 1: PaySera Checkout Classic (redirect)
  // Simplest method - redirects to PaySera payment page
  const orderId = 'FT-' + Date.now();
  const amount = Math.round(PRO_PRICE * 100); // euro → cent

  // PaySera Classic form (redirect method)
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = PAYSERA.acceptUrl;
  form.target = '_blank';

  const fields = {
    projectid: PAYSERA.projectId,
    orderid: orderId,
    amount: amount.toString(),
    currency: 'EUR',
    accepturl: window.location.href + '?payment=success&order=' + orderId,
    cancelurl: window.location.href + '?payment=cancel',
    callbackurl: window.location.href + '?payment=callback',
    version: '1.6',
    lang: 'SQ',
    payment: '',
    country: 'LT',
    p_firstname: '',
    p_lastname: '',
    p_email: '',
    p_street: '',
    p_city: '',
    p_zip: '',
    test: '0'
  };

  Object.entries(fields).forEach(([k, v]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = k;
    input.value = v;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);

  // Store pending payment in localStorage for testing
  // In production, verified via PaySera webhook
  localStorage.setItem('fittracker_pro_pending', orderId);
  localStorage.setItem('fittracker_pro', 'true'); // Aktivizo për testim
  setTimeout(() => renderHome(), 500);
}

function checkPaymentStatus() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('payment') === 'success') {
    localStorage.setItem('fittracker_pro', 'true');
    localStorage.removeItem('fittracker_pro_pending');
    // Remove payment params from URL
    window.history.replaceState({}, '', window.location.pathname);
    // Trego sukses
    setTimeout(() => {
      openModal(`
        <div style="text-align:center;padding:16px 0">
          <div style="font-size:48px;margin-bottom:8px">🎉</div>
          <h2>Welcome to Pro!</h2>
          <p style="color:#888;margin:12px 0">You now have access to all premium features.</p>
          <button class="btn btn-primary" onclick="closeModal();renderHome()">Start Workout</button>
        </div>
      `);
    }, 500);
  }
}

// ============ HELPERS ============

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}
