/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";




const Book = ({book}) => {
  
    // eslint-disable-next-line no-unused-vars
    const {image, bookName ,author ,tags,category,rating,bookId}=book;
    return (
    
  <Link to={`/books/${bookId}`} >
 
 <div>
            <div className="card bg-base-100 w-96 shadow-xl p-6 h-[500px] border border-gray-300">
  <figure className="bg-base-200 py-8 rounded-2xl  ">
    <img className="h-[166px] w-[150px] rounded-lg"
      src= {image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <div className="flex gap-5 justify-center">
   {
       tags.map((tags,index) => <button 
       key={index}className="btn btn-xs bg-base-200 text-green-700">{tags}</button>)
    }
   </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{author}</p>
    <div className="divider"></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline bg-green-600 text-white p-4">{category}</div>
      <div className="badge badge-outline p-3 bg-red-600 text-white">{rating}</div>
    </div>
  </div>
</div>
        </div>
</Link>



    );
};

export default Book;