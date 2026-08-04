# design-spec.md｜デザイン仕様書(現在の適用値)

Codexはデザインに関する判断をすべてこのファイルに従って行う。

## プリセット: recruit-teal(採用ブランディング／ティール系)

## カラー
| 用途 | 変数 | 値 |
|---|---|---|
| アクセント | --color-accent | #0F766E |
| アクセント濃 | --color-accent-dark | #0B5C55 |
| アクセント淡 | --color-accent-soft | #E6F3F0 |
| アクセント最濃 | --color-accent-deep | #0B3B36 |
| CTA | --color-cta | #F59E0B |
| CTA濃 | --color-cta-dark | #D98305 |
| テキスト | --color-text | #243B39 |
| テキスト補助 | --color-text-sub | #5C6B69 |
| 背景 | --color-bg | #FFFFFF |
| 背景サブ | --color-bg-sub | #F4F8F7 |
| 罫線 | --color-line | #DDE7E5 |

## タイポグラフィ
- フォント: "Noto Sans JP"(400/500/700/900)
- 見出しウェイト: 900
- 本文: 1rem / line-height 1.9
- h1: clamp(1.75rem, 3.6vw + .55rem, 2.625rem)
- セクション見出し: clamp(1.375rem, 2.6vw + .6rem, 2rem)

## レイアウト
- コンテンツ最大幅: 1100px
- 左右padding: モバイル20px / PC40px
- セクション上下余白: モバイル64px / PC96px
- 余白は8pxの倍数のみ
- ブレークポイント: 768px / 1024px

## 形状・装飾
- 角丸: カード16px / 小カード10px / ボタン999px
- 影: 0 10px 30px rgba(15,118,110,.10) / 小 0 4px 14px rgba(15,118,110,.08)
- グラデーション: hero・plan・ctaのみ(135deg・ティール系)
- アニメーション: ボタンhoverの色変化+2px浮き上がりのみ

## ビジュアル方針
- フラットイラスト(assets/illustrations/)で統一。写真は使わない
- イラストのアクセント色は --color-accent / --color-cta に揃える
- アイコンは assets/icons/ のLucide(ISC)のみ

## 決定事項(変更禁止)
- CTAボタンは常に --color-cta(アンバー)塗り+白文字
- ヘッダーのCTAもアンバー(PC時)
- ファーストビューに eyebrow / h1 / lead / CTA2種 / イラストの5要素を必ず置く
