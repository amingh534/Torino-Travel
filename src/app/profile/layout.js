import ProfilePage from "@/template/ProfilePage";
import AutProvider from "src/components/partials/provider/AutProvider";

function ProfileLayout({ children }) {
  
  return (
    <AutProvider>
      <ProfilePage>{children}</ProfilePage>
    </AutProvider>
  );
}
export default ProfileLayout;
