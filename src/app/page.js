import Layout from "../components/layout/Layout";
import AuthForm from "../components/template/autForm";
import HomePage from "../components/template/HomePage";

export default function Home() {
  return (
    <div>
      <Layout>
      <HomePage />
      <AuthForm />
      </Layout>
    </div>
  );
}
