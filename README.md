# My React Portfolio

Next.jsで構築された、モダンで美しいポートフォリオウェブサイトです。ブログ機能、お問い合わせフォーム、スキル紹介など、個人のポートフォリオに必要な機能を備えています。

## 📋 目次

- [特徴](#特徴)
- [技術スタック](#技術スタック)
- [必要要件](#必要要件)
- [セットアップ](#セットアップ)
- [環境変数の設定](#環境変数の設定)
- [開発](#開発)
- [ビルド](#ビルド)
- [プロジェクト構造](#プロジェクト構造)
- [主要コンポーネント](#主要コンポーネント)

## ✨ 特徴

- 🎨 モダンでレスポンシブなデザイン
- 📝 microCMSを使用したブログ管理システム
- 📧 EmailJSによるお問い合わせフォーム
- 🤖 reCAPTCHAによるスパム対策
- ⚡ Next.js 15のApp Routerを使用した高速なページ遷移
- 🎯 SEO最適化
- 📱 完全レスポンシブ対応

## 🛠 技術スタック

- **フレームワーク**: Next.js 15.2.4
- **UIライブラリ**: React 19
- **スタイリング**: CSS Modules, SASS
- **CMS**: microCMS
- **メール送信**: EmailJS
- **セキュリティ**: Google reCAPTCHA
- **リンター**: ESLint

## 📦 必要要件

- Node.js 18.17以上
- npm または yarn

## 🚀 セットアップ

1. リポジトリをクローン

```bash
git clone <your-repository-url>
cd myreactPortfolio
```

2. 依存関係をインストール

```bash
npm install
# または
yarn install
```

3. 環境変数を設定（次のセクションを参照）

## 🔑 環境変数の設定

プロジェクトのルートディレクトリに `.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
# microCMS API Key
NEXT_PUBLIC_OW_API_KEY=your_microcms_api_key

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

### 各サービスの設定方法

#### microCMS
1. [microCMS](https://microcms.io/)でアカウントを作成
2. サービスドメイン `gf50pfvyig` を設定（または `libs/client.js` で変更）
3. APIキーを取得して環境変数に設定

#### EmailJS
1. [EmailJS](https://www.emailjs.com/)でアカウントを作成
2. メールサービスを設定
3. テンプレートを作成
4. 各IDを環境変数に設定

#### Google reCAPTCHA
1. [Google reCAPTCHA](https://www.google.com/recaptcha/)でサイトを登録
2. サイトキーを取得して環境変数に設定

## 💻 開発

開発サーバーを起動：

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### Turbopack（実験的機能）

このプロジェクトはNext.js 15のTurbopackを使用しています。従来のwebpackよりも高速にビルドできます。

## 🏗 ビルド

プロダクション用にビルド：

```bash
npm run build
npm start
# または
yarn build
yarn start
```

## 📁 プロジェクト構造

```
myreactPortfolio/
├── src/
│   ├── component/          # Reactコンポーネント
│   │   ├── About/         # 自己紹介セクション
│   │   ├── Blog/          # ブログ一覧とカード
│   │   ├── Contact/       # お問い合わせフォーム
│   │   ├── Footer/        # フッター
│   │   ├── Header/        # ヘッダーとナビゲーション
│   │   ├── Hero/          # ヒーローセクション
│   │   ├── Journey/       # 経歴・タイムライン
│   │   └── Myskill/       # スキル紹介
│   ├── pages/             # Next.jsページ
│   │   ├── _app.js        # アプリケーションのエントリーポイント
│   │   ├── _document.js   # HTMLドキュメント設定
│   │   ├── index.js       # トップページ
│   │   ├── blogs/         # ブログ詳細ページ
│   │   └── email/         # メール送信ページ
│   └── styles/            # グローバルスタイル
├── libs/                  # ライブラリ設定
│   └── client.js          # microCMSクライアント
├── public/                # 静的ファイル
└── package.json           # プロジェクト設定
```

## 🧩 主要コンポーネント

### Hero
トップページのメインビジュアルとイントロダクション

### About
自己紹介と興味・趣味の紹介
- Love.js: 好きなものを表示

### My Skill
保有スキルとテクノロジースタックの表示
- skillData.js: スキルデータの管理

### Journey
経歴やキャリアのタイムライン表示
- journeysData.js: 経歴データの管理
- journeyTimelineContent.js: タイムラインコンテンツ

### Blog
microCMSと連携したブログシステム
- blogList.js: ブログ一覧
- blogCard.js: ブログカード
- [id].js: 個別ブログ記事ページ

### Contact
EmailJSとreCAPTCHAを使用したお問い合わせフォーム

## 📝 カスタマイズ

### スキル情報の編集
`src/component/Myskill/skillData.js` でスキル情報を編集できます。

### 経歴情報の編集
`src/component/Journey/journeysData.js` で経歴情報を編集できます。

### スタイルの変更
各コンポーネントには対応する `.module.css` ファイルがあり、個別にスタイルをカスタマイズできます。

グローバルスタイルは `src/styles/globals.css` で設定されています。

## 🔧 リント

コードの品質チェック：

```bash
npm run lint
# または
yarn lint
```

## 📄 ライセンス

このプロジェクトはプライベートプロジェクトです。

## 👤 作者

K. Kasubata

---

このREADMEについて質問や改善提案がある場合は、お気軽にお問い合わせください。