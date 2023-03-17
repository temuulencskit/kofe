import { BiCoffeeTogo } from 'react-icons/bi';

function Header() {
  return (
    <div className='mx-auto md:max-w-7xl bg-white rounded-full flex justify-between py-3.5 px-6 font-semibold'>
      <div className='flex gap-6 items-center'>
        <BiCoffeeTogo className='h-8 w-8' />
        <a href='' className='px-4 py-2 btn-hover-bg relative'>
          FAQ
        </a>
        <a href='' className='px-4 py-2 btn-hover-bg relative'>
          Explore Creators
        </a>
      </div>
      <div className='flex gap-4 items-center'>
        <a href='' className='px-4 py-2 btn-hover-bg relative'>
          <span>Log in</span>
        </a>
        <a href='' className='bg-yellow-300 rounded-full px-4 py-2'>
          Sign up
        </a>
      </div>
    </div>
  );
}

export default Header;
