# BotMan AI Website

This is the static website for BotMan AI.

## Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm)

## Setup

1.  Clone the repository (if applicable).
2.  Install dependencies:
    ```bash
    npm install
    ```

## Running Locally

1.  Start the local development server:
    ```bash
    npm start
    ```
2.  Open your web browser and navigate to `http://localhost:8080` (or the address provided by `http-server`).

## Structure

*   `public/`: Contains all static assets (HTML, CSS, JS, images).
    *   `index.html`: Main landing page.
    *   `servicios.html`: Services page.
    *   `casos.html`: Use cases/projects page.
    *   `nosotros.html`: About us page.
    *   `precios.html`: Pricing page (specifically for Codacle service).
    *   `blog.html`: Blog page.
    *   `css/`: Stylesheets.
        *   `style.css`: Main CSS file.
    *   `js/`: JavaScript files.
        *   `script.js`: Main JS file (currently basic).
    *   `images/`: Image assets (including `logo.png`).
*   `package.json`: Defines project metadata and dependencies.
*   `README.md`: This file.

## Adding Content

*   **Text:** Edit the relevant `.html` files in the `public/` directory.
*   **Images/Videos:**
    1.  Place image or video files in the `public/images/` or a new `public/videos/` directory.
    2.  Update the `src` attribute in the corresponding `<img>` or `<video>` tags within the HTML files. Remove the placeholder text/divs.
    For example, replace `<div class="media-placeholder">[Imagen/Video sobre Desarrollo IA]</div>` in `servicios.html` with `<img src="images/desarrollo-ia.jpg" alt="Desarrollo IA">` or `<video controls src="videos/desarrollo-ia.mp4"></video>`.
*   **Blog Posts:** Add new `<article>` elements to `public/blog.html` following the placeholder structure, or implement a more dynamic solution later. 