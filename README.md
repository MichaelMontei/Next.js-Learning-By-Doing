# Next.js-Learning-By-Doing

![Next](/images/next.jpeg)

### Tutorial Hulu Website
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

### STEP 1: Making of the Header.

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

### RESULT: for the Header
![Header](/images//header.JPG)

-----------------------------------------------------------------------------------------------------------------
### STEP 2: Making of the Nav

- For the Navbar we are going to make use of an API to fetch all the Title (genres) and we will store our API_KEY inside our ENV file.
- First we make a new folder Utils -> Here we gonna add the requests to our API for the title (genres). I will only use a few in the example below to get the idea. 
```js 
const API_KEY = process.env.API_KEY;
    export default {
        fetchTrending: {
            title: 'Trending',
            url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
        },
        fetchTopRated: {
            title: 'Top Rated',
            url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
        },
        fetchActionMovies: {
            title: 'Action',
            url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
        },
        fetchComedyMovies: {
            title: 'Comedy',
            url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
```
- Now that we can actually fetch the data (genres) we can now show them in our Nav.js component by useing a useRouter. We will also use an OnClick function to change the genre. When we click on Top Rated we get localhost:3000/?genre=fetchTopRated
```js 
function Nav() {
    const router = useRouter();


    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <h2 key={key} 
                    onClick={() => router.push(`/?genre=${key}`) }
                    className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>{title}</h2>
                    ))}
        </div>
```

### RESULT: For the Header and NAVBAR
![Header](/images//nav.JPG)

-----------------------------------------------------------------------------------------------------------------

