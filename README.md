# SAMPLE INC. 採用サイト(デモ)

参考デザインを再現した採用サイトのデモ。文言はすべてダミー。

## 構成
```
├── index.html
├── css/style.css      デザイントークンは :root に集約
├── js/script.js       ハンバーガーメニューのみ(依存なし)
└── assets/
    ├── icons/         Lucide Icons(ISC・商用可)/ ブランドグリーンに再配色済み
    └── img/           写真プレースホルダー(SVG)※差し替え前提
```

## 写真の差し替え
`assets/img/hero.svg` `assets/img/people.svg` は写真が入る位置のプレースホルダー。
同名で jpg/webp を置き、index.html の該当 img の src を差し替えれば実写になる。

- hero: 横長・被写体は中央〜右寄りが望ましい(左は斜めにカットされる)
- people: 横長・人物が並ぶ構図

## フォント方針

Webフォントは使用せず、システムフォント優先のスタックを採用(日本のコーポレートサイト標準)。

```
Mac  → Hiragino Sans(ヒラギノ角ゴ)
Win  → Yu Gothic Medium(游ゴシック)
その他 → Noto Sans JP / Noto Sans CJK JP
```

- 読み込み待ちがなく表示が速い / 環境ごとに最も自然な字面になる
- 和文見出しは `letter-spacing: .2em` + `font-feature-settings:"palt" 0`(ベタ組み)で字間を効かせる
- 本文は `"palt" 1`(詰め組み)で読みやすさを優先
- 欧文ラベル(BUSINESS 等)は `--font-en` で Helvetica/Arial 系を指定

## Cloudflare Pages 設定
Production branch: main / Framework preset: なし / Build command: なし / Build output directory: /

## 注意
社名・文言はすべて架空のサンプル。
