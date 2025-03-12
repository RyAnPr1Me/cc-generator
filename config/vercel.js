{
  "version": 2,
  "builds": [
    { "src": "api/*.js", "use": "@vercel/node" },
    { "src": "pages/*.html", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1.js" },
    { "src": "/leaderboard", "dest": "/pages/leaderboard.html" },
    { "src": "/faq", "dest": "/pages/faq.html" },
    { "src": "/(.*)", "dest": "/pages/index.html" }
  ]
}
