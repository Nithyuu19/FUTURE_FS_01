# 🚀 Nithya Reddy — Professional Portfolio

A modern, responsive personal portfolio website built with React.js, Node.js, Express, and MongoDB.

![Portfolio Preview](https://via.placeholder.com/1200x600/080b12/00d4ff?text=Portfolio+Preview)

## ✨ Features

- **7 Sections**: Hero, About, Skills, Projects, Resume, Certifications, Contact
- **Dark / Light Mode** toggle with CSS variables
- **Animated** progress bars, typewriter effect, scroll animations
- **Responsive** — mobile, tablet, desktop
- **Contact Form** with validation + MongoDB storage + Nodemailer
- **SEO Ready** — meta tags, Open Graph, sitemap, robots.txt
- **Performance** — Vite bundler, optimized assets

## 🗂 Folder Structure

```
portfolio/
├── src/
│   ├── assets/
│   │   └── data/
│   │       └── portfolioData.js      # All your personal data here
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Resume/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── Loader/
│   ├── App.jsx
│   ├── App.css                       # Global styles + design tokens
│   └── main.jsx
├── backend/
│   ├── server.js                     # Express API
│   └── package.json
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── resume.pdf                    # Add your actual resume here
├── index.html                        # SEO meta tags
├── vite.config.js
├── package.json
└── .env.example
```

## 🚀 Quick Start

### 1. Clone & Install Frontend

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
```

### 2. Install & Start Backend

```bash
cd backend
npm install
cp ../.env.example .env
# Edit .env with your MongoDB URI and email credentials
npm run dev
```

### 3. Start Frontend

```bash
# In root directory
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) 🎉

## ⚙️ Customization

### Update Your Information

Edit `src/assets/data/portfolioData.js`:

```js
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ...
};
```

### Add Your Resume

Place your `resume.pdf` in the `public/` folder.

### Update Projects

Edit the `projectsData` array in `portfolioData.js`.

## 🌐 Deployment

### Vercel (Frontend)

```bash
npm run build
# Push to GitHub, connect repo in vercel.com
```

### Render / Railway (Backend)

```bash
# Set environment variables in dashboard:
# MONGODB_URI, EMAIL_USER, EMAIL_PASS, CLIENT_URL
```

### MongoDB Atlas

1. Create free cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Get connection string
3. Set `MONGODB_URI` in environment variables

## 📧 Email Setup (Gmail)

1. Enable 2FA on your Gmail account
2. Go to Google Account → Security → App Passwords
3. Generate app password for "Mail"
4. Set `EMAIL_PASS=<app-password>` in `.env`

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, CSS3, Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Email | Nodemailer |
| Deployment | Vercel + Render |
| Fonts | Syne, DM Mono (Google Fonts) |

## 📄 License

MIT — free for personal and commercial use.

---

Built with ♥ by Nithya Reddy
