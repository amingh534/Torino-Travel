import Footer from "@/src/components/template/Footer";
import Header from "@/src/components/template/Header";

function ProfileLayout({ children }) {
  return (
    <div>
      <Header/>

      <main>{children}</main>
      <Footer/>
    </div>
  );
}
export default ProfileLayout;
