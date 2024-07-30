import { useState } from 'react';
import { Sun, Moon, User, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className="flex items-center justify-between p-5 bg-component shadow-md duration-500">
      <div className="text-xl font-bold text-white">Logo</div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="text-white focus:outline-none">
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        <div className="relative">
          <button className="flex items-center space-x-2 text-white focus:outline-none">
            <User className="w-6 h-6" />
            <ChevronDown className="w-4 h-4" />
          </button>
          {/* Dropdown content (e.g., user settings) can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
