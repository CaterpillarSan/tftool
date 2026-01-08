# tftool

ReactでハローワールドページのWebアプリケーション

## 必要な環境

- Node.js 20.1.0（asdfで管理）

## セットアップ

```bash
# asdfでNode.jsをインストール（まだの場合）
asdf plugin add nodejs
asdf install nodejs 20.1.0

# 依存関係のインストール
npm install
```

## 開発方法

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173 にアクセスすると、ハローワールドページが表示されます。

### ビルド

```bash
npm run build
```

本番用にビルドされたファイルは `dist` ディレクトリに出力されます。

### プレビュー

```bash
npm run preview
```

ビルドしたアプリケーションをローカルでプレビューできます。

## プロジェクト構成

- `src/App.jsx` - メインコンポーネント（ハローワールド表示）
- `src/main.jsx` - エントリーポイント
- `src/App.css` - アプリケーションスタイル
- `src/index.css` - ベーススタイル
- `index.html` - HTMLテンプレート
- `vite.config.js` - Vite設定ファイル
