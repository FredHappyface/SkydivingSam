# Changelog
All major and minor version changes will be documented in this file. Details of
patch-level version changes can be found in [commit messages](../../commits/master).

## b_03.07 - 07/03/2021
- Fix issue where elements (entities) didn't spawn on the rhs of the screen.
- Bird hitboxes.

## b_02.24_u1 - 24/02/2021
- Bugfix sound on iOS
- Normalize sounds and music with MP3Gain

## b_02.24 - 24/02/2021
- Basic intro

## b_02.23 - 23/02/2021
- Music tweaks
- Added music to menus
- Added animations to pick up (excluding element_x_0)
- Added sounds to pick up
- Add total time played + number of objects to debug screen
- Apply fade-in to each menu -- testing this
- Clean up objects off the screen
- Update hit-boxes

## b_02.22 - 22/02/2021
- Add multiple characters
- Animate characters
- Mobile/ touch prompt with fadeout
- Added music to levels - continues on win/game-over screen
- Bugfixes to high-score

TO-DO
- Add total time played + number of objects to debug screen

## b_02.21 - 21/02/2021
- Complete achievements screen
- Dev option hotkeys
- Add media controls (use `alt + up/down` keys)
- Test fade in on achievements screen
- `TouchLeft` + `TouchRight` optimizations
- Bugfixes to high-score

TO-DO
- Add total time played + number of objects to debug screen
- Mobile/ touch prompt with fadeout

## b_02.19_u1 - 19/02/2021
- Bugfix endless set high-score
- Visual indicator for locked level
- high-score to endless
- Credits screen
- Made progress with achievements screen

TO-DO
- Complete achievements screen
- Add total time played + number of objects to debug screen
- Dev option hotkeys

## b_02.19 - 19/02/2021
- Use `LevelCompleted` flag instead of `HighScores` to lock levels
- Add high-scores to level select
- Fix unlock levels
- Add debug screen (activate/ deactivate with 'k')
- Add score + high-score to game over

TO-DO
- Visual indicator for locked level
- Add high-score to endless
- Add total time played + number of objects to debug screen
- Dev option hotkeys

## b_02.18 - 18/02/2021
- Change button font
- Add all levels
- Add icons to level select
- Option widgets follow theme

## a_02.05 - 05/02/2021
- Add options
- Implement dev options for invincibility, score multiplier, increased health

## a_02.04_u3/4 - 04/02/2021
- Implement level 1
- Fix bird hit boxes
- Refactor

## a_02.04_u1/2 - 04/02/2021
- Implement collision detection
- Implement endless
- Create main menu
