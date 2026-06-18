import EdgeContainer from "@/_components/common/container/EdgeContainer";
import SocialsList from "@/_components/features/footer/SocialsList";

function Footer() {
  return (
    <EdgeContainer className="grid grid-cols-2 lg:grid-cols-3 py-6 bg-surface">
      <span className="hidden lg:block" />

      <p className="text-sm sm:text-base text-center">© 2026 Kaito Watanabe</p>

      <ul className="flex justify-end gap-3">
        <SocialsList />
      </ul>
    </EdgeContainer>
  );
}

export default Footer;
