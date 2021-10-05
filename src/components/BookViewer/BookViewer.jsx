import React from 'react';
import Book from '../Book/Book'
import './BookViewer.css'

const BookViewer = (props) => {
    return (  
        <div className='row row-space'>
            <div className='col-md-4'>
                <button className='prev-button' onClick={props.previousBook}>Previous Book</button>
            </div>
            <div className='col-md-4'>
                <Book book={props.book} />
            </div>
            <div className='col-md-4'>
                <button className='next-button' onClick={props.nextBook}>Next Book</button>
            </div>
        </div>
    );
}
 
export default BookViewer;