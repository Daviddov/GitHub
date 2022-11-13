import React from 'react';
import ReactDOM from 'react';
import Book from './Book';
import { books } from './books';

class App3 extends React.Component {
    constructor(props) {
      super(props)  
     
    }
     
    render() {
        
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr >
                            {Object.keys(books[0]).map((key,i) => <td key={'key'+i}>{key}</td>)};
                        </tr>
                    </thead>
                    <tbody>

                        {books.map(element => <Book
                            key={ element.id }
                            book={ element } />
                            )}

                    </tbody>
                </table>

            </React.Fragment>
        )
    }
    
}

export default App3