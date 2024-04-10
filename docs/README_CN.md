
# 仿照《赌博默示录》的 E-Card小游戏

**中文文档** | [英文文档](../README.md) | [日文文档](./README_JP.md) | [韩文文档](./README_KR.md)

## 开发工具

| 工具 | 说明    | 官网 |
| --- |-------| --- |
| icon | 图标    | [https://icones.js.org/collection/all](https://icones.js.org/collection/all) |
| vueuse | 工具函数  | [https://vueuse.org/functions.html](https://vueuse.org/functions.html) |
| unocss | 原子化样式 | [https://unocss.dev/interactive/](https://unocss.dev/interactive/) |
| grid | 网格布局  | [https://cssgrid-generator.netlify.app/](https://cssgrid-generator.netlify.app/) |

## 待办列表

- [x] 布局和基础功能按钮开发
- [x] 手牌区域组件开发
- [x] 检查区域组件开发
- [x] 对局信息组件开发
- [x] 对局开始组件，开始随机从国王和奴隶中随机取 `1` 个作为玩家的开始角色，之后角色采用轮换制，共 `21` 局
- [x] 弃牌区域组件开发，无牌虚线+文字显示，有牌按照 `0° - 30°` 随机角度旋转堆叠显示
- [x] 手牌选中卡牌后， 显示 `check` 按钮
- [x] 点击 check 按钮后，卡牌中删除该卡牌，检查区域增加该卡牌
- [x] 卡牌实现 `3D` 效果，`check` 后翻转在检查区域显示，过 `2` 秒后检查区域卡牌翻转至正面比对，比对后移至弃牌区域
- [ ] 卡牌从手牌到检查区域，从检查区域到弃牌区域跨组件动画效果
- [x] 如果国王牌或者奴隶牌打出，则比赛结束
- [x] 进行对局信息结算，进行下一局游戏
- [ ] 玩家玩过 `5` 局之后，电脑会根据前 `5` 局的数据，和之后每 `1` 局的数据，对玩家进行出牌分析，来决定自己每次出牌的策略
- [x] 游戏结束，显示对局信息，并可重新开始游戏
- [x] 菜单增加游戏规则和制作人名单按钮，并增加相对应内容
- [x] 支持多语言
- [ ] `web` 端适配
- [ ] 添加合适的背景音乐和出牌音乐
- [ ] 可以选择游戏难度，默认为中等
- [ ] 优化动画

## 游戏预览

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
