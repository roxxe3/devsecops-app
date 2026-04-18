const express = require('express');
const app = express();
// Serve static files from the 'public' directory
app.use(express.static('public'));
// Define a route (endpoint)
app.get('/', (req, res) => {
res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Deployment Successful - GDG EMSI Casablanca</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?
family=Outfit:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
<script>
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Outfit', 'sans-serif'],
},
colors: {
google: {
blue: '#4285F4',
red: '#EA4335',
yellow: '#FBBC04',
green: '#34A853',
},
base: '#F4F2EB',
},
boxShadow: {
'brutal': '4px 6px 0px 0px #1c1c1c',
}
}
}
}
</script>
<style>
body {
background: linear-gradient(135deg, #F8F6F0 0%, #FAEDD4 100%);
}
.outline-border {
border: 2px solid #1c1c1c;
}
</style>
</head>
<body class="h-screen w-screen flex flex-col items-center justify-center
overflow-hidden relative font-sans text-gray-900">
<div class="z-10 text-center flex flex-col items-center justify-center
p-10 md:p-16 bg-white outline-border rounded-[2rem] shadow-brutal max-w-xl
mx-4 relative transform hover:rotate-1 transition-transform duration-500">
<!-- Neo-brutalist decorative shapes -->
<div class="absolute -top-5 -left-5 w-12 h-12 bg-google-yellow
outline-border rounded-full shadow-brutal z-20"></div>
<div class="absolute -bottom-5 -right-5 w-12 h-12 bg-google-green
outline-border rounded-sm transform -rotate-12 shadow-brutal z-20"></div>
<span class="bg-red-50 text-google-red outline-border px-3 py-1
text-[10px] font-bold uppercase tracking-[0.2em] rounded-md mb-6 inline-
block shadow-[2px_2px_0px_0px_#1c1c1c]">TARGET EXPLOITED</span>
tighter mb-4 leading-none">
<h1 class="text-5xl md:text-7xl font-black text-gray-900 tracking-
Mission <br><span class="text-google-blue">Accomplished!</span>
</h1>
<p class="text-lg md:text-xl text-gray-600 font-medium mb-10
leading-relaxed mt-4">
Congratulations on successfully pushing the payload! Your
<strong class="text-gray-900">DevSecOps Pipeline</strong> has effectively
bypassed the defenses and the deployment exploit is live.
</p>
<a href="/gdg-emsi.html" class="w-full outline-border bg-google-blue
text-white shadow-brutal rounded-xl px-8 py-4 font-bold text-lg hover:-
translate-y-1 hover:shadow-[6px_8px_0px_0px_#1c1c1c] active:translate-y-1
active:shadow-none transition-all flex items-center justify-center gap-3
group">
Proceed to Landing Page
<svg class="w-5 h-5 group-hover:translate-x-1 transition-
transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7
7m0 0l-7 7m7-7H3"></path></svg>
</a>
</div>
<!-- Canvas Confetti Library -->
<script src="https://cdn.jsdelivr.net/npm/canvas-
confetti@1.6.0/dist/confetti.browser.min.js"></script>
<script>
// Trigger confetti burst on load
window.onload = () => {
const duration = 3 * 1000;
const animationEnd = Date.now() + duration;
const defaults = { startVelocity: 30, spread: 360, ticks: 60,
zIndex: 0 };
function randomInRange(min, max) {
return Math.random() * (max - min) + min;
}
const interval = setInterval(function() {
const timeLeft = animationEnd - Date.now();
if (timeLeft <= 0) {
return clearInterval(interval);
}
const particleCount = 50 * (timeLeft / duration);
0.2 },
// Shoot confetti from two sides
confetti(Object.assign({}, defaults, {
particleCount,
origin: { x: randomInRange(0.1, 0.3), y: Math.random() -
colors: ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
}));
confetti(Object.assign({}, defaults, {
particleCount,
origin: { x: randomInRange(0.7, 0.9), y: Math.random() -
0.2 },
colors: ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
}));
}, 250);
};
</script>
</body>
</html>
`);
});
// Start server on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
