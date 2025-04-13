
import React from 'react';
import { ActivitySquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white py-4 border-b border-gray-200">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ActivitySquare className="h-6 w-6 text-medical-blue" />
          <h1 className="text-xl font-semibold text-gray-900">DiabeTech Prediction Buddy</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-medical-blue transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-medical-blue transition-colors">
                Resources
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="bg-medical-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
