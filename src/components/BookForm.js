import React from 'react';
//components
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';

const BookForm = () => {
  return <form className='h-[300px] bg-green-100 w-full lg:h-[70px]'>
    <div className='flex flex-col w-full h-full lg:flex-row'>
      <div>
        <CheckIn />
      </div>
      <div>
        <CheckOut />
      </div>
      <div>
        <AdultsDropdown />
      </div>
      <div>
        <KidsDropdown />
      </div>
    </div>
  </form>;
};

export default BookForm;
