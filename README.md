# Bonnie Bennett · Personal Site

Interactive personal website for **Bonnie Bennett** — Senior Data Analyst / Data Scientist.
Built from scratch with vanilla **HTML · CSS · JavaScript** (zero dependencies) and hosted on **GitHub Pages**.

🔗 **Live:** https://dingbangbang.github.io/

## ✨ Features

- **Particle constellation background** — canvas network that reacts to the cursor
- **Custom animated cursor** + scroll progress bar
- **Typewriter** hero with animated role rotation
- **Animated count-up** statistics
- **Skill explorer** — tabbed categories with animated proficiency bars
- **Canvas radar chart** for core proficiencies (hover to inspect)
- **Filterable project cards** with 3D tilt + spotlight
- **Interactive terminal** — try `help`, `whoami`, `skills`, `experience`, `contact`
- **Scroll-reveal** animations, reduced-motion friendly, fully responsive

## 📁 Structure

```
.
├── index.html          # single-page markup
├── css/style.css       # theme + layout + animations
├── js/main.js          # data + all interactions
├── assets/
│   ├── avatar.svg      # generated avatar
│   ├── favicon.svg     # generated favicon
│   └── Resume.pdf      # downloadable résumé
├── .nojekyll           # bypass Jekyll on GitHub Pages
└── README.md
```

## 🚀 Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## 🛠 Customize

All content lives at the top of `js/main.js` in plain objects:
`ROLES`, `SKILLS`, `RADAR`, `PROJECTS`, `CERTS`, `TICKER` — edit and refresh.

## 📬 Contact

- Email: dingbangchu@gmail.com
- LinkedIn: [in/bonniebennett333](https://www.linkedin.com/in/bonniebennett333/)
- GitHub: [@DingBangBang](https://github.com/DingBangBang)
