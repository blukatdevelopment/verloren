# Verloren
## Premise
This is a game engine built around the HTML5 canvas, intended for production of 2.5D sprite-based games. This project should contain enough content to demonstrate implemented features.

## Graphics
Everything is upscaled from a 400x400 canvas to mimic the 512x448 resolution of the SNES. Sprite sheets are a single row of square sprites with no padding.

## Development
For local development, make sure SETTINGS.SETTINGS.devUrl is accurate. Run `autobuild.py` (making sure you have watchdog installed) to autobuild whenever you create or modify files in the project folder. In either case, you'll create `walker.build.html`, which you can open in a browser to test the game.

## Deployment
0. Ensure that SETTINGS.devMode is true and that SETTINGS.prodUrl is correct for your deployment
1. Run build.py
2. Deploy `/assets` (only the png files are used currently) into an `/assets` , then `walker.build.html` beside it
3. Serve `walker.build.html` as the game page