# presets/｜デザインプリセット

受講者が「デザインの方向」を選ぶための差し替えセット。

## 使い方(受講者がCodexに出す指示の例)

「design-specを presets/premium.md の内容に差し替えて、サイト全体に適用してください」

## Codexの適用手順

1. 選ばれたプリセットの内容で `docs/design-spec.md` を上書きする
2. `css/style.css` の `:root` トークンをプリセットの値に更新する
3. `index.html` の Google Fonts 読み込みをプリセット指定フォントに変更する
4. イラストSVG内のアクセント色(旧 --color-accent 値)を新しい値に一括置換する
5. 上記以外のHTML構造・文章・クラス名には触れない
