# Ecom Template
(Next Amazona)[https://www.youtube.com/watch?v=3kYkEVIZNZY]
(Lacoste)[https://global.lacoste.com/en/lacoste/men/clothing/shirts/?page=2]

## Packages
- Tailwind

- redux
- react-redux
- redux-devtools-extension
- redux-persist - for localStorage

- (Currency API - Fixer)[https://fixer.io/]
- (Flag Icons)[https://flagicons.lipis.dev/]

- Google Maps API
- @googlemaps/react-wrapper https://www.npmjs.com/package/@googlemaps/react-wrapper
- @googlemaps/markerwithlabel https://www.npmjs.com/package/@googlemaps/markerwithlabel
- How To Google Maps (Part 1)[https://www.youtube.com/watch?v=C6VxJoR3754&t]
- How To Google Maps (Part 2)[https://www.youtube.com/watch?v=pWQeUPog2hU]
- two-character, ISO 3166-1 Alpha-2 compatible country code [https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2]

- Sqlite3 (3 high severity vulnerabilities... this is okay as not used in production
- Postgres for production
- Prisma
  - ``` npx prisma generate ``` 
  - ``` npx prisma db push ``` This every time you update schema
  - ``` npx prisma studio ``` Then you can do this
  - Migrations/Seed (here)[https://www.prisma.io/docs/guides/database/seed-database]
  - ``` npx prisma migrate dev --name development ``` You will need to delete and re-run this is you change the schema
  - ``` npx prisma migrate reset ``` Delete migrations folder and dev.db and this to reset the entire DB
  - ``` node prisma/seeds/clean.js ```
  - ``` npx prisma db seed ```

### STRIPE
(Tutorial)[https://www.youtube.com/watch?v=4mOkFXyxfsU&t=9505s]

### POLISH
(react-hot-toast)[https://github.com/timolins/react-hot-toast]
canvas-confetti


[o] Maybe upgrade to axios VS fetch?
[o] Use next Image in dropdown flags-?
[o] handleAddToCart show a modal with "continue shopping or checkout now"
[o] style Cart is empty. Go Shopping! [https://www.google.com/search?q=empty+cart+page+design&sxsrf=APq-WBsCynwegJZuZckBm2NT_9_bxGBcOg:1649841902338&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi42JiE3JD3AhUlRWwGHfIZCd4Q_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1]
[o] Add tax for each country
[o] spend some time on getting form validation really robust
[o] need to extend next auth to include a firstName and lastName PapaReact will have the answers - we can also improve on how we are handling JWT https://github.com/JamesPrenticez/spotify_clone/blob/master/pages/api/auth/%5B...nextauth%5D.js