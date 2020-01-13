# Electron Web Experiment

This repository demonstrates an [Electron](https://electronjs.org) application
that also serves itself as a web page:

* The Electron application displays precompiled static HTML content (e.g. it
  could be an Angular/React/Vue application).
* It exposes an [Express](https://expressjs.com/) API on a port (3000 by
  default).
* This API serves the same HTML content, so that the application can also be
  accessed in a browser.

## Usage

```bash
git clone https://github.com/MediaComem/electron-web-experiment.git
cd electron-web-experiment
npm ci
npm start
```

The application should also be accessible at http://localhost:3000 by default.