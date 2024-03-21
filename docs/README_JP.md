
# 「賭博黙示録」を模したEカードミニゲーム

[中国語文書](./README_CN.md) |  [英語文書](../README.md) | **日本語文書** | [韓語文書](./README_KR.md)

## ツールを開発する

| ツール | 説明する      | 公式ウェブサイト |
| --- |-----------| --- |
| icon | アイコン      | [https://icones.js.org/collection/all](https://icones.js.org/collection/all) |
| vueuse | 効用関数      | [https://vueuse.org/functions.html](https://vueuse.org/functions.html) |
| unocss | 霧化スタイル    | [https://unocss.dev/interactive/](https://unocss.dev/interactive/) |
| grid | グリッドレイアウト | [https://cssgrid-generator.netlify.app/](https://cssgrid-generator.netlify.app/) |

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
- [x] 複数の言語をサポート
- [ ] `Web`端の適応
- [ ] 適切なBGMと再生音楽を追加する
- [ ] ゲームの難易度を選択できます。デフォルトは中です

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
