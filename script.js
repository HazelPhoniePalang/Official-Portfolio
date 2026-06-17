/* CURSOR */
const cur = document.getElementById("cursor"),
  ring = document.getElementById("cursor-ring");
document.addEventListener("mousemove", (e) => {
  cur.style.left = e.clientX + "px";
  cur.style.top = e.clientY + "px";
  setTimeout(() => {
    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";
  }, 60);
});
document.querySelectorAll("a,button,input,textarea,label").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cur.style.width = "18px";
    cur.style.height = "18px";
    ring.style.width = "52px";
    ring.style.height = "52px";
  });
  el.addEventListener("mouseleave", () => {
    cur.style.width = "10px";
    cur.style.height = "10px";
    ring.style.width = "36px";
    ring.style.height = "36px";
  });
});

/* NAV */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
  document.getElementById("btt").classList.toggle("show", window.scrollY > 400);
});

/* MOBILE NAV */
document
  .getElementById("hamburger")
  .addEventListener("click", () =>
    document.getElementById("mobileNav").classList.add("open"),
  );
document
  .getElementById("closeNav")
  .addEventListener("click", () =>
    document.getElementById("mobileNav").classList.remove("open"),
  );
document
  .querySelectorAll(".mobile-link")
  .forEach((l) =>
    l.addEventListener("click", () =>
      document.getElementById("mobileNav").classList.remove("open"),
    ),
  );

/* REVEAL */
const ro = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in");
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));

/* SKILL BARS */
const bo = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting)
        e.target
          .querySelectorAll(".skill-bar-fill")
          .forEach((b) => (b.style.width = b.dataset.width + "%"));
    }),
  { threshold: 0.3 },
);
document.querySelectorAll(".skill-card").forEach((c) => bo.observe(c));

/* IMAGE UPLOAD HELPER */
function setupImgUpload(inputId, previewId, thumbId, zoneId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  const thumb = document.getElementById(thumbId);
  const zone = zoneId ? document.getElementById(zoneId) : null;
  if (!input) return;
  input.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.src = e.target.result;
        preview.style.display = "block";
        if (thumb) thumb.classList.add("has-img");
        if (zone) zone.classList.add("has-img");
      };
      reader.readAsDataURL(this.files[0]);
    }
  });
}

/* Setup all image zones */
setupImgUpload("heroPhotoInput", "heroPhotoPreview", null, "heroPhotoZone");
setupImgUpload("proj1img", "proj1preview", "proj1thumb", null);
setupImgUpload("proj2img", "proj2preview", "proj2thumb", null);
setupImgUpload("proj3img", "proj3preview", "proj3thumb", null);
setupImgUpload("cert1img", "cert1preview", "cert1thumb", null);
setupImgUpload("cert2img", "cert2preview", "cert2thumb", null);

/* EMAILJS */
const EJS_SVC = "service_teealmf";
const EJS_TPL = "template_zwbwxhw";
const EJS_KEY = "7MO5S_-8l6D7InFvC";

(function () {
  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
  s.onload = () => emailjs.init(EJS_KEY);
  document.head.appendChild(s);
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const btn = document.getElementById("submitBtn");
    const msg = document.getElementById("formMsg");
    const txt = document.getElementById("btnText");
    btn.disabled = true;
    txt.textContent = "Sending…";
    msg.className = "form-msg";
    msg.style.display = "none";
    try {
      await emailjs.send(EJS_SVC, EJS_TPL, {
        from_name: document.getElementById("fname").value.trim(),
        from_email: document.getElementById("femail").value.trim(),
        subject:
          document.getElementById("fsubject").value.trim() || "(No subject)",
        message: document.getElementById("fmessage").value.trim(),
      });
      msg.textContent = "✓ Message sent! I'll be in touch soon.";
      msg.className = "form-msg success";
      this.reset();
    } catch (err) {
      msg.textContent = "✗ Something went wrong. Please email me directly.";
      msg.className = "form-msg error";
    } finally {
      btn.disabled = false;
      txt.textContent = "Send Message";
      msg.style.display = "block";
    }
  });

/* NAV ACTIVE HIGHLIGHT */
const secs = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let cur2 = "";
  secs.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) cur2 = s.id;
  });
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.style.color =
      a.getAttribute("href") === "#" + cur2 ? "var(--accent)" : "";
  });
});
