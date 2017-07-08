import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './app.jsx'

function renderPage(content) {
  return `<!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
        <div id="app'>${content}</div.
        <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
    </body>
    </html>`
}

export default function render(req, res) {
  const content = renderToString(<App />)
  const page = renderPage(content)
  res.status(200).send(page)
}
