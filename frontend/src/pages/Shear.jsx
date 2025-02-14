import React, { useEffect, useState } from 'react'
import Card from './Card'

const categories = ['Choice here', 'business', 'books', 'marketing', 'horror', 'fiction', 'adventure']

const Shear = () => {

    const [books, setBook] = useState([])
    const [filterBook, setFilterBook] = useState("Choice here")
    useEffect(() => {
        fetch('book.json').then(res => res.json()).then(data => setBook(data))
    }, [])

    const bookFilter = filterBook === "Choice here" ? books : books.filter(book => book.category === filterBook.toLowerCase()) 
    console.log(bookFilter)

    function maping(itemBook){
        return bookFilter
    }

    return (

        <div>
            <h1>Why do we use it?</h1>
            <div className='mt-4'>
                <select 
                onChange={(e) => setFilterBook(e.target.value)}
                id='category' name='category' className='bg-gray-300 w-35 py-2 px-4 rounded focus:outline-none'>
                    {
                        categories.map((item, index) => (
                            <option key={index}>{item}</option>
                        ))
                    }
                </select>
            </div>

            <div className='mt-10'>
                <Card
                    {}
                />
                    {/* {
                        bookFilter.map((book, index) =>(
                            <div key={index}>
                                <h1>{book.title}</h1>
                                <p>{book.description.length > 80 ? book.description + "..." : book.description }</p>
                            </div>
                        ))
                    } */}
                
            </div>
        </div>
    )
}

export default Shear;
