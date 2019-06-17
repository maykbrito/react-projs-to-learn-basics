class BibleApi {

    constructor() {
        this.selectedRandomBook = {}
        this.selectedChapter = {}
        this.selectedVerse = {}
    }

    buildRandomVerseFromAPI() {
        return this.pickRandomBookFromAPI()
        .then(() => this.pickRandomChapterBySelectedBookFromAPI(this.selectedRandomBook.slug))
        .then(() => this.pickRandomVerseFromAPI(this.selectedRandomBook, this.selectedChapter))
        .then(() => this.buildVerseObj(this.selectedRandomBook, this.selectedVerse))
    }

    pickRandomBookFromAPI() {
        const booksUrl = "https://bibler-server.prestonlee.com/books.json"
        return new Promise((resolve,reject) => {
            fetch(booksUrl)
            .then(response => response.json())
            .then(listOfBooks => resolve(this.selectedRandomBook = listOfBooks[Math.floor(Math.random() * listOfBooks.length)]))
        })
    }

    pickRandomChapterBySelectedBookFromAPI(bookSlug) {
        const chaptersUrl = `https://bibler-server.prestonlee.com/american-standard-asv1901/${bookSlug}.json`
        return new Promise((resolve,reject)=>{
            fetch(chaptersUrl)
            .then(response => response.json())
            .then(listOfChapters => resolve(this.selectedChapter = listOfChapters[Math.floor(Math.random() * listOfChapters.length)]))
        })
    }

    pickRandomVerseFromAPI(selectedBook, selectedChapter) {
        const versesUrl = `https://bibler-server.prestonlee.com/american-standard-asv1901/${selectedBook.slug}/${selectedChapter}.json`
        return new Promise((resolve, reject) => {
            fetch(versesUrl)
            .then(response => response.json())
            .then(listOfVerses => resolve(this.selectedVerse = listOfVerses[Math.floor(Math.random() * listOfVerses.length)]))
        })
    }

    buildVerseObj(book, verse) {
        let formattedReference = book.name + " " +
        verse.chapter + ":" +
        verse.ordinal

        let formattedVerse = verse.text + " - " + 
        formattedReference

        return {
            text: verse.text,
            book: book.name,
            chapter: verse.chapter,
            ordinal: verse.ordinal,
            formattedReference: formattedReference,
            formattedVerse: formattedVerse
        }
    }
    
}

export default BibleApi