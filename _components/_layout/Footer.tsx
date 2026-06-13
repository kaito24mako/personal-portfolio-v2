import EdgeContainer from "../_common/_container/EdgeContainer";
import SocialsList from "../_features/_list/SocialsList";

function Footer() {
  return (
    <EdgeContainer className="grid grid-cols-2 lg:grid-cols-3 bg-background text-foreground">
      <span className="hidden lg:block" />

      <p className="text-sm sm:text-base text-center">© 2026 Kaito Watanabe</p>

      <ul className="flex justify-end gap-3">
        <SocialsList />
      </ul>
    </EdgeContainer>
  );
}

export default Footer;
