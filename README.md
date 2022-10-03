# Next.js-Learning-By-Doing

![Next](/images/next.jpeg)

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
<Image 
      className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
```
```js      
module.exports = {
  images: {
    domains: ["logos.flamingtext.com", "image.tmdb.org", "spng.pngfind.com", "banner2.cleanpng.com", "links.papareact.com"],
  },
};
```

- After the Import we started by making a Header and HeaderItem Component. Inside our Header component we will use a title and icon props. For the Icons we will use heroicons.
```js  
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title='HOME' Icon={HomeIcon} />
          <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
          <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
          <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
          <HeaderItem title='SEARCH' Icon={SearchIcon} />
          <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
```
```js  
function HeaderItem({title, Icon}) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
        <Icon className='h-8 mb-1 group-hover:animate-bounce' />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}
```
-----------------------------------------------------------------------------------------------------------------
### Result: for the Header
![Header](/images//header.JPG)