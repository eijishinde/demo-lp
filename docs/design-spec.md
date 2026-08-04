# design-spec.md｜デザイン仕様書(現在の適用値)

Codexはデザインに関する判断をすべてこのファイルに従って行う。
**プリセット変更時は presets/ 内のファイルの内容でこのファイルを上書きする。**

## 現在のプリセット: corporate(コーポレート/信頼感)

## カラー

| 用途 | 変数 | 値 |
|---|---|---|
| アクセント | --color-accent | #2563EB |
| アクセント濃 | --color-accent-dark | #1D4ED8 |
| アクセント淡 | --color-accent-soft | #E8EDF6 |
| テキスト | --color-text | #1F2937 |
| テキスト補助 | --color-text-sub | #5B6472 |
| 背景 | --color-bg | #FFFFFF |
| 背景サブ | --color-bg-sub | #F7F8FA |
| 罫線 | --color-line | #E3E6EB |

## タイポグラフィ

- フォント: "Noto Sans JP"(Google Fonts / weights: 400, 500, 700, 900)
- 見出しウェイト: 900
- 本文: 1rem / line-height 1.8
- h1: clamp(1.875rem, 5vw + .75rem, 3.25rem)
- セクション見出し: clamp(1.5rem, 3vw + .5rem, 2.25rem)

## レイアウト

- コンテンツ最大幅: 1080px
- 左右padding: モバイル20px / PC40px
- セクション上下余白: モバイル64px / PC96px
- 余白は8pxの倍数のみ使用
- ブレイクポイント: 768px / 1024px

## 形状・装飾

- 角丸: カード12px / ボタン999px(ピル型)
- 影: 0 8px 24px rgba(31,41,55,.08) のみ
- アニメーション: ボタンhoverの色変化+2px浮き上がりのみ。それ以外は追加しない

## ビジュアル方針

- イラスト系(assets/illustrations/)で統一。写真とイラストを同一セクションに混在させない
- イラストのアクセント色は --color-accent に揃える

## 変更禁止(このLPの決定事項)

- CTAボタンは常に --color-accent 塗りつぶし+白文字
- ファーストビューに h1・CTA・イラストの3要素を必ず置く
