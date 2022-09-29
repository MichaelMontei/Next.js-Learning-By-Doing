# Next.js-Learning-By-Doing

### Installation and preparation Next.js / Tailwind CSS / New feature 'JIT' 
- https://nextjs.org/docs
- https://tailwindcss.com/docs/guides/nextjs
- (https://v2.tailwindcss.com/docs/just-in-time-mode)

- Installing NEXT.JS => npx create-next app {name}
- installation of TAILWIND:  - npm install -D tailwindcss postcss autoprefixer
                             - npx tailwindcss init -p
                             - Inside your Tailwind.config.js file => Purge array  => "./pages/**/*.{js,ts,jsx,tsx}",
                               "./components/**/*.{js,ts,jsx,tsx}"
                             - add mode: "jit",
