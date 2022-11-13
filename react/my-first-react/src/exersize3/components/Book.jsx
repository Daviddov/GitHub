import { useState } from "react";

function Book(props) {
  const {id, title, sample, year, auther } = props.book;

  const [like, setLike] = useState(props.book.likes)
  const [shelf, setshelf] = useState(props.book.onShelf)
  
  const style = {
   
    backgroundColor: shelf ? 'green':'darkgrey',
    fontSize: like >= 100 ? 24 : 20,
  }
   

  return (
    <tr style={style}>
        <td style={style}>  {id}</td>
        <td style={style}> {title}</td>
        <td style={style}> {year}</td>
        <td style={style}> {auther}</td>
        <td style={style}> {like} </td>
        <td style={style}>  {shelf && 'onShelf'} </td>
        <td style={style}><button onClick={ () => alert(sample)}>Read</button></td>
        <td style={style}><button onClick={ () => setLike(like+1) }>👍 Like</button></td>
        <td style={style}><button onClick={ () => setLike(like-1) }>👎 Unlike</button></td>
       {shelf && <td style={style}><button onClick={ ()=> setshelf( false)}> Take </button></td>} 
       {!shelf && <td style={style}><button onClick={ ()=> setshelf( true)}> Add </button></td>} 
       
      </tr>

  );
}

export default Book;