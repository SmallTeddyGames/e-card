
# An E-Card mini-game imitating "Gambling Apocalypse"

[Chinese Doc](./docs/README_CN.md) | **English Doc** | [Japanese Doc](./docs/README_JP.md) | [Korean Doc](./docs/README_KR.md)

## develop tools

| Tools  | Instructions    | Official website |
|--------|-----------------| - |
| icon   | icon            | [https://icones.js.org/collection/all](https://icones.js.org/collection/all) |
| vueuse | tools function  | [https://vueuse.org/functions.html](https://vueuse.org/functions.html) |
| unocss | atomization css | [https://unocss.dev/interactive/](https://unocss.dev/interactive/) |
| grid   | grid layout     | [https://cssgrid-generator.netlify.app/](https://cssgrid-generator.netlify.app/) |

## project tree

``` bash
e-card
├─ .git # git
├─ .gitignore # git ignore
├─ README.md # readme
├─ auto-imports.d.ts # auto-import配置
├─ eslint.config.ts # eslint配置
├─ index.html # index
├─ package.json # package配置
├─ pnpm-lock.yaml # package lock配置
├─ public # public
│  └─ vite.svg # icon
├─ src # src
│  ├─ App.vue # main
│  ├─ assets # 资源
│  │  ├─ bg-1.jpg
│  │  ├─ bg-2.jpg
│  │  ├─ bg-3.jpg
│  │  ├─ bg-4.jpg
│  │  ├─ card-bg.jpg
│  │  ├─ citizen.jpg
│  │  ├─ emperor.jpg
│  │  ├─ slave.jpg
│  ├─ main.ts
│  ├─ router # 路由
│  │  └─ index.ts
│  ├─ styles # 样式
│  │  └─ base.css
│  ├─ utils # 工具
│  ├─ ├─ game.util.ts # 游戏工具
│  │  └─ index.ts
│  ├─ views # 页面
│  │  ├─ Component # 组件
│  │  │  ├─ Card.vue # 卡牌组件
│  │  │  ├─ CheckCard.vue # 检查区域组件
│  │  │  ├─ ComputedCard.vue # 电脑手牌组件
│  │  │  ├─ DropCard.vue # 弃牌区域组件
│  │  │  ├─ GameInformation.vue # 游戏信息组件
│  │  │  ├─ GameMenu.vue # 开始信息组件
│  │  │  ├─ MessageInfo.vue # 消息信息组件
│  │  │  ├─ PlayerCard.vue # 玩家手牌组件
│  │  │  └─ ProducerList.vue # 制作人名单组件
│  │  ├─ Game # 游戏
│  │  │  ├─ GameMain.vue # 游戏主页面
│  │  │  └─ Home.vue # home
│  │  ├─ Layout # 布局
│  │  │  ├─ GameContent.vue # 中心
│  │  │  └─ GameNav.vue # 导航
│  │  ├─ NavButton # 导航功能按钮
│  │  │  ├─ ChangeBackImage.vue # 切换背景
│  │  │  ├─ ChangeGameStatus.vue # 切换游戏状态
│  │  │  ├─ ColorSchemeToggle.vue # 切换主题
│  │  │  ├─ FullScreenToggle.vue # 切换全屏
│  │  │  ├─ GameInfoToggle.vue # 切换游戏信息
│  │  │  └─ GitHubButton.vue # 打开github
│  │  ├─ Others # 其他
│  │  │  └─ 404.vue # 404页面
│  │  └─ Type # 类型
│  │  │  ├─ cardType.ts # 卡牌类型
│  │  │  ├─ gameType.ts # 游戏类型
│  │  │  ├─ groupType.ts # 分组类型
│  │  │  ├─ index.ts
│  │  │  ├─ logType.ts # 日志类型
│  │     └─  roleType.ts # 角色类型
│  └─ vite-env.d.ts # 环境变量
├─ tsconfig.json # 基础配置
├─ tsconfig.node.json # 服务端配置
├─ uno.config.ts # unocss配置
└─ vite.config.ts # 开发配置
```

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
