import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface IsOpenContextType {
    modalIsOpen: string;
    setIsOpen: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context
const IsOpenContext = createContext<IsOpenContextType | undefined>(undefined);

// Custom hook to use the context
const useIsOpen = (): IsOpenContextType => {
    const context = useContext(IsOpenContext);
    if (!context) {
        throw new Error('useIsOpen must be used within an IsOpenProvider');
    }
    return context;
};

// Create the provider
interface IsOpenProviderProps {
    children: ReactNode;
}

const IsOpenProvider: React.FC<IsOpenProviderProps> = ({ children }) => {
    const [modalIsOpen, setIsOpen] = useState<string>('');

    return (
        <IsOpenContext.Provider value={{ modalIsOpen, setIsOpen }}>
            {children}
        </IsOpenContext.Provider>
    );
};

export { IsOpenProvider, useIsOpen };