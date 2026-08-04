# demo-lp｜採用ブランディングLP(デモ/テンプレート)

AI施策型LP制作セミナーのデモ兼テンプレート。完成状態から始め、Codexへの指示で自分の題材に作り替える。

## 構成
```
├── index.html          完成状態のLP(12セクション・モジュール構造)
├── css/style.css       デザイントークン集約
├── js/script.js        ハンバーガーメニューのみ(依存なし)
├── AGENTS.md           Codexの作業ルール
├── docs/               lp-brief / design-spec / asset-list
└── assets/             icons(Lucide) / illustrations(オリジナル) / photos
```

## セクション
hero / problem / why / merit / cta-band / strength / plan / flow / download / column / cta / footer
(各 `<section data-module="...">` で独立。追加・削除・入替はセクション単位)

## Cloudflare Pages 設定
- Production branch: main / Framework preset: なし / Build command: なし / Build output directory: /

## 注意
- 社名・数値・実績はすべて架空(株式会社サンプル製作所)
- フォームは未設置(本番公開時に設置=代理店・制作会社の支援領域)
