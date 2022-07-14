import type { Component } from "solid-js";
import Layout from "./components/layout";
import Home from "./views/home";

const App: Component = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
