import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from "date-fns"
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {
    const Router = useRouter();
    const { location, startDate, endDate, noOfGuests } = Router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div className=''>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

            <main className='flex'>
                <section className='grow pt-14 px-6'>
                    <p className='text-xs font-semibold'>300+ Stays - {range} for {noOfGuests} guests</p>
                    <h1 className='text-3xl font-bold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {searchResults?.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard key={title} title={title} img={img} location={location} description={description} star={star} price={price} total={total} />
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default Search

// https://links.papareact.com/isz

export async function getServerSideProps() {
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
    .then(res => res.json());

    return{
        props: {
            searchResults
        }
    }
}