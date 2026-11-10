const brandCards = [
  { name: 'Converse', image: 'https://cms.blumewebsites.com/cachos/website/mk-converse.jpg', href: '/products?brand=CONVERSE' },
  { name: 'Vans', image: 'https://cms.blumewebsites.com/cachos/website/mk-vans.jpg', href: '/products?brand=VANS' },
  { name: 'Dr. Martens', image: 'https://cdn.media.amplience.net/i/drmartens/NAV_WOMENS_WBS?w=1000&qlt=85&fmt=auto', href: '/products?brand=DR.%20MARTENS' },
  { name: 'Nike', image: 'https://static.nike.com/a/images/c_crop,x_574,y_500,w_572,h_715/bf4af6a4-2b74-47c7-85f0-928781c2c2e2/image.jpg', href: '/products?brand=NIKE' },
  { name: 'adidas', image: 'https://brand.assets.adidas.com/image/upload/c_crop,x_580,y_780,w_440,h_550/f_auto,q_auto:best/xcat_fw26_holiday_oct_htt_spw_tcc_d_a3b596962d.jpg', href: '/products?brand=ADIDAS' },
  { name: 'Puma', image: 'https://cms.blumewebsites.com/cachos/website/mk-puma.jpg', href: '/products?brand=PUMA' },
  { name: 'Timberland', image: 'https://cms.blumewebsites.com/cachos/website/mk-timberland.jpg', href: '/products?brand=TIMBERLAND' },
  { name: 'Columbia', image: 'https://cms.blumewebsites.com/cachos/website/mk-columbia.jpg', href: '/products?brand=COLUMBIA' },
  { name: 'Quiksilver', image: 'https://cms.blumewebsites.com/cachos/website/mk-quiksilver.jpg', href: '/products?brand=QUIKSILVER' },
  { name: 'Volcom', image: 'https://cms.blumewebsites.com/cachos/website/mk-volcom.jpg', href: '/products?brand=VOLCOM' },
  { name: 'Roxy', image: 'https://cms.blumewebsites.com/cachos/website/mk-roxy.jpg', href: '/products?brand=ROXY' },
  { name: 'Sock It To Me', image: 'https://cms.blumewebsites.com/cachos/website/mk-sock-it-to-me.jpg', href: '/products?brand=SOCK%20IT%20TO%20ME' },
];

export default function BrandSection() {
  return (
    <section className="brand-showcase" aria-label="Nuestras marcas">
      <div className="brand-showcase__inner">
        <div className="brand-showcase__header">
          <h2 className="brand-showcase__title">Nuestras <em>marcas</em></h2>
          <a className="brand-showcase__catalog" href={appUrl('/products')}>Ver catálogo <span aria-hidden="true">→</span></a>
        </div>

        <div className="brand-showcase__track">
          {brandCards.map((brand) => (
            <a className="brand-showcase__card" href={appUrl(brand.href)} key={brand.name}>
              <span className="brand-showcase__image">
                <img src={brand.image} alt={brand.name} loading="lazy" />
              </span>
              <span className="brand-showcase__name">{brand.name} <i aria-hidden="true">→</i></span>
            </a>
          ))}
        </div>

        <a className="brand-showcase__all" href={appUrl('/products')}>Ver todas las marcas (32)</a>
      </div>
    </section>
  );
}
import { appUrl } from '../../utils/routes.js';
