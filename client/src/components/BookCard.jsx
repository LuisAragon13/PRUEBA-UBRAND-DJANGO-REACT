import {useNavigate} from 'react-router-dom'
export function BookCard({ book }) {

  const navigate = useNavigate();

  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate('/books/'+ book.id)
      }}
    >
        <h1 className="font-bold uppercase">{book.title}</h1>
        <p className="text-slate-400">{book.author}</p>
        <p className="text-slate-200">{book.publication_year}</p>
    </div>
  );
}
