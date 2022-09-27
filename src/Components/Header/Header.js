import React from 'react';

const Header = ({setSearce}) => {
    return (
        <div className='md:px-20 bg-slate-900 md:sticky top-0 z-20'>
            <div className='block md:hidden'>
                <img src="https://images.apilist.fun/the_meal_db_api.png" alt="" />
            </div>
            <div className="navbar ">
  <div className="flex-1 hidden md:block text-left">
    <a className="btn btn-ghost normal-case text-xl"><img src="https://images.apilist.fun/the_meal_db_api.png" alt="" /></a>
  </div>
  <div className="flex-none gap-2 mx-auto">
    <div className="form-control">
      <input id='search-input' onChange={(e)=>setSearce(e.target.value)} type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;