class BookService {
    constructor(){}
    async fetchAllBooks() {
            try {
              const res = await fetch('http://localhost:8800/books', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => response.json());
                return res;
            } catch(err) {
              console.log(err);
            }
        }
}
export default BookService;
