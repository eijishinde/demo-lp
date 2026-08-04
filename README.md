# sample-lp-template｜AI施策型LP制作セミナー用テンプレート

採用LP(イラスト系トーン)の完成状態から始めるワークショップ用テンプレート。
受講者はこのリポジトリを起点に、Codexへの指示だけで自分の題材に作り替えていく。

## 構成

```
├── index.html          完成状態のLP(7セクション・モジュール構造)
├── css/style.css       デザイントークン集約(プリセット差し替え式)
├── js/script.js        ハンバーガーメニューのみ(依存なし)
├── AGENTS.md           Codexの作業ルール(最重要)
├── docs/
│   ├── lp-brief.md     LP設計書(穴埋め)
│   ├── design-spec.md  デザイン仕様の現在値
│   └── asset-list.md   使用可能素材の一覧
├── presets/            デザインプリセット5種+適用手順
└── assets/
    ├── icons/          Lucideアイコン37種(ISC)
    ├── illustrations/  フラット系イラスト6点(オリジナル)
    └── photos/         受講者の実題材素材を配置(現在は空)
```

## セクション構成

hero / problem / reason / people / flow / faq / cta
(各 `<section data-module="...">` で独立。追加・削除・入替はセクション単位)

## Cloudflare Pages 設定(講師用)

- Production branch: main
- Framework preset: なし / Build command: なし
- Build output directory: /(ルート)

## 注意

- 記載の社名・数値はすべて架空(株式会社サンプル製作所)
- 申込フォームはダミー(本番公開時に設置=代理店・制作会社の支援領域)
