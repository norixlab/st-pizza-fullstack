import Image from 'next/image';
import ArrowRight from '../icons/ArrowRight';
import Button from '../Button';


const Hero = () => {
  return (
      <section className="flex justify-center items-center gap-[100px] pt-16 mb-10 px-[20px]">
          <div className=" max-w-[400px] ">
              <h1 className="text-5xl font-semibold mb-6 leading-[58px] ">
                  
                  Everything
                  <br /> is better
                  <br /> with a&nbsp;
                  <span className="text-primary tracking-wider">Pizza</span>
              </h1>
              <p className="text-gray-500 mb-6">
                  Pizza is the missing piece that makes every day complete, a simple yet delicious
                  joy in life
              </p>
              <div className=" flex items-center gap-6">
                  <Button title={'order now'}/>
                  <button className="text-gray-500 hover:text-primary transition-all duration-300">
                      Read more...
                  </button>
              </div>
          </div>
          
              <Image src="/pizza.png" alt="Pizza" height={450} width={450} />
          
      </section>
  );
}

export default Hero