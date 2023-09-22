import {useNavigate} from 'react-router-dom'
export function BookCard({ book }) {

  const navigate = useNavigate();

  return (
    <div style={{background: "black"}}
      onClick={() => {
        navigate('/books/'+ book.id)
      }}
    >
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.publication_year}</p>
        <hr />
    </div>
  );
}
