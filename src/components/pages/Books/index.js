import React from "react";

export const title = "Books";

//require("../../../cssLoader").load(__dirname + "/Book.scss");


class Page extends React.Component {


    createBooksHtml() {
    
    
        // TODO add more fields like read date, num pages, picture, amazon / audible link, tags
        var books = [{
                title: "Think and Grow Rich",
                author: "Napoleon Hill"
            }, {
                title: "Outwitting the Devil",
                author: "Napoleon Hill"
            }, {
                title: "The Power of Now",
                author: "Eckhart Tolle"
            }, {
                title: "A New Earth",
                author: "Eckhart Tolle"
            }, {
                title: "Levels of Energy",
                author: "Frederick E Dodson"
            }, {
                title: "The UltraMind Solution",
                author: "Mark Hyman M.D"
            }, {
                title: "The 150 Healthiest Foods on Earth",
                author: "Jonny Bowden"
            }, {
                title: "The Four Agreements",
                author: "don Miguel Ruiz"
            }, {
                title: "The Kybalion",
                author: "The Three Initiates"
            }, {
                title: "As a Man Thinketh",
                author: "James Allen"
            }, {
                title: "Business",
                author: "Andrew Carnegie"
            }, {
                title: "The Autobiography of Andrew Carnegie",
                author: "Andrew Carnegie"
            }, {
                title: "Steel Titan",
                author: "Robert Hessen"
            }, {
                title: "How to Win Friends & Influence People",
                author: "Dale Carnegie"
            }, {
                title: "The Success System That Never Fails",
                author: "W Clement Stone"
            }, {
                title: "Start With Why",
                author: "Simon Sinek"
            }, {
                title: "The Marketing Blueprint",
                author: "Jules Marcoux"
        }];

        //var listElement = document.getElementById("book-list");

        //books.forEach(function(book) {
        //    console.log("for each book");
        //    var bookElement = document.createElement("div");
        //    console.log("book element");
        //    bookElement.innerText = book.title + " - " + book.author;
        //    listElement.appendChild(bookElement);
        //})

        return (
            <div className="book-list">
                {
                    books.map(book => {
                        return (
                            <div>
                                {book.title} - {book.author}
                            </div>
                        );
                    })
                }
            </div>
        );
    
    }


    render() {

        return (
            <div className="page-content Books">

                {this.createBooksHtml()}

            </div>
       );
    }
}

export const component = Page;
export default Page;
