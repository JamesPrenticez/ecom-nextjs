# Ecom Template
(Next Amazona)[https://www.youtube.com/watch?v=3kYkEVIZNZY]
(Lacoste)[https://global.lacoste.com/en/lacoste/men/clothing/shirts/?page=2]

## Packages
- Material UI
  - (Typography)[]
  - (Button)[]
  - (App Bar)[https://mui.com/material-ui/react-app-bar/]
  - (Toolbar)[https://mui.com/material-ui/api/toolbar/]
  - (Container)[https://mui.com/material-ui/react-container/]
  - (Grid)[https://mui.com/material-ui/react-grid/]
  - (Card)[https://mui.com/material-ui/react-card/#main-content]
  - (CardActionArea)[https://mui.com/material-ui/api/card-action-area/#main-content]
  - (CardMedia)[https://mui.com/material-ui/api/card-media/#main-content]
  - (CardContent)[]
  - (CardActions)[]
  - (TableContainer)[]
  - (Table)[]
  - (TableHead)[]
  - (TableRow)[]
  - (TableCell)[]
  - (TableBody)[]

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


[o] Maybe upgrade to axios VS fetch?
[o] Change the way you are passing data to dropdown?
[o] Use next Image in dropdown flags-?
[x] Fix cartItems: state.cart.cart.cartItems in "cartButton"
[o] handleAddToCart show a modal with "continue shopping or checkout now"
[x] Need to handle 0 in stock?
[o] componitize quantity incrementor for product and cart pages
[o] style Cart is empty. Go Shopping! [https://www.google.com/search?q=empty+cart+page+design&sxsrf=APq-WBsCynwegJZuZckBm2NT_9_bxGBcOg:1649841902338&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi42JiE3JD3AhUlRWwGHfIZCd4Q_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1]
[o] Add tax for each country

// need to fix drop down to work with  color

// spend some time on getting form validation really robust