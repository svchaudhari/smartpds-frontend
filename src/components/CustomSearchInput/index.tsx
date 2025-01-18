import React, { useState } from "react";


interface CustomSearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  icon?: React.ReactNode;
}

const CustomSearchInput: React.FC<CustomSearchInputProps> = ({ placeholder = "Search...", onSearch, icon }) => {

  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); 
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      {icon && <span className="text-gray-500 px-3">{icon}</span>}
      
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="p-2 w-64 rounded-md focus:outline-none"
      />
    </div>
  )
}

export default CustomSearchInput;