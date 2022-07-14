import { createEffect, createSignal } from "solid-js";

interface Irepositories {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

const Repositories = () => {
  const [repos, setRepos] = createSignal([]);

  const getRepos = async () => {
    const response = await fetch(
      "https://api.github.com/users/kelz-labs/repos"
    );
    const data = await response.json();

    setRepos(data);
    console.log(data);
  };

  createEffect(() => {
    getRepos();
  }, []);

  return (
    <div class="relative border-r-4 border-r-black w-full">
      <img
        src="/img/dot-grid.png"
        alt="dot-grid"
        class="absolute mt-10 pr-4 rotate-180"
        width="350px"
      />
      <div class="flex flex-col justify-center items-center h-screen relative">
        <h1 class="text-3xl font-bold">Repositories</h1>
        <div class="grid grid-cols-1 relative mt-5 w-[80%] gap-4 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
          {repos().map((repo: Irepositories) => (
            <a href={repo.html_url} target="_blank">
              <div class="flex flex-col p-4 hover:scale-105 duration-200 transition-all cursor-pointer bg-cyan-300 rounded-sm">
                <h2 class="font-bold text-2xl">{repo.name}</h2>
                <p class="font-medium">{repo.description}</p>
                <span class="text-sm underline font-semibold mt-4">
                  {repo.language}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
