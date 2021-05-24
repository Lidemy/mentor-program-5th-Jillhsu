const request = require('request')

const input = process.argv

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com'

actionSwitcher(input)

function actionSwitcher(input) {
  const action = input[2]
  switch (action) {
    case 'list':
      listBooks()
      break
    case 'read':
      readBook(input[3])
      break
    case 'delete':
      deleteBook(input[3])
      break
    case 'create':
      createBook(input[3])
      break
    case 'update':
      updateBook(input[3], input[4])
      break
    default:
      console.log('default')
      break
  }
}

function listBooks() {
  request(
    `${API_ENDPOINT}/books?_limit=20`,
    (error, response, body) => {
      if (error) {
        console.log(error)
        return
      }

      let books
      try {
        books = JSON.parse(body)
      } catch (error) {
        console.log(error)
      }
      for (let i = 0; i < books.length; i++) {
        console.log(`${books[i].id} ${books[i].name}`)
      }
    }
  )
}

function readBook(id) {
  request(
    `${API_ENDPOINT}/books/${id}`,
    (error, response, body) => {
      if (error) {
        console.log(error)
        return
      }
      let book
      try {
        book = JSON.parse(body)
        console.log(book)
      } catch (error) {
        console.log(error)
      }
    }
  )
}

function deleteBook(id) {
  request.delete(
    `${API_ENDPOINT}/books/${id}`,
    (error, response, body) => {
      if (error) {
        console.log(error)
        return
      }
      let book
      try {
        book = JSON.parse(body)
        console.log(book)
      } catch (error) {
        console.log(error)
      }
    }
  )
}
function createBook(name) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      name
    }
  }, (err, res) => {
    if (err) {
      return console.log('新增失敗', err)
    }
    console.log('新增成功！')
  })
}
function updateBook(id, name) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      name
    }
  }, (err, res) => {
    if (err) {
      return console.log('更新失敗', err)
    }
    console.log('更新成功！')
  })
}
