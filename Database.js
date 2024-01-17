module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        return this.#storage.authors.push(author)
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book) {
        const bookExists = this.findBookByName(book.name)
        if (!bookExists) {
            this.#storage.books.push(book)
        }
    }

    addBookInStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBookFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    findPosterByName(posterName) {
        return this.#storage.posters.map(p => p.name === posterName)
    }

    savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name)
        if (!posterExists) {
            this.#storage.posters.push(poster)
        }
    }

    addPosterInStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removePosterFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.removeToStock(quantity)
    }

    saveUser(user) {
        const userExist = this.#storage.users.find(u => u.email === user.email)
        if (!userExist) {
            return this.#storage.users.push(user)
        }
    }

    saveOrder(order) {
        return this.#storage.orders.push(order)
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}