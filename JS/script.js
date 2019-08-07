function Book(title, author, pages, read) {
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
}

Book.prototype.info = function () {
  console.log(title, author, pages, read)
}