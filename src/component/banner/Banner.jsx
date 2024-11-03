/* eslint-disable no-unused-vars */
import React from 'react';
import Books from '../../assets/books.jpg';
const Banner = () => {
    return (
        <div>
            
            <div className="hero bg-base-100 min-h-[480px] rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={Books}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold ml-8">Books to Freshen Up your Bookshelf</h1>
     <p className='ml-8 mt-5 text-md text-gray-700'>In a world torn by conflict, a young hero embarks on a quest to uncover hidden truths and unite divided factions. With danger lurking at every turn, they must harness their courage and forge unlikely alliances to restore peace</p>
      <button className="btn bg-green-500 ml-8 text-white mt-8">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;