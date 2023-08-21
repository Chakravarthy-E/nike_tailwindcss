import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 nax-container border-2 border-red-500"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]   font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylist Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        {statistics.map((stats)=>(
          <div key={stats.label}>
          <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
          <p className="leading-7 font-montserrat text-slate-gray">{stats.label}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
