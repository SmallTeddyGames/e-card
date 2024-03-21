
# An E-Card mini-game imitating "Gambling Apocalypse"

[Chinese Doc](./docs/README_CN.md) | **English Doc** | [Japanese Doc](./docs/README_JP.md) | [Korean Doc](./docs/README_KR.md)

## develop tools

| Tools  | Instructions    | Official website |
|--------|-----------------| - |
| icon   | icon            | [https://icones.js.org/collection/all](https://icones.js.org/collection/all) |
| vueuse | tools function  | [https://vueuse.org/functions.html](https://vueuse.org/functions.html) |
| unocss | atomization css | [https://unocss.dev/interactive/](https://unocss.dev/interactive/) |
| grid   | grid layout     | [https://cssgrid-generator.netlify.app/](https://cssgrid-generator.netlify.app/) |

## todo list

- [x] Layout and basic function button development
- [x] Hand card area component development
- [x] Check area component development
- [x] Game information component development
- [x] Game start component, randomly select `1` from King and Slave to start the player's role, then roles rotate, with a total of `21` rounds
- [x] Discard area component development, with dashed lines and text display for no cards, and cards are stacked and displayed at random angles from `0° - 30°` when there are cards
- [x] After selecting a card from the hand, the `check` button is displayed
- [x] After clicking the `check` button, the card is removed from the hand and added to the check area
- [x] Cards implement `3D` effects, flip after `check` to display in the check area, flip to the front for comparison after `2` seconds, and then move to the discard area after comparison
- [ ] Animation effects for cards moving from the hand area to the check area, and from the check area to the discard area across components
- [x] If the King card or Slave card is played, the game ends
- [x] Game information is settled, and the next round of the game begins
- [ ] After the player has played `5` rounds, the computer will analyze the player's card-playing strategy based on the data from the previous `5` rounds and each subsequent round to decide its own card-playing strategy
- [x] Game ends, display game information, and allow for a new game to start
- [x] Menu adds a game rules and credits button, with corresponding content
- [x] Support for multiple languages
- [ ] `web` end adaptation
- [ ] Add appropriate background music and playing music
- [ ] You can choose the game difficulty, the default is medium

## game preview

![menu](/gameImg/menu.png)

![explain](/gameImg/explain.png)

![role](/gameImg/role.png)

![gameInfo](/gameImg/gameinfo.png)

![choose](/gameImg/choose.png)

![changeBackGround](/gameImg/changeBackground.png)

![drop](/gameImg/drop.png)

![final](/gameImg/final.png)

![win](/gameImg/win.png)

![lose](/gameImg/lose.png)

![producer](/gameImg/producer.png)
