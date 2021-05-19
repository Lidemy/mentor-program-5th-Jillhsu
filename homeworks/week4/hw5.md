## 請以自己的話解釋 API 是什麼

跟應用程式/機器溝通的介面就是 API，簡單來說就是要用 「對方聽得懂的方式跟對方溝通」，但是機器只聽得懂特定的格式，所以需要閱讀 API 文件並將 reqeust 串成機器讀得懂的格式跟他說。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

| status code | 簡介                       | 詳細說明                                                                               |
|-------------|----------------------------|------------------------------------------------------------------------------------|
| 205         | Reset Content              | Client 端要求重設表單資料，Server 已接受並清除上次上傳的資料                            |
| 406         | Not Acceptable             | 該網頁含有 Client 無法支援的語系、字元集、編碼方式或多媒體串流格式時，Server 以此訊息回應 |
| 505         | HTTP Version Not Supported | Server 不能支援或不想支援 Client 提出的指令版本                                        |

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

以下文件使用 Rest 設計風格

| Resource                     | POST                  | GET                                               | PATCH         | DELETE                                           |                                 |
|------------------------------|-----------------------|---------------------------------------------------|-------------|--------------------------------------------------|---------------------------------|
| /restaurants                 | Create a new restaurant | Retrieve all restaurants                          | Bulk update of restaurants         | Remove all restaurants          |
| /restaurants/{restaurantsId} | Error                 | Retrieve the details for restaurant {restaurantsId} | Update the the details for {restaurantsId} if it exists | Remove restaurant {restaurantsId} |
