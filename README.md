## develop tools

icon： <a href="https://icones.js.org/collection/all" _blank>https://icones.js.org/collection/all</a>

vueuse： <a href="https://vueuse.org/functions.html" _blank>https://vueuse.org/functions.html</a>

unocss： <a href="https://unocss.dev/interactive/" _blank>https://unocss.dev/interactive/</a>

grid： <a href="https://cssgrid-generator.netlify.app/" _blank>https://cssgrid-generator.netlify.app/</a>


## todo list

- [x] 布局和基础功能按钮开发
- [x] 手牌区域组件开发
- [x] 检查区域组件开发
- [x] 对局信息组件开发
- [ ] 对局开始组件，开始随机从国王和奴隶中随机取 `1` 个作为玩家的开始角色，之后角色采用轮换制，共 `21` 局
- [x] 弃牌区域组件开发，无牌虚线+文字显示，有牌按照 `0° - 30°` 随机角度旋转堆叠显示
- [ ] 手牌选中卡牌后， 显示 `check` 按钮
- [ ] 点击 check 按钮后，卡牌中删除该卡牌，检查区域增加该卡牌
- [ ] 卡牌实现 `3D` 效果，`check` 后翻转在检查区域显示，过 `2` 秒后检查区域卡牌翻转至正面比对，比对后移至弃牌区域
- [ ] 卡牌从手牌到检查区域，从检查区域到弃牌区域跨组件动画效果
- [ ] 如果国王牌或者奴隶牌打出，则比赛结束，进行对局信息结算，进行下一局游戏
- [ ] 玩家玩过 `5` 局之后，电脑会根据前 `5` 局的数据，和之后每 `1` 局的数据，对玩家进行出牌分析，来决定自己每次出牌的策略
