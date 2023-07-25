import React from 'react';
import samples from './samples.json';

const SearchContext = React.createContext({})

export function SearchContextProvider({ children }) {
    const [searchParams, setSearchParams] = React.useState({
        location: 'London',
        employmentType: 'FULLTIME',
        currentQuery: 'Web Developer',
        data: samples,
        currentPage: 1,
        apiPage: 1,
        firstIndex: 0,
        lastIndex: 5,
    })

    return (
        <SearchContext.Provider value={{ searchParams, setSearchParams }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext;
