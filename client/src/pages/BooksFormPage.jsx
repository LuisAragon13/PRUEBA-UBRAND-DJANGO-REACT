import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { createBooks, deleteBooks, updateBooks, getBookById } from '../api/books.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function BooksFormPage() {

    const { 
      register, 
      handleSubmit, 
      formState: {
        errors
      },
      setValue
    } = useForm()

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit (async (data) => {
      if(params.id){
        await updateBooks(params.id, data);
        toast.success('Book updated succesfully!',{
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "white"
          }
        });
      } else {
        await createBooks(data);
        toast.success('Book saved succesfully!',{
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "white"
          }
        });
      }
      navigate("/books");
    });

    useEffect(() => {
      async function loadBook(){
        if(params.id){
          const res = await getBookById(params.id);
          setValue('title', res.data.title);
          setValue('author', res.data.author)
          setValue('publication_year', res.data.publication_year)
        }
      }
      loadBook();
    }, []);

    return (
      <div className="max-w-xl mx-auto">
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Title" {...register("title", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          />
          {errors.title && <span>Title es required</span>}
          <input type="text" placeholder="Author" {...register("author", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          />
          {errors.author && <span>Author es required</span>}
          <input type="text" placeholder="Publication year" {...register("publication_year", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          />
          {errors.publication_year && <span>Year es required</span>}
          <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
        </form>
        {params.id && (
          <div className="flex justify-end">
            <button className="bg-red-500 p-3 rounded-lg block w-full mt-3" onClick={async () => {
            const accepted = window.confirm('Do you want to delete this book?');
            if(accepted===true){
              await deleteBooks(params.id);
              toast.success('Book deleted succesfully!',{
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "white"
                }
              });
              navigate("/books");
            }
            }}>Delete</button>
          </div>
          )
          }
      </div>
    )
  }
  