This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Dir
```
📦next-infsalt
 ┣ 📂components
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜Montserrat.tsx
 ┃ ┃ ┗ 📜Prompt.tsx
 ┃ ┣ 📂Layout
 ┃ ┃ ┗ 📜Global.tsx
 ┃ ┣ 📜char.ts
 ┃ ┣ 📜clipframe.tsx
 ┃ ┣ 📜cursor.tsx
 ┃ ┣ 📜footer.tsx
 ┃ ┣ 📜Logo.tsx
 ┃ ┣ 📜nav.tsx
 ┃ ┣ 📜navdynamic.tsx
 ┃ ┣ 📜sidebar.tsx
 ┃ ┗ 📜store.tsx
 ┣ 📂database
 ┃ ┗ 📜speedRun.ts
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📜[...nextauth].tsx
 ┃ ┃ ┗ 📜test.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂speedrun
 ┃ ┃ ┣ 📜abyss.tsx
 ┃ ┃ ┣ 📜domain.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂test
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜scroll.tsx
 ┃ ┣ 📜500.tsx
 ┃ ┣ 📜form.tsx
 ┃ ┣ 📜hello.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┗ 📜_document.tsx
 ┣ 📂public
 ┃ ┣ 📂locales
 ┃ ┃ ┣ 📂en
 ┃ ┃ ┃ ┣ 📜common.json
 ┃ ┃ ┃ ┣ 📜form.json
 ┃ ┃ ┃ ┣ 📜home.json
 ┃ ┃ ┃ ┗ 📜nav.json
 ┃ ┃ ┗ 📂th
 ┃ ┃ ┃ ┣ 📜common.json
 ┃ ┃ ┃ ┣ 📜form.json
 ┃ ┃ ┃ ┣ 📜home.json
 ┃ ┃ ┃ ┗ 📜nav.json
 ┃ ┣ 📂src
 ┃ ┃ ┗ 📂charector
 ┃ ┃ ┃ ┣ 📜001.png
 ┃ ┃ ┃ ┣ 📜002.png
 ┃ ┃ ┃ ┣ 📜003.png
 ┃ ┃ ┃ ┣ 📜004.png
 ┃ ┃ ┃ ┣ 📜005.png
 ┃ ┃ ┃ ┣ 📜006.png
 ┃ ┃ ┃ ┣ 📜007.png
 ┃ ┃ ┃ ┣ 📜008.png
 ┃ ┃ ┃ ┣ 📜009.png
 ┃ ┃ ┃ ┣ 📜010.png
 ┃ ┃ ┃ ┣ 📜011.png
 ┃ ┃ ┃ ┣ 📜012.png
 ┃ ┃ ┃ ┣ 📜013.png
 ┃ ┃ ┃ ┣ 📜014.png
 ┃ ┃ ┃ ┣ 📜015.png
 ┃ ┃ ┃ ┣ 📜016.png
 ┃ ┃ ┃ ┣ 📜017.png
 ┃ ┃ ┃ ┣ 📜018.png
 ┃ ┃ ┃ ┣ 📜019.png
 ┃ ┃ ┃ ┣ 📜020.png
 ┃ ┃ ┃ ┣ 📜021.png
 ┃ ┃ ┃ ┣ 📜022.png
 ┃ ┃ ┃ ┣ 📜023.png
 ┃ ┃ ┃ ┣ 📜024.png
 ┃ ┃ ┃ ┣ 📜025.png
 ┃ ┃ ┃ ┣ 📜026.png
 ┃ ┃ ┃ ┣ 📜027.png
 ┃ ┃ ┃ ┣ 📜028.png
 ┃ ┃ ┃ ┣ 📜029.png
 ┃ ┃ ┃ ┣ 📜030.png
 ┃ ┃ ┃ ┣ 📜031.png
 ┃ ┃ ┃ ┣ 📜032.png
 ┃ ┃ ┃ ┣ 📜033.png
 ┃ ┃ ┃ ┣ 📜034.png
 ┃ ┃ ┃ ┣ 📜035.png
 ┃ ┃ ┃ ┣ 📜036.png
 ┃ ┃ ┃ ┣ 📜037.png
 ┃ ┃ ┃ ┣ 📜038-2.png
 ┃ ┃ ┃ ┣ 📜038.png
 ┃ ┃ ┃ ┣ 📜039.png
 ┃ ┃ ┃ ┣ 📜040.png
 ┃ ┃ ┃ ┣ 📜041.png
 ┃ ┃ ┃ ┣ 📜042.png
 ┃ ┃ ┃ ┣ 📜043.png
 ┃ ┃ ┃ ┣ 📜044.png
 ┃ ┃ ┃ ┣ 📜045.png
 ┃ ┃ ┃ ┣ 📜046.png
 ┃ ┃ ┃ ┣ 📜047.png
 ┃ ┃ ┃ ┗ 📜048.png
 ┃ ┣ 📜AbyssBG.jpg
 ┃ ┣ 📜favicon.jpg
 ┃ ┣ 📜favicon.png
 ┃ ┣ 📜fuck.jpg
 ┃ ┣ 📜LOGO.png
 ┃ ┗ 📜Untitle0.jpg
 ┣ 📂styles
 ┃ ┣ 📜globals.scss
 ┃ ┣ 📜Home.module.scss
 ┃ ┗ 📜nprogress.scss
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜build.cmd
 ┣ 📜dev.cmd
 ┣ 📜gi-leaderboard.code-workspace
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜README.md
 ┣ 📜tailwind.config.js
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
 ```
