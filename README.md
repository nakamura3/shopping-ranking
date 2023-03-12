# from 「React 入門」 10章

## 1. プロジェクト作成
- create-react-app
- 追加パッケージ
  - react-redux
  - @reduxjs/toolkit
  - redux-logger
- 初期ソース
  1. src/index.js
    - shoopping スライス作成
    - Redux の store 作成
    - react-redux の Provider 組込み
    - redux-logger 組込み
  2. src/App.js
    - タイトルのみにする
  3. src/App.css
    - App と App-header クラスのみ残す
  4. public/index.html
    - シンプルにする

## 2. ページルーティング
- 追加パッケージ
  - react-router-dom
- 追加ソース
  1. src/Ranking.js
- 修正ソース
  1. src/index.js
    - BrowserRouter 追加
  2. src/App.js
    - Link, Routes, Route 追加
  

