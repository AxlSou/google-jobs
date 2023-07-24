import React from 'react';
import samples from './samples.json';

const SearchContext = React.createContext({})

export function SearchContextProvider({ children }) {
    const [searchParams, setSearchParams] = React.useState({
        location: 'London',
        employmentType: 'FULLTIME',
        currentQuery: '',
        data: samples,
        currentPage: 1,
    })

    return (
        <SearchContext.Provider value={{ searchParams, setSearchParams }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext;
