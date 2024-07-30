import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2 className="animate-spin w-12 h-12 text-primary" />
      <span className="ml-4 text-xl text-gray-500">Please Wait...</span>
    </div>
  );
};

export default Loader;