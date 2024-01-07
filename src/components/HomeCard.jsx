import Button from './Button';
import  {cardData}  from './data/homeCard';
import  Link  from 'next/link';
import Image from 'next/image'
const HomeCard = () => {
	
  return (
      <div className="grid grid-cols-3 gap-5 max-w-[1100px] mx-auto relative -top-[50px] px-[20px]">
          {cardData.map((item, index) => (
              <div key={index} className="menuCard flex flex-col items-center bg-gray-300 rounded-lg p-4 pb-8 hover:-translate-y-3  transition-all duration-300 ease-in-out">
                  <Link href="#" className="flex flex-col items-center">
                      <Image src={item.image} alt={item.alt} width={220} height={220} />
                      <h4 className="text-2xl capitalize font-bold py-4 hover:text-primary transition-all duration-300">
                          {item.title}
                      </h4>
                  </Link>
                  <p className="text-center text-gray-500 font-semibold text-sm mb-4">
                      {item.descr}
                  </p>
                  <span className=" font-semibold text-xl italic mb-4">${item.price}</span>
                  <Button title={"Add to cart"}/>
                  
              </div>
          ))}
      </div>
  );
}

export default HomeCard
