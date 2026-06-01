const EXERCISES = [
  {
    id: 'pushup', name: 'Push Up', muscle: 'Chest', category: 'Bodyweight',
    equipment: 'None', difficulty: 'Beginner',
    instructions: 'Place hands slightly wider than shoulders. Keep your body straight. Lower your chest close to the ground and push back up.',
    image: 'pushup'
  },
  {
    id: 'squat', name: 'Squat', muscle: 'Legs', category: 'Bodyweight',
    equipment: 'None', difficulty: 'Beginner',
    instructions: 'Stand with feet shoulder-width apart. Lower your hips as if sitting on a chair. Keep your chest up and back straight.',
    image: 'squat'
  },
  {
    id: 'plank', name: 'Plank', muscle: 'Abs', category: 'Bodyweight',
    equipment: 'None', difficulty: 'Beginner',
    instructions: 'Keep your body straight like a board. Elbows on the ground under shoulders. Tighten your core and hold as long as possible.',
    image: 'plank'
  },
  {
    id: 'lunges', name: 'Lunges', muscle: 'Legs', category: 'Bodyweight',
    equipment: 'None', difficulty: 'Beginner',
    instructions: 'Step forward with one leg and lower your back knee toward the ground. Keep your front knee above your ankle.',
    image: 'lunges'
  },
  {
    id: 'pullup', name: 'Pull Up', muscle: 'Back', category: 'Bodyweight',
    equipment: 'Bar', difficulty: 'Advanced',
    instructions: 'Grip the bar with hands shoulder-width apart. Pull yourself up until your chin is over the bar. Lower yourself controlled.',
    image: 'pullup'
  },
  {
    id: 'dips', name: 'Dips', muscle: 'Chest/Shoulders', category: 'Bodyweight',
    equipment: 'Parallel Bars', difficulty: 'Intermediate',
    instructions: 'Hold your body up on parallel bars. Lower yourself by bending your elbows and press back up.',
    image: 'dips'
  },
  {
    id: 'burpee', name: 'Burpee', muscle: 'Full Body', category: 'Bodyweight',
    equipment: 'None', difficulty: 'Advanced',
    instructions: 'From standing, drop into a squat, kick your feet back into a plank, do a push-up, jump your feet back in, and leap up.',
    image: 'burpee'
  },
  {
    id: 'crunch', name: 'Crunch', muscle: 'Abs', category: 'Bodyweight',
    equipment: 'None', difficulty: 'Beginner',
    instructions: 'Lie on your back with knees bent. Lift your shoulders off the ground while contracting your abs.',
    image: 'crunch'
  },
  {
    id: 'legraises', name: 'Leg Raises', muscle: 'Lower Abs', category: 'Bodyweight',
    equipment: 'None', difficulty: 'Intermediate',
    instructions: 'Lie on your back, raise your legs straight up and lower them slowly without touching the ground.',
    image: 'legraises'
  },
  {
    id: 'glutebridge', name: 'Glute Bridge', muscle: 'Glutes', category: 'Bodyweight',
    equipment: 'None', difficulty: 'Beginner',
    instructions: 'Lie on your back with knees bent. Lift your hips up by squeezing your glutes.',
    image: 'glutebridge'
  },
  {
    id: 'benchpress', name: 'Bench Press', muscle: 'Chest', category: 'Gym',
    equipment: 'Barbell', difficulty: 'Intermediate',
    instructions: 'Lie on a bench. Grip the bar at shoulder width. Lower it to your chest and press it back up.',
    image: 'benchpress'
  },
  {
    id: 'deadlift', name: 'Deadlift', muscle: 'Full Body', category: 'Gym',
    equipment: 'Barbell', difficulty: 'Advanced',
    instructions: 'Stand in front of the bar. Hinge at your hips, grip the bar and lift by driving through your legs. Keep your back straight.',
    image: 'deadlift'
  },
  {
    id: 'overheadpress', name: 'Overhead Press', muscle: 'Shoulders', category: 'Gym',
    equipment: 'Barbell/Dumbbell', difficulty: 'Intermediate',
    instructions: 'Stand up. Press the bar from your shoulders to overhead until your arms are fully extended.',
    image: 'overheadpress'
  },
  {
    id: 'barbellrow', name: 'Barbell Row', muscle: 'Back', category: 'Gym',
    equipment: 'Barbell', difficulty: 'Intermediate',
    instructions: 'Bend forward with a straight back. Pull the bar toward your belly button. Squeeze your back muscles.',
    image: 'barbellrow'
  },
  {
    id: 'bicepcurl', name: 'Bicep Curl', muscle: 'Biceps', category: 'Gym',
    equipment: 'Dumbbell', difficulty: 'Beginner',
    instructions: 'Stand with dumbbells. Curl the weights toward your shoulders by bending your elbows.',
    image: 'bicepcurl'
  },
  {
    id: 'tricepextension', name: 'Triceps Extension', muscle: 'Triceps', category: 'Gym',
    equipment: 'Dumbbell/Cable', difficulty: 'Beginner',
    instructions: 'Hold a dumbbell overhead. Lower it behind your head by bending your elbows. Press back up.',
    image: 'tricepextension'
  },
  {
    id: 'lateralraise', name: 'Lateral Raise', muscle: 'Side Shoulders', category: 'Gym',
    equipment: 'Dumbbell', difficulty: 'Beginner',
    instructions: 'Stand with dumbbells at your sides. Raise your arms out to the sides to shoulder height.',
    image: 'lateralraise'
  },
  {
    id: 'legpress', name: 'Leg Press', muscle: 'Legs', category: 'Gym',
    equipment: 'Machine', difficulty: 'Beginner',
    instructions: 'Sit on the machine. Place your feet on the platform. Push by extending your legs. Lower controlled.',
    image: 'legpress'
  },
  {
    id: 'latpulldown', name: 'Lat Pulldown', muscle: 'Upper Back', category: 'Gym',
    equipment: 'Cable Machine', difficulty: 'Beginner',
    instructions: 'Sit at the machine. Grip the bar wide. Pull it down to your chest. Return slowly.',
    image: 'latpulldown'
  },
  {
    id: 'calfraise', name: 'Calf Raise', muscle: 'Calves', category: 'Gym',
    equipment: 'Machine/Dumbbell', difficulty: 'Beginner',
    instructions: 'Stand on the edge of a step or platform. Raise your heels up and lower slowly.',
    image: 'calfraise'
  },
  {
    id: 'mountainclimber', name: 'Mountain Climber', muscle: 'Full Body', category: 'Bodyweight',
    equipment: 'None', difficulty: 'Intermediate',
    instructions: 'In plank position, alternately drive your knees toward your chest as fast as possible.',
    image: 'mountainclimber'
  },
  {
    id: 'jumpingjack', name: 'Jumping Jack', muscle: 'Full Body', category: 'Bodyweight',
    equipment: 'None', difficulty: 'Beginner',
    instructions: 'Jump while spreading your legs and raising your arms overhead, then return to starting position.',
    image: 'jumpingjack'
  },
  {
    id: 'romaniandeadlift', name: 'Romanian Deadlift', muscle: 'Hamstrings', category: 'Gym',
    equipment: 'Barbell/Dumbbell', difficulty: 'Intermediate',
    instructions: 'Hold the bar in front of your thighs. Hinge at your hips pushing your glutes back. Feel the stretch in your hamstrings.',
    image: 'romaniandeadlift'
  },
  {
    id: 'gobletsquat', name: 'Goblet Squat', muscle: 'Legs', category: 'Gym',
    equipment: 'Dumbbell/Kettlebell', difficulty: 'Beginner',
    instructions: 'Hold a dumbbell against your chest. Squat while keeping the weight close to your body.',
    image: 'gobletsquat'
  },
  {
    id: 'facepull', name: 'Face Pull', muscle: 'Rear Shoulders', category: 'Gym',
    equipment: 'Cable', difficulty: 'Beginner',
    instructions: 'Grip the cable with both hands. Pull toward your face while separating your elbows out to the sides.',
    image: 'facepull'
  },
  {
    id: 'hipthrust', name: 'Hip Thrust', muscle: 'Glutes', category: 'Gym',
    equipment: 'Barbell/Bench', difficulty: 'Intermediate',
    instructions: 'Rest your shoulders on a bench. Place the bar over your hips. Drive your hips up by squeezing your glutes.',
    image: 'hipthrust'
  },
  {
    id: 'russiantwist', name: 'Russian Twist', muscle: 'Obliques', category: 'Bodyweight',
    equipment: 'None/Dumbbell', difficulty: 'Intermediate',
    instructions: 'Sit with your feet raised. Rotate your torso left and right while holding your hands in front.',
    image: 'russiantwist'
  },
  {
    id: 'boxjump', name: 'Box Jump', muscle: 'Plyo Legs', category: 'Bodyweight',
    equipment: 'Box', difficulty: 'Advanced',
    instructions: 'Stand facing a box. Jump up landing both feet on the box. Step down and repeat.',
    image: 'boxjump'
  }
];
