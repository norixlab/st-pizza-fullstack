import  Image  from 'next/image';

import HomeCard from '../HomeCard';
import SectionTitle from './SectionTitle';



const HomeMenu = () => {
  return (
      <section>
          <div className="flex justify-between">
              <div className=" relative top-[30px] rotate-[245deg]">
                  <Image src={'/sallat.png'} alt="sallad" width={170} height={200} />
              </div>
              
              <SectionTitle title={'Menu'} subtitle={'Check out'} />

              <div className=" relative -top-[70px] -z-10 -rotate-45">
                  <Image src={'/sallat.png'} alt="sallad" width={170} height={200} />
              </div>
          </div>

        
              <HomeCard />
          

          <div className="flex justify-between relative top-[-100px] -z-10">
              <div className="relative top-[20px]">
                  <Image src={'/grib2.png'} alt="grib" height={200} width={250} />
              </div>
              <div className="relative top-[-50px]">
                  <Image src={'/grib1.png'} alt="grib" height={200} width={250} />
              </div>
          </div>
      </section>
  );
}

export default HomeMenu