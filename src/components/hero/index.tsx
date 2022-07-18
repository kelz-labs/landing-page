const Hero = () => {
  return (
    <div class="flex w-full flex-col md:flex-row gap-4 justify-center items-center h-screen border-b-[3px] md:border-b-0 border-b-black md:border-l-[3px] md:border-l-black">
      <div class="flex flex-col gap-4 md:flex-row justify-center items-center">
        <img
          src="https://avatars.githubusercontent.com/u/77146709?v=4"
          alt="Hero"
          class="rounded-full"
          width="270px"
        />
        <div class="flex-col w-full text-center md:text-left relative px-4">
          <h1 class="text-4xl font-bold">kelz-labs</h1>
          <p class="text-lg mt-1">
            A place for Haikel to save his learning resources
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
