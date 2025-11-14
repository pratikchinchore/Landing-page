gsap.registerPlugin(ScrollTrigger);

// WORD BY WORD TITLE
gsap.to(".video-title span", {
  opacity: 1,
  y: 0,
  stagger: 0.45,
  duration: 15.4,
  ease: "power3.out",
});

// UNDERLINE
gsap.to(".underline", {
  width: "160px",
  duration: 1.5,
  delay: 0.8,
  ease: "power3.out",
});

// PARALLAX
gsap.to(".bg-video", {
  y: "-15%",
  ease: "none",
  scrollTrigger: {
    trigger: ".video-hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

// BUTTON

// ---------------------------
// 1) FLOAT-IN ENTRANCE
// ---------------------------
gsap.fromTo(
  ".lux-btn",
  { opacity: 0, y: 40, scale: 0.9 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1.6,
    delay: 1.4,
    ease: "power4.out",
  }
);

// ---------------------------
// 2) LUXURY GOLD GLOW PULSE
// ---------------------------
gsap.to(".lux-btn", {
  boxShadow: "0 0 35px rgba(247, 233, 142, 0.9)",
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "sine.inOut",
  delay: 3,
});

// ---------------------------
// 3) SHIMMER SWEEP LOOP
// ---------------------------
gsap.to(".lux-btn::after", {
  left: "180%",
  duration: 2,
  repeat: -1,
  ease: "power2.inOut",
  delay: 1.8,
});

// ---------------------------
// 4) MAGNETIC HOVER LEVEL 2
// ---------------------------
const btn = document.querySelector(".lux-btn");

btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / 5;
  const y = (e.clientY - rect.top - rect.height / 2) / 5;

  gsap.to(btn, {
    x,
    y,
    rotateX: -y,
    rotateY: x,
    duration: 0.3,
    ease: "power3.out",
  });
});

btn.addEventListener("mouseleave", () => {
  gsap.to(btn, {
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    duration: 0.4,
    ease: "power3.out",
  });
});

// ---------------------------
// 5) CLICK GOLD RIPPLE EFFECT
// ---------------------------
btn.addEventListener("click", (e) => {
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = `${e.clientX - rect.left}px`;
  ripple.style.top = `${e.clientY - rect.top}px`;
  btn.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});

// ---------------------------
// 6) PARTICLE SPARKLE EMITTER
// ---------------------------
function createSparkle() {
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");

  const btnRect = btn.getBoundingClientRect();
  const x = Math.random() * btnRect.width;
  sparkle.style.left = x + "px";
  sparkle.style.top = "-10px";

  btn.appendChild(sparkle);

  gsap.fromTo(
    sparkle,
    { opacity: 1, y: 0, scale: 0.4 },
    {
      opacity: 0,
      y: -40,
      scale: 1.2,
      duration: 1.2,
      ease: "power1.out",
      onComplete: () => sparkle.remove(),
    }
  );
}

setInterval(createSparkle, 600);


//Button End

// 🌟 SOFT SPOTLIGHT FOLLOWING MOUSE
document.addEventListener("mousemove", (e) => {
  gsap.to(".spotlight", {
    x: e.clientX - 225,
    y: e.clientY - 225,
    duration: 0.8,
    ease: "power3.out",
  });
});
// ✨ Spotlight reacts to scroll
gsap.to(".spotlight", {
  y: 200, // how much it drifts down when scrolling
  ease: "none",
  scrollTrigger: {
    trigger: ".video-hero",
    start: "top top",
    end: "bottom top",
    scrub: 1.2, // smoother drift
  },
});
// ✨ Soft breathing / pulsing effect
gsap.to(".spotlight", {
  scale: 1.12,
  opacity: 0.75,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* -----------------------------
       Particles (soft floating)
       ----------------------------- */
const particleLayer = document.querySelector(".particle-layer");
const particleCount = 28;
const particles = [];
for (let i = 0; i < particleCount; i++) {
  const el = document.createElement("div");
  el.className = "particle";
  const size = 6 + Math.random() * 12;
  el.style.width = size + "px";
  el.style.height = size + "px";
  el.style.left = Math.random() * 100 + "%";
  el.style.top = 10 + Math.random() * 60 + "%";
  el.style.opacity = 0.35 + Math.random() * 0.6;
  particleLayer.appendChild(el);
  particles.push(el);

  if (!reduceMotion) {
    gsap.to(el, {
      y: -10 - Math.random() * 30,
      x: (Math.random() - 0.5) * 20,
      duration: 6 + Math.random() * 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 3,
    });
  }
}

/* -----------------------------
       Header + Hero intro
       ----------------------------- */
if (!reduceMotion) {
  gsap.from("header", {
    y: -18,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
  });
} else {
  gsap.set("header", { opacity: 1 });
}

const heroTl = gsap.timeline();
heroTl
  .from(
    ".cover",
    { scale: 0.985, opacity: 0, duration: 0.9, ease: "back.out(1.2)" },
    0.12
  )
  .from(
    "#heroHeadline",
    { y: 18, opacity: 0, duration: 0.7, ease: "power3.out" },
    0.28
  )
  .from(".lead", { y: 12, opacity: 0, duration: 0.7, ease: "power3.out" }, 0.42)
  .from(
    ".form-card",
    { y: 18, opacity: 0, duration: 0.7, ease: "power3.out" },
    0.52
  );

if (!reduceMotion) {
  gsap.to(".cover", {
    y: -6,
    duration: 3.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

/* -----------------------------
       Wave morph + parallax
       ----------------------------- */
const waveBack = document.getElementById("waveBack");
const waveMid = document.getElementById("waveMid");
const waveFront = document.getElementById("waveFront");

const backB =
  "M0,150 C240,220 420,100 740,130 C1040,160 1200,260 1440,210 L1440,260 L0,260 Z";
const midB =
  "M0,200 C260,240 420,140 760,170 C1060,190 1220,150 1440,170 L1440,260 L0,260 Z";
const frontB =
  "M0,210 C260,270 420,180 720,190 C1000,200 1180,200 1440,190 L1440,260 L0,260 Z";

if (!reduceMotion) {
  gsap.to(waveBack, {
    attr: { d: backB },
    duration: 8.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });
  gsap.to(waveMid, {
    attr: { d: midB },
    duration: 7.0,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });
  gsap.to(waveFront, {
    attr: { d: frontB },
    duration: 5.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  // subtle horizontal parallax of waves
  gsap.to(".waves", {
    xPercent: -6,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

// parallax on scroll: particles, waves, cover, form
if (!reduceMotion) {
  gsap.to(particleLayer, {
    y: -40,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to(".waves", {
    y: 40,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to(".cover", {
    y: -30,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-left",
      start: "top top",
      end: "bottom top",
      scrub: 0.9,
    },
  });
  gsap.to(".form-card", {
    y: -18,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-right",
      start: "top top",
      end: "bottom top",
      scrub: 0.9,
    },
  });
}

/* -----------------------------
       Soft glowing highlights (headline & CTA)
       ----------------------------- */
if (!reduceMotion) {
  // headline subtle glow pulse
  gsap.to("#heroHeadline", {
    textShadow: "0 10px 40px rgba(200,170,120,0.08)",
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // CTA pulse shadow (very soft)
  gsap.to("#ctaBtn", {
    boxShadow: "0 22px 54px rgba(200,170,120,0.14)",
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

/* -----------------------------
       Scroll-based content transitions (fade/raise + alternating rotation)
       ----------------------------- */
document.querySelectorAll(".content-block").forEach((block, idx) => {
  const rotation = idx % 2 === 0 ? 2 : -2; // alternate small rotation
  gsap.from(block, {
    scrollTrigger: {
      trigger: block,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 30,
    opacity: 0,
    rotation: rotation,
    duration: 0.9,
    ease: "power2.out",
    delay: idx * 0.04,
  });
});

// features stagger
gsap.utils.toArray(".feature").forEach((f, i) => {
  gsap.from(f, {
    scrollTrigger: { trigger: f, start: "top 92%" },
    y: 18,
    opacity: 0,
    duration: 0.7,
    delay: i * 0.06,
    ease: "power2.out",
  });
});

// testimonials fade
gsap.utils.toArray(".testimonial").forEach((t, i) => {
  gsap.from(t, {
    scrollTrigger: { trigger: t, start: "top 92%" },
    y: 16,
    opacity: 0,
    duration: 0.7,
    delay: i * 0.08,
    ease: "power2.out",
  });
});

/* -----------------------------
       Mouse-based parallax tilt (cover + form)
       ----------------------------- */
(function addTilt() {
  const cover = document.querySelector(".cover");
  const form = document.querySelector(".form-card");
  const container = document.querySelector(".hero");

  if (!cover || !form || reduceMotion) return;

  // bounds to limit rotation
  const maxRotate = 6; // degrees
  const maxTranslate = 8; // px

  let pointer = { x: 0, y: 0 };
  let sizes = null;

  function updateSizes() {
    sizes = container.getBoundingClientRect();
  }
  updateSizes();
  window.addEventListener("resize", updateSizes);

  container.addEventListener("pointermove", (e) => {
    pointer.x = (e.clientX - sizes.left) / sizes.width; // 0..1
    pointer.y = (e.clientY - sizes.top) / sizes.height; // 0..1
  });

  // smooth animation loop
  gsap.ticker.add(() => {
    // normalized -0.5..0.5
    const nx = pointer.x - 0.5;
    const ny = pointer.y - 0.5;

    // cover tilt (subtle)
    gsap.to(cover, {
      duration: 0.5,
      rotationY: nx * maxRotate,
      rotationX: -ny * (maxRotate / 1.6),
      x: nx * maxTranslate,
      y: -ny * (maxTranslate / 1.5),
      ease: "power1.out",
    });

    // form tilt (inverse, smaller)
    gsap.to(form, {
      duration: 0.5,
      rotationY: -nx * (maxRotate * 0.7),
      rotationX: ny * (maxRotate * 0.45),
      x: -nx * (maxTranslate * 0.6),
      y: ny * (maxTranslate * 0.5),
      ease: "power1.out",
    });
  });

  // reset on leave
  container.addEventListener("pointerleave", () => {
    gsap.to([cover, form], {
      rotationY: 0,
      rotationX: 0,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });
})();

/* -----------------------------
       FAQ accordion
       ----------------------------- */
document.querySelectorAll(".faq-item").forEach((item) => {
  const body = item.querySelector("p");
  body.style.maxHeight = "0px";
  body.style.overflow = "hidden";
  item.addEventListener("click", () => {
    const open = item.classList.toggle("open");
    if (open) {
      gsap.to(body, { maxHeight: 400, duration: 0.32, ease: "power2.out" });
      gsap.to(item, { backgroundColor: "#fff7ed", duration: 0.28 });
    } else {
      gsap.to(body, { maxHeight: 0, duration: 0.28, ease: "power2.in" });
      gsap.to(item, { backgroundColor: "#fff", duration: 0.28 });
    }
  });
});

/* -----------------------------
       Form submit demo
       ----------------------------- */
function submitForm() {
  const name = document.getElementById("fname").value || "";
  const email = document.getElementById("email").value || "";
  if (!name || !email) {
    alert("Please fill first name and email to access the eBook.");
    return;
  }
  gsap.fromTo(
    "#leadForm",
    { scale: 1 },
    {
      scale: 0.985,
      duration: 0.08,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        alert("Thanks! The eBook link will be sent to " + email + " (demo).");
      },
    }
  );
}

/* -----------------------------
       Smooth nav scroll
       ----------------------------- */
document.querySelectorAll("nav a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  });
});

/* -----------------------------
       Respect prefers-reduced-motion
       ----------------------------- */
if (reduceMotion) {
  gsap.globalTimeline.timeScale(3);
  // kill particle tweens
  particles.forEach((p) => gsap.killTweensOf(p));
  // remove transforms applied in loops
  gsap.set([".cover", ".form-card", ".waves", ".particle-layer"], {
    clearProps: "transform",
  });
}
