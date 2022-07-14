import { JSXElement } from "solid-js";

interface Ichildren {
  children: JSXElement;
}

const Layout = ({ children }: Ichildren) => {
  return (
    <section class="flex justify-center items-center w-full min-h-screen">
      <div class="flex justify-center items-center flex-col w-full md:w-[85%]">
        {children}
      </div>
    </section>
  );
};

export default Layout;
