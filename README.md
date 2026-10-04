# Gaurav Kumar — Data Analyst Portfolio

A responsive, GitHub Pages-ready portfolio built with **HTML, CSS and JavaScript**.

## Folder structure

```text
Gaurav-Data-Analyst-Portfolio/
├── index.html
├── static/
│   ├── style.css
│   ├── script.js
│   ├── gaurav-profile.png
│   └── certificates/
│       ├── flipkart-deo.pdf
│       ├── maincrafts-internship.pdf
│       ├── microsoft-data-analyst.pdf
│       └── microsoft-power-bi.pdf
└── README.md
```

## Run locally

Just double-click `index.html`, or open the folder in VS Code and use Live Server.

## Publish on GitHub Pages

1. Create a GitHub repository, for example:
   `gaurav-data-analyst-portfolio`
2. Upload **everything inside this folder**.
3. Make sure `index.html` is in the **repository root**.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
6. Click **Save**.
7. GitHub will generate your live portfolio URL.

Your certificates and profile image use relative paths, so they work correctly on GitHub Pages.

## Important

GitHub Pages is a static hosting service, so the original Flask backend is not required. The Contact section uses email/LinkedIn links instead of a server-side form.

## Customize

- Portfolio content: `index.html`
- Design: `static/style.css`
- Animations/menu: `static/script.js`
- Certificates: `static/certificates/`
- Profile photo: `static/gaurav-profile.png`
