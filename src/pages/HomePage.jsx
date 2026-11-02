import AudienceSection from '../components/home/AudienceSection.jsx';
import BrandSection from '../components/home/BrandSection.jsx';
import CampaignSection from '../components/home/CampaignSection.jsx';
import CommunitySection from '../components/home/CommunitySection.jsx';
import ContentCardsSection from '../components/home/ContentCardsSection.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
import PairCardsSection from '../components/home/PairCardsSection.jsx';
import ProductGridSection from '../components/home/ProductGridSection.jsx';
import AnnouncementBar from '../components/layout/AnnouncementBar.jsx';
import SiteFooter from '../components/layout/SiteFooter.jsx';
import SiteHeader from '../components/layout/SiteHeader.jsx';
import WhatsAppLink from '../components/layout/WhatsAppLink.jsx';
import {
  bestSellers,
  lookProducts,
  moreThanShoes,
  saleProducts,
  viralProducts,
} from '../data/homePageData.js';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <SiteHeader />
      <AnnouncementBar />

      <main className="pb-16">
        <HeroSection />
        <ProductGridSection
          title="Lo más buscado"
          subtitle="Los pares que más se están llevando esta semana."
          products={bestSellers}
        />
        <CampaignSection />
        <BrandSection />
        <PairCardsSection />
        <AudienceSection />
        <ProductGridSection title="Los más virales" products={viralProducts} columns={3} />
        <ProductGridSection
          title="Tus pares favoritos a mejor precio"
          subtitle="Tenis, botas, sandalias y accesorios con descuento."
          products={saleProducts}
          categories={['Mujer', 'Hombre', 'Niños']}
          saleAction="Ver todas las ofertas →"
          saleLayout
        />
        <ContentCardsSection title="Más que calzado" items={moreThanShoes} />
        <ProductGridSection
          title="Completá tu look"
          subtitle="Bolsos, gorras, fajas, vasos y más para acompañar tus pares."
          products={lookProducts}
          columns={3}
        />
        <CommunitySection />
      </main>

      <SiteFooter />
      <WhatsAppLink />
    </div>
  );
}