import Image from 'next/image'
import { 
    MagnifyingGlassIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    Bars3Icon,
} from '@heroicons/react/24/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Router, { useRouter } from 'next/router';


function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const Router = useRouter();
    
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const search = () => {
        Router.push({
            pathname: '/search',
            query: {
                location: searchInput, 
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            },
        });
    };

    

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

            {/* left */}
            <div 
                onClick={() => Router.push('/')}
                className='relative flex h-10 cursor-pointer my-auto'>
                <Image 
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                    alt='airbnb'
                />
            </div>

            {/* middle */}
            <div className='flex items-center border-2 rounded-full p-2 md:shadow-sm mx-2'>
                <input 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                // onClick={e => alert("This is just an example so type whatever you like but you'll always get London ;)")}
                type="text" 
                placeholder={placeholder || "Start your search"} 
                className="bg-transparent outline-none grow ml-2 text-gray-600 placeholder-gray-400 overflow-hidden" />
                <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 ml-2 cursor-pointer' />
            </div>

            {/* right */}
            <div className='flex space-x-4 items-center justify-end text-gray-500' >
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='hidden md:inline-flex h-6 cursor-pointer' />

                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <Bars3Icon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto mt-2'>
                    <DateRangePicker 
                        ranges={[selectionRange]} 
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5'/>
                        <input 
                            value={noOfGuests}
                            onChange={e => setNoOfGuests(e.target.value)}
                            type="number" 
                            min={1}
                            className='w-12 pl-2 text-lg outline-none text-red-400'
                        />
                    </div>
                    <div className='flex items-center text-center'>
                        <button 
                            className="flex-1 text-gray-500 cursor-pointer"
                            onClick={e => setSearchInput('')}
                        >Cancel</button>
                        <button 
                            className="flex-1 text-red-400 cursor-pointer"
                            onClick={search}
                        >Search</button>
                    </div>

                </div>
            )}

        </header>
    )
}


export default Header