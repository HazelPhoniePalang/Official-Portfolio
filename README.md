# 🌐 Hazel Phonie Palang — Personal Portfolio Website

A modern, elegant personal portfolio website built with **HTML**, **CSS**, **JavaScript**, and **Bootstrap 5**. Designed to showcase skills in Front-End Development and Database Administration as an IT undergraduate at the University of Mindanao, Davao City.

---

## ✨ Features

- **Animated Hero Section** — Fade-in entrance animations with a click-to-upload personal photo frame
- **About Section** — Personal bio with stat counters
- **Skills Section** — Skill cards with animated progress bars + tech badge groups
- **Projects Section** — Clickable image upload zones for project screenshots
- **Certificates Section** — Dedicated image upload cards for Database and HTML/CSS certificates
- **Contact Form** — EmailJS-powered form (no backend required)
- **Custom Cursor** — Gold dot + ring follower cursor
- **Scroll Animations** — Elements reveal on scroll via IntersectionObserver
- **Sticky Navigation** — Blur backdrop nav with active section highlighting
- **Mobile Responsive** — Hamburger menu for smaller screens
- **Back-to-Top Button** — Appears after scrolling down

---

## 🛠️ Built With

| Technology           | Purpose                             |
| -------------------- | ----------------------------------- |
| HTML5                | Structure                           |
| CSS3                 | Styling & animations                |
| JavaScript (Vanilla) | Interactivity & scroll effects      |
| Bootstrap 5.3        | Grid, responsive layout             |
| Bootstrap Icons 1.11 | Icon set                            |
| Google Fonts         | Cormorant Garamond, DM Mono, Outfit |
| EmailJS              | Contact form email delivery         |

---

## 📁 Project Structure

```
portfolio/
│
├── index.html        # Main portfolio file (all-in-one)
├── README.md         # This file
│
└── assets/           # (optional) Put your images here
    ├── photo.jpg         # Your profile photo
    ├── project1.png      # Project screenshots
    ├── project2.png
    ├── project3.png
    ├── cert-database.jpg # Certificate images
    └── cert-html-css.jpg
```

> **Note:** The current version is a single `index.html` file. All CSS and JavaScript are written inline — no build tools or dependencies to install.

---

## 🚀 Getting Started

### 1. Download or Clone

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

Or simply download the `index.html` file and open it in your browser.

### 2. Open in Browser

Just double-click `index.html` — no server required.

---

## ✏️ How to Customize

### Personal Info

Search and replace the following placeholders inside `index.html`:

| Placeholder                  | Replace With       |
| ---------------------------- | ------------------ |
| `Hazel Phonie Palang`        | Your full name     |
| `yourname@email.com`         | Your email address |
| `University of Mindanao`     | Your university    |
| `Davao City, Philippines`    | Your location      |
| `© 2025 Hazel Phonie Palang` | Your name and year |

---

### Profile Photo

In the Hero section, click the photo frame while viewing the file in a browser to upload your photo via the file picker.

To hardcode a photo instead, replace the upload zone with:

```html
<img
  src="assets/photo.jpg"
  alt="Hazel Phonie Palang"
  style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
/>
```

---

### Projects

Each project card has a hidden file input for uploading a screenshot. To activate it, **uncomment** the input tag:

```html
<!-- Change this: -->
<!-- <input type="file" id="proj1img" accept="image/*" /> -->

<!-- To this: -->
<input type="file" id="proj1img" accept="image/*" />
```

To hardcode a project image instead:

```html
<img
  src="assets/project1.png"
  alt="Project screenshot"
  style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
/>
```

Also update the project name, description, stack tags, and links:

```html
<div class="project-name">Your Project Title</div>
<p class="project-desc">What your project does and what you learned.</p>
<div class="project-stack">
  <span class="stack-tag">MySQL</span>
  <span class="stack-tag">PHP</span>
</div>

<!-- Update these hrefs -->
<a href="https://your-live-demo.com" class="overlay-btn">...</a>
<a href="https://github.com/you/repo" class="overlay-btn">...</a>
```

---

### Certificates

Click each certificate card to upload your certificate image, or hardcode it:

```html
<img
  src="assets/cert-database.jpg"
  alt="Database Certificate"
  style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
/>
```

Update the issuer and year:

```html
<div class="cert-issuer">Cisco Networking Academy · 2024</div>
```

---

### Skill Bars

Adjust percentages by changing the `data-width` value (0–100):

```html
<div class="skill-bar-fill" data-width="90"></div>
```

---

### Colors

All colors are defined as CSS variables at the top of the `<style>` block:

```css
:root {
  --bg: #0a0a0f; /* Page background */
  --surface: #111118; /* Card background */
  --accent: #c8a96e; /* Gold highlight color */
  --accent2: #7b9ea6; /* Teal secondary accent */
  --text: #e8e6df; /* Main text */
  --muted: #7a7870; /* Subdued text */
}
```

---

## 📧 Setting Up the Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) — free, no backend needed.

**Step-by-step:**

1. Go to [emailjs.com](https://www.emailjs.com) and create a free account
2. Click **Add New Service** → connect your Gmail or email → copy the **Service ID**
3. Click **Email Templates** → **Create New Template**
   - Use these variables in the template body:
     ```
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}
     Message: {{message}}
     ```
   - Copy the **Template ID**
4. Go to **Account → API Keys** → copy your **Public Key**
5. Open `index.html` and replace the three placeholders near the bottom:

```javascript
const EJS_SVC = "YOUR_SERVICE_ID"; // ← paste Service ID here
const EJS_TPL = "YOUR_TEMPLATE_ID"; // ← paste Template ID here
const EJS_KEY = "YOUR_PUBLIC_KEY"; // ← paste Public Key here
```

---

## 🔗 Social Links

Update the `href` attributes in the Contact section:

```html
<a href="https://github.com/yourusername" class="social-btn">...</a>
<a href="https://linkedin.com/in/yourusername" class="social-btn">...</a>
<a href="https://facebook.com/yourusername" class="social-btn">...</a>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior                                    |
| ---------- | ------------------------------------------- |
| `> 992px`  | Full two-column hero, desktop nav           |
| `≤ 992px`  | Single column, hamburger menu, photo hidden |
| `≤ 576px`  | Tighter padding, stacked form fields        |

---

## 📄 License

This project is for personal portfolio use. Feel free to adapt it for your own portfolio.

---

<p align="center">Made with ♥ in Davao City · University of Mindanao</p>
