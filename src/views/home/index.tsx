import Hero from "../../components/hero";
import Repositories from "../../components/repositories";

const Home = () => {
  return (
    <div class="flex justify-center w-full items-center flex-col">
      <Hero />
      <Repositories />
    </div>
  );
};

export default Home;
