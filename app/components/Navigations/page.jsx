import Buttons from "@/app/ui/Buttons/page";
import Link from "next/link";
import Logo from "@/app/Assets/Logo";

export default function page() {
  return (
    <header>
      <nav
        className=" bg-white opacity-95 shadow border-gray-200
         fixed w-full z-20 top-0 left-0 border-b border-gray-200
         py-[1.2rem]"
      >
        <div className="flex justify-between items-center mx-7">
          <div>
            <Logo />
          </div>
          <div className="space-x-9">
            <Link href="/" className="hover:text-bg_button">
              Accueil
            </Link>
            <Link href="/" className="hover:text-bg_button">
              Produits & Services
            </Link>
            <Link href="/" className="hover:text-bg_button">
              Tarifs
            </Link>
            <Link href="/" className="hover:text-bg_button">
              Témoignagnes
            </Link>
          </div>
          <div>
            <Buttons size="big">Créez Votre Carte Gratuite</Buttons>
          </div>
        </div>
      </nav>
    </header>
  );
}
