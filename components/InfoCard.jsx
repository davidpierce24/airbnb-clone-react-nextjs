import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';

function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-200 ease-out first:border-t active:scale-95">

            <div className="relative h-32 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image 
                    src={img}
                    alt='pic'
                    layout='fill'
                    objectFit="cover"
                    className="rounded-2xl "
                />
            </div>

            <div className="flex flex-col flex-1 pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-6 cursor-pointer" />
                </div>

                <h4 className="text-xl font-semibold">{title}</h4>

                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-500 flex-1">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>

                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard