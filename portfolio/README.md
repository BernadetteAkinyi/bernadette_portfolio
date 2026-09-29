# Bernadette Akinyi | Portfolio

A personal portfolio built as an interactive **flipbook**: a pink-and-green "storybook" you can page through, with a regular scrolling layout on smaller screens.

## Features

- **Flipbook layout** on screens 900px and wider: drag a page corner, use the Prev/Next buttons, or jump to a chapter from the Contents page
- **Responsive fallback:** phones and small screens get a clean scrolling version of the same content
- **Chapters:** Projects, Articles, Beyond the Code (hobbies), and Resume
- **Live articles:** posts are fetched from the [Dev.to API](https://developers.forem.com/api) automatically, so new posts appear without touching the code
- **Downloadable CV** and links to LinkedIn, GitHub, and Dev.to
- **One content file:** everything on the site is edited in `src/content.js`

## Tech stack

| Tool | Used for |
|---|---|
| [React](https://react.dev/) | UI components |
| [Vite](https://vite.dev/) | Dev server and build tool |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling and the custom colour theme |
| [react-pageflip](https://www.npmjs.com/package/react-pageflip) | The page-turning effect |
| [Dev.to API](https://developers.forem.com/api) | Loading article listings |

## Getting started

You need [Node.js](https://nodejs.org/) (version 20 or newer) and Git.

```bash
# 1. Clone the repository
git clone https://github.com/BernadetteAkinyi/YOUR-REPO-NAME.git

# 2. The project lives in the "portfolio" folder
cd YOUR-REPO-NAME/portfolio

# 3. Install dependencies
npm install

# 4. Start the dev server (opens at http://localhost:5173)
npm run dev
```

If `npm install` complains about peer dependencies, use `npm install --legacy-peer-deps`.

### Other commands

| Command | What it does |
|---|---|
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally to test it |

## Project structure

```
portfolio/
├── public/                 # Static files served as-is (photo, CV)
├── src/
│   ├── components/
│   │   ├── FlipBook.jsx    # The book (desktop layout)
│   │   ├── Hero.jsx        # Header for the scroll layout
│   │   ├── Section.jsx     # Chapter wrapper for the scroll layout
│   │   ├── ProjectCard.jsx # Project card
│   │   └── Articles.jsx    # Fetches and lists Dev.to posts
│   ├── App.jsx             # Chooses book or scroll layout by screen width
│   ├── ScrollLayout.jsx    # Scrolling layout (small screens)
│   ├── content.js          # All portfolio content lives here
│   ├── index.css           # Tailwind import and colour theme
│   └── main.jsx            # App entry point
└── package.json
```

## Customising

**Content:** edit `src/content.js` to change the name, tagline, links, projects, and hobbies. To add a project, add another object to the `projects` array.

**Photo and CV:** replace `public/photo.jpeg` and `public/resume.pdf`, keeping the same file names (or update the paths in `content.js`). File names are case-sensitive once deployed.

**Colours:** the palette is defined in the `@theme` block of `src/index.css`:

| Name | Hex | Role |
|---|---|---|
| Cream | `#FFF7F2` | Page background |
| Ink (forest green) | `#0F3D2E` | Text and outlines |
| Raspberry | `#C72A6E` | Main accent |
| Bubblegum | `#FF8FBF` | Playful highlights |
| Petal | `#FFD9E8` | Soft card fill |
| Emerald | `#1E8C64` | Second accent |
| Mint | `#CDEFD9` | Soft fill |

## Deployment

The site is a static Vite build, so it deploys easily to Vercel or Netlify.

- **Root directory:** `portfolio` (the project sits inside a subfolder of the repo)
- **Build command:** `npm run build`
- **Output directory:** `dist`

## Featured project

**IRIS** is an adaptive accessibility companion that personalises digital experiences to individual needs. [Code](https://github.com/BernadetteAkinyi/IRIS-landing-page) | [Live demo](https://iris-landing-page-amk6.onrender.com)

## Connect

- [LinkedIn](https://www.linkedin.com/in/bernadette-akinyi-3b2891407/)
- [GitHub](https://github.com/BernadetteAkinyi)
- [Dev.to](https://dev.to/bernadetteakinyi)