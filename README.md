# Todo List

一個使用 Node.js + Express 打造的待辦清單，此網站提供使用者瀏覽已紀錄的所有事項，並可點擊單筆事項以修改詳情，或刪除等選項。

### 功能列表

---

- 使用者須先進行註冊並登入，才可使用此網站的所有功能
- 此網站支援 Facebook 登入功能
- 在首頁可查看所有紀錄事項
- 可點擊左上角「CREATE」按鈕新增事項
- 點擊事項列表右方的「EDIT」按鈕可進入編輯畫面，並修改該筆事項細節
- 點擊支出列表右方的「DELETE」按鈕可刪除該筆事項
- 點擊右上角「LOGOUT」即可登出

### 環境建置需求

---

- Node.js: v10.15.0
- npm: 6.14.8
- nodemon: 2.0.4
- express: 4.17.1
- express-handlebars: 5.1.0
- body-parser: 1.19.0
- bcryptjs: 2.4.3
- connect-flash: 0.1.1
- dotenv: 8.2.0
- express-session: 1.17.1
- method-override: 3.0.0
- passport: 0.4.1
- passport-facebook: 3.0.0
- passport-local: 1.0.0
- mysql2: 2.2.5
- sequelize: 6.3.5
- sequelize-cli: 6.2.0

### 安裝

---

1. 開啟終端機 (Terminal)，clone 此專案至本機電腦
<p><code>git clone https://github.com/yunhsuanchin/TodoList_sequelize.git</code></p>

2. 進入專案資料夾
<p><code>cd TodoList_sequelize</code></p>

3. 安裝 mySQL 並使用 mySQL workbench 新增資料庫 - todo_sequelize
<p><code>
drop database if exists todo_sequelize;
CREATE DATABASE todo_sequelize;
USE todo_sequelize;
</code></p>

4. 根據`.env.example`新增`.env`檔案並設定環境變數

5. 在終端機輸入`npx sequelize db:migrate`以進行資料庫同步
<p><code>npx sequelize db:migrate</code></p>

6. 在終端機輸入`npx sequelize db:seed:all`，以執行種子資料
<p><code>npx sequelize db:seed:all</code></p>

7. 在終端機輸入`npm run dev`，透過 nodemon 執行 app.js，建立資料庫連線，並啟動 local server 監聽
<p><code>npm run dev</code></p>
