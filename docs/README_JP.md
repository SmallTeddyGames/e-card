
# 「賭博黙示録」を模したEカードミニゲーム

[中国語文書](./README_CN.md) [英語文書](../README.md) **日本語文書** [韓語文書](./README_KR.md)

## ツールを開発する

| ツール | 説明する      | 公式ウェブサイト |
| --- |-----------| --- |
| icon | アイコン      | [https://icones.js.org/collection/all](https://icones.js.org/collection/all) |
| vueuse | 効用関数      | [https://vueuse.org/functions.html](https://vueuse.org/functions.html) |
| unocss | 霧化スタイル    | [https://unocss.dev/interactive/](https://unocss.dev/interactive/) |
| grid | グリッドレイアウト | [https://cssgrid-generator.netlify.app/](https://cssgrid-generator.netlify.app/) |

## プロジェクトツリー

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

## すべてのリスト

- [x] レイアウトと基本機能ボタンの開発
- [x] 手札エリアコンポーネントの開発
- [x] チェックエリアコンポーネントの開発
- [x] 対局情報コンポーネントの開発
- [x] 対局開始コンポーネント、最初の役割は「王」または「奴隷」からランダムに1つ選択し、その後は21局で役割がローテーションします。
- [x] 捨て札エリアコンポーネントの開発、札がない場合は点線とテキストを表示し、札がある場合は0°から30°のランダムな角度で積み重ねて表示します。
- [x] 手札からカードを選択すると、`check`ボタンが表示されます。
- [x] `check`ボタンをクリックすると、カードは手札から削除され、チェックエリアに追加されます。
- [x] カードは`3D`効果を実装し、`check`後にチェックエリアに表示されるように反転します。2秒後にカードは正面に反転して比較し、その後捨て札エリアに移動します。
- [ ] 手札エリアからチェックエリア、チェックエリアから捨て札エリアへのアニメーション効果
- [x] 王のカードまたは奴隷のカードが出たら、ゲームが終了します。
- [x] 対局情報を決算し、次のラウンドを開始します。
- [ ] プレイヤーが5ラウンドプレイした後、コンピュータは前の5ラウンドのデータを基に、その後の各ラウンドのデータを使用してプレイヤーの出札戦略を分析し、自分の出札戦略を決定します。
- [x] ゲームが終了し、対局情報を表示し、新しいゲームを開始できます。
- [x] メニューにはゲームルールと制作者リストボタンが追加され、それに対応する内容があります。
- [ ] `Web`端の適応

## ゲームのプレビュー

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
