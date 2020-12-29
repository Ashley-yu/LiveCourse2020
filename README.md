# 網頁切版直播班 - 2020秋季

## 第一週 - 1 px 也不差的版型控制術
[設計稿](https://xd.adobe.com/view/0f1c0abb-4063-4ed0-96b1-452f520f878b-5a4f/)

[個人履歷 ](https://ashley-yu.github.io/LiveCourse2020/week01/index.html)
> - 盡量不寫死寬高, 使用 margin 或 padding 推擠
> - 設定共用 class `container: 0 margin;` 左右置中, 且要設定寬度才有效
> - 圖片下方預設留白 2~3px, 可設定`display: block;` 或 `vertical-align: middle;` 消除

## 第二週 - Flexbox 網頁排版術
[設計稿](https://xd.adobe.com/view/3d28af46-ac66-480d-a9a5-4b07454e6f79-687b/)

[個人網站](https://ashley-yu.github.io/LiveCourse2020/week02/index.html)
>- `display: flex;`
>	- **flex-direction** 決定軸線 <br>
> row｜row-reverse｜column｜column-reverse
>	- **justify-content** 主軸對齊 <br>
> flex-start｜center｜flex-end｜space-between｜space-around｜space-evenly
>	- **flex-wrap** 換行屬性 <br>
> nowrap｜wrap
>	- **align-item** 交錯軸對齊 <br>
> flex-start｜center｜flex-end｜stretch｜baseline
> - `background-image: url();`
>	- **background-position** 位置 <br>
> top ｜ bottom ｜ left ｜ right ｜ center
>	- **background-size** 尺寸 <br>
> auto ｜ contain ｜ cover
>	- **background-repeat** 重複 <br>
> repeat(預設值)｜ repeat-x ｜ repeat-y ｜ no-repeat

## 第三週 - 響應式網頁設計
[設計稿](https://xd.adobe.com/view/8b7a73f4-31ab-4b10-a946-00fc87dfd96e-de29/flow)

[RWD 網站](https://ashley-yu.github.io/LiveCourse2020/week03/index.html)
>- CSS 權重 - 先看權重，再看先後
>	- HTML 標籤：1 分
>	- class 選擇器：10 分
>	- ID 選擇器：100 分
>	- inline style：1000 分
>	- !important：10000 分
>- RWD 斷點
>	- PC - 1200px
>	- iPad - 768px
>	- iPad以下 - 767px
>	- iPhone 6 Plus - 414px (視專案族群)
>	- iPhone 6 - 375px (視專案族群)
>	- iPhone 5、SE - 320px
>- CSS media Queries 語法
>	- `
  @media(max-width: 992px){
    ...
  }
  `
>	- `
  @media(m-width: 767px){
    ...
  }
  `
  
## 第四週 - 多頁式網頁設計
[設計稿](https://xd.adobe.com/view/8b7a73f4-31ab-4b10-a946-00fc87dfd96e-de29/flow)

[眼鏡形象網站](https://ashley-yu.github.io/LiveCourse2020/week04/dist/index.html)
>- [Layout](https://cacoo.com/diagrams/fWdDuMY0WrfI0im7/CD531)
>- EJS 樣板語言
>- Gulp - 支援 HTML、ejs、JavaScript、Images、SCSS 監聽並自動重新刷新
>	- App # 原始碼
>	  - assets # 靜態資源放置處
>	    - images # 圖片放置處
>   	- js # JavaScript 放置處
>	    - style # 樣式放置處
>	  - index.html # 首頁 HTML
>	  - layout.ejs # Layout ejs
>	- gulpfile.js # Gulp 原始碼
>	  - envOptions.js # Gulp 路徑變數
>	  - index.js # Gulp 核心原始碼
>- SCSS 寫法, import 拆分規劃
>	- _variables.scss - 變數
>	- _reset.scss - css reset
>	- _base.scss - 全站
>	- _utilities.scss - 顏色、間距、 flex 通用

## 第五週 - 後台表單設計
[設計稿](https://xd.adobe.com/view/bd869667-ead5-4620-4329-ee0709cfef9e-cbb7/grid)

[後台網站](https://ashley-yu.github.io/LiveCourse2020/week05/dist/assignment.html)
>- Bootstrap
>	- 使用 normalize，不需再加入 Meyerweb 的 CSS Reset
>	- [Bootstrap SCSS 結構](https://github.com/twbs/bootstrap/tree/main/scss)
>	- [Bootstrap 文件](https://bootstrap.hexschool.com/docs/4.2/getting-started/introduction/)
>	- 響應式圖片 [img-fluid](https://bootstrap.hexschool.com/docs/4.2/content/images/)
>- Material Icon
>	- `<link href="<https://fonts.googleapis.com/icon?family=Material+Icons>" rel="stylesheet">`
>	- `<span class="material-icons">
      accessibility
    </span>
    `
>	- `<i class="material-icons">
      accessibility
    </i>
    `

## 第六週 - 格線系統
[設計稿](https://xd.adobe.com/view/dc5ebe5c-3e56-4981-a010-158b5ded0e72-890d/grid/)

[後台網站](https://ashley-yu.github.io/LiveCourse2020/week06/dist/index.html)
>- Bootstrap 4 格線系統
>	- .container、.row、.col 1~12
>- 整合 Bootstrap 4 SCSS 與自己的 SCSS
>	- 步驟一：下載 GitHub 原始檔，抓取最新版
>	- 步驟二：拉出 SCSS 使用 (可以只拉出自己想要區塊)
>	- 步驟三：整合到自己的 SCSS (修改變數)
>- 元件化
>	- 將網頁中相同的元素或介面獨立出來並反覆使用來減少開發維護的時間與重工，稱為元件化
>	- 在不同的頁面只要引入此元件就可以使用
>	- 先找出共同元素 → 圖片、標題、內容、按鈕
>	- 要有規律命名、可通用
>- OOCSS 設計模式 [參考](https://medium.com/@alice0050722/bootstrap-%E8%A8%AD%E8%A8%88%E6%A8%A1%E5%BC%8F-oocss-ba27173f578b)
>	- 容器和內容分離
>	- 樣式和結構分離
