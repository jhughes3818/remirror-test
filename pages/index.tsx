import Basic from "../components/Editor";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import NewEditor from "../components/NewEditors";

const Editor = dynamic(() => import("../components/NewEditors"), {
  ssr: false,
});

const Home = () => {
  return (
    <Layout>
      <Editor />
    </Layout>
  );
};
export default Home;
