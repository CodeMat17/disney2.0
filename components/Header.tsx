import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";




const Header = () => {
  return (
    <header className='fixed w-full z-50 top-0 px-4 sm:px-5 py-5 flex items-center justify-between bg-gradient-to-t from-gray-700/70 dark:from-gray-200/0 via-gray-900/60 dark:via-gray-900/25 to-gray-900'>
      <Link href='/' className="mr-4">
        <Image
          alt='logo'
          priority
          src='https://links.papareact.com/a943ae'
          width={120}
          height={100}
          className='cursor-pointer invert dark:invertt'
        />
      </Link>
      <div className="flex items-center gap-1 sm:gap-2">
        {/* genre dropdown */}
        <GenreDropdown />
        {/* search input */}
        <SearchInput />
        {/* theme toggler */}
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
