import AudienceSection from '../components/home/AudienceSection.jsx';
import BrandSection from '../components/home/BrandSection.jsx';
import CampaignSection from '../components/home/CampaignSection.jsx';
import CommunitySection from '../components/home/CommunitySection.jsx';
import ContentCardsSection from '../components/home/ContentCardsSection.jsx';
import BrandCarouselSection from '../components/home/BrandCarouselSection.jsx';
import PairCardsSection from '../components/home/PairCardsSection.jsx';
import ProductGridSection from '../components/home/ProductGridSection.jsx';
import SaleFeatureSection from '../components/home/SaleFeatureSection.jsx';
//import ViralCarouselSection from '../components/home/ViralCarouselSection.jsx';
import AnnouncementBar from '../components/layout/AnnouncementBar.jsx';
import SiteFooter from '../components/layout/SiteFooter.jsx';
import SiteHeader from '../components/layout/SiteHeader.jsx';
import WhatsAppLink from '../components/layout/WhatsAppLink.jsx';
import {
  bestSellers,
  lookProducts,
  moreThanShoes,
  viralProducts,
} from '../data/homePageData.js';

export default function HomePage() {
  return (
    <div id="top" className="home-page min-h-screen bg-white text-black antialiased">
      <SiteHeader />
      <AnnouncementBar />

      <main className="pb-16">
        <BrandCarouselSection />
        <ProductGridSection
          title="Lo más buscado"
          subtitle="Los pares que más se están llevando esta semana."
          products={bestSellers}
        />
        <CampaignSection />
        <BrandSection />
        <PairCardsSection />
        <AudienceSection />
       //ViralCarouselSection /
        <SaleFeatureSection />
        <ContentCardsSection title="Más que calzado" items={moreThanShoes} />
        <ProductGridSection
          title="Completá tu look"
          subtitle="Bolsos, gorras, fajas, vasos y más para acompañar tus pares."
          products={lookProducts}
          variant="look"
        />
        <CommunitySection />
      </main>

      <SiteFooter />
      <WhatsAppLink />
    </div>
  );
}