# Verloren
## Premise
This is a game engine built around the HTML5 canvas, intended for production of 2.5D sprite-based games. This project should contain enough content to demonstrate implemented features.

## Graphics
Everything is upscaled from a 400x400 canvas to mimic the 512x448 resolution of the SNES. Sprite sheets are a single row of square sprites with no padding.

## Development
For local development, make sure SETTINGS.SETTINGS.devUrl is accurate. Run `autobuild.py` (making sure you have watchdog installed) to autobuild whenever you create or modify files in the project folder. In either case, you'll create `walker.build.html`, which you can open in a browser to test the game.

## Recommended tools
Music: https://www.beepbox.co/
Art: https://libresprite.github.io/online/

## Deployment
0. Ensure that SETTINGS.devMode is true and that SETTINGS.prodUrl is correct for your deployment
1. Run build.py
2. Deploy `/assets` (only the png files are used currently) into an `/assets` , then `walker.build.html` beside it
3. Serve `walker.build.html` as the game page

### Feature todo list
- Graphics for equipped gear
- State machines for NPC agents
- Traverse overworld
- Dialogue trees
- Trade dialogue
- Cinematic/cutscene/slideshow scripting
- Settings screen
- Input remapping / controller support
- Mining(Destructible rocks)
- Jukebox with playlists(combat, peaceful)
- Asset import tool (converting images to text)
- Spell system
- Potions and powerups
- Level-up screen
- "Custom" status effects
- Seasons cycle
- Player building/terraforming
- Farming / plant life cycles
- Crafting stations
- Local multiplayer coop
- Sleep / Exhaustion
- Icons for active status effects
- Book item that displays contents when used

#### Refactor/fix todo list
- Render Inventory, Paperdoll, Statusbar, and Hotbar programatically.
- Inventory slot component
- Combine SpriteRenderer and Animator
- Change sprite sheet import to infer size and apply labels
- Standardize/consolidate constants
- Consolidate UI components/controls
- Clean up unused files and variables
- Fix interact key/right click not working