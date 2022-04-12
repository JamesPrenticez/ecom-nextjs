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

- Tailwind

- Redux
- Redux-thunk
- Next-redux-wrapper

- (Currency API - Fixer)[https://fixer.io/]
- (Flag Icons)[https://flagicons.lipis.dev/]

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


- Maybe upgrade to axios VS fetch?
- Change the way you are passing data to dropdown?
- Use next Image in dropdown flags?

- Need to handle 0 in stock?