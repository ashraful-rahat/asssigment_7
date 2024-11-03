/* eslint-disable no-undef */
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams(); 
  
  const data = useLoaderData();
  const id = parseInt(bookId);
 const book = data.find(book =>book.bookId ===id)
// eslint-disable-next-line no-unused-vars
const {bookId: currentBookId,image,review,bookName,author,category,rating,totalPages,publisher,yearOfPublishing }=book;
   
    return (
        <div className="mt-[80px]">
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className="p-12 bg-base-300">
    <img className=" lg:h-[450px] lg:w-[430px] h-[270px] w-[350px] rounded-xl"
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-4xl font-bold">{bookName}</h2>
    <div className="lg:w-[520px] ">
    <p>By: {author}</p>
    <div className="divider"></div>
    <p>
  <span className="font-bold text-md">Review:</span> 
  {review.slice(0, 200)}
</p>


<div className="card-actions justify-between mt-3">
      <div className="badge badge-outline bg-green-600 text-white p-4">{category}</div>
      <div className="badge badge-outline p-3 bg-red-600 text-white">{rating}</div>
    </div>
    <div className="divider"></div>


    <div>
        <p className="mt-3">  Number of Page : <span className="font-bold">{totalPages}</span> </p>
        <p className="mt-3"> Publisher:  <span className="font-bold">{publisher}</span>  </p>
        <p className="mt-3"> Year of Publishing  :  <span className="font-bold">{yearOfPublishing}</span>  </p>
        <p className="mt-3"> rating :  <span className="font-bold">{rating}</span>  </p>
          
       
        <div className="mt-4 gap-5 flex">
        <button className="btn btn-outline btn-primary">Read</button>
        <button className="btn btn-outline btn-secondary">WishList</button>
        </div>
         
    </div>

    </div>
   
   
  </div>
</div>
</div>
        
    );
};

export default BookDetails;
