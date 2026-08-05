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

**Noto Sans JP(Google Fonts)を全環境で使用。** 閲覧環境によって字面や折り返し位置が変わるのを防ぐため、
システムフォント方式ではなくWebフォントを採用している。

```
第一候補   Noto Sans JP(Webフォント / wght 300・400・500・700)
フォールバック Hiragino Sans → Yu Gothic Medium → Noto Sans CJK JP → Meiryo
```

- `display=swap` により読み込み中も文字が消えない(白抜けなし)
- `preconnect` で接続を先行させ、切り替わりの体感を最小化
- フォールバックは読み込み失敗時の保険。削除しないこと
- 和文見出しは `letter-spacing: .2em` + `font-feature-settings:"palt" 0`(ベタ組み)で字間を効かせる
- 本文は `"palt" 1`(詰め組み)で読みやすさを優先
- 欧文ラベル(BUSINESS 等)は `--font-en` で Helvetica/Arial 系を指定

## Cloudflare Pages 設定
Production branch: main / Framework preset: なし / Build command: なし / Build output directory: /

## 注意
社名・文言はすべて架空のサンプル。
