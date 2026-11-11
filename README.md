# Probabil-Yatzy

A single-page dice game with probability hints, played in the browser.

Play it on GitHub Pages: see the repository's Pages link.

## High scores

Top 10 scores are saved in the browser's localStorage (key `probabil-yatzy.highscores.v1`), so they stay on the device where they were played.

## Styles

Tailwind is prebuilt into `tailwind.css`. After changing classes in `index.html`, rebuild:

```bash
npx -y tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.input.css -o tailwind.css --minify
```
