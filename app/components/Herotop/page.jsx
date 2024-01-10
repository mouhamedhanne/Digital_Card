import Container from "@/app/components/Container/page";
import Titles from "@/app/ui/Titles/page";
import Buttons from "@/app/ui/Buttons/page";
import { CardIllustration } from "@/app/Assets/Images/page";
export default function page() {
  return (
    <Container>
      <div className="mt-[8rem] ">
        <div className="flex items-center justify-center space-x-4">
          <div>
            <Titles location="herotop">
              La Nouvelle Ère
              <br /> des Cartes de Visite
            </Titles>
            <p
              className="text-black mt-6 font-[20px] tracking-wide
             leading-7"
            >
              Nous simplifions la création de cartes de visite numériques,
              <br /> vous permettant de partager vos informations
              professionnelles <br /> de manière innovante.
            </p>
            <Buttons size="small" className="mt-8">
              Créez Votre Carte Gratuite
            </Buttons>
          </div>
          <div>
            <CardIllustration />
          </div>
        </div>
      </div>
    </Container>
  );
}
