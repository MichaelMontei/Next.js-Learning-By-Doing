# Next.js-Learning-By-Doing

- ![Next](images/next.jpg)

### Installation and preparation Next.js / Tailwind CSS / New feature 'JIT' 
#### Links: 
- https://nextjs.org/docs
- https://tailwindcss.com/docs/guides/nextjs
- https://v2.tailwindcss.com/docs/just-in-time-mode
- https://heroicons.com/

- Installing NEXT.JS => npx create-next app {name}
- installation of TAILWIND: <br> - npm install -D tailwindcss postcss autoprefixer
                            <br> - npx tailwindcss init -p
                            <br> - Inside your Tailwind.config.js file => Purge array  => "./pages/**/*.{js,ts,jsx,tsx}",
                              "./components/**/*.{js,ts,jsx,tsx}"
                            <br> - add mode: "jit",
- We also gonna install Hero-icons: npm install @heroicons/react

-----------------------------------------------------------------------------------------------------------------

### Step 1: Making of the Header and Nav

- First we imported the HULU Image in our header Component by Using an Image (next.js) component. This will only be visible if we import the domains from our image in our next.config.js file.
```js
module.exports = {
  images: {
    domains: ["logos.flamingtext.com", "image.tmdb.org", "spng.pngfind.com", "banner2.cleanpng.com", "links.papareact.com"],
  },
};
```

- After the Import we started by making a Header and HeaderItem Component. 

