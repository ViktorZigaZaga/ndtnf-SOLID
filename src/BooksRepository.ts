import IBook from "./interfaces/IBook";

export default abstract class BooksRepository{
    
    abstract createBook(book: IBook): void;
    
    abstract getBook(id: string): IBook | undefined;
    
    abstract getBooks(): IBook[];
    
    abstract updateBook(id: string): void;
    
    abstract deleteBook(id: string): void;
}