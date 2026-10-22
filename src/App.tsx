import { useMemo, useState } from 'react';
import { Bird, Image, MapPin, Package, Rabbit, Search, Wheat } from 'lucide-react';

type ProductGroup = {
  id: string;
  brand: string;
  title: string;
  products: string[];
};

const groups: ProductGroup[] = [
  {
    id: 'haram',
    brand: 'صناعة الهرم',
    title: 'أعلاف الهرم',
    products: ['خلطة بط الهرم سوبر', 'خلطة مواشي سوبر', 'خلطة مواشي اقتصادي', 'علف كلفة حمام الهرم'],
  },
  {
    id: 'ezz',
    brand: 'أعلاف العز',
    title: 'أعلاف العز',
    products: ['بادي نامي ٢٥ك ٢١٪؜ بروتين', 'كسب العز ٥٠ ك ١٦٪؜ بروتين', 'بياض العز ١٠ك &٢٥ ك'],
  },
  {
    id: 'iman-broiler',
    brand: 'الإيمان',
    title: 'أعلاف دواجن التسمين الإيمان',
    products: ['سوبر بادى', 'علف سوبر نامى', 'علف سوبر ناهى', 'علف بادى نامى', 'علف بادى للتربية المنزلية', 'علف نامى للتربية المنزلية', 'علف ناهى للتربية المنزلية'],
  },
  {
    id: 'iman-layer',
    brand: 'الإيمان',
    title: 'أعلاف دواجن البياض الإيمان',
    products: ['علف بادي بياض', 'علف نامى بياض', 'علف قبل وضع البيض', 'علف بياض انتاجى'],
  },
  {
    id: 'iman-duck',
    brand: 'الإيمان',
    title: 'أعلاف البط الإيمان',
    products: ['علف بط تسمين', 'علف بط بياض سوبر'],
  },
  {
    id: 'iman-cattle',
    brand: 'الإيمان',
    title: 'أعلاف مواشي الإيمان',
    products: ['علف مواشي تسمين فطام', 'علف مواشي تسمين', 'علف مواشي حلاب', 'علف مواشي حلاب عالي الادرار'],
  },
  {
    id: 'iman-sheep',
    brand: 'الإيمان',
    title: 'علف أغنام وماعز الإيمان',
    products: [],
  },
  {
    id: 'iman-rabbit',
    brand: 'الإيمان',
    title: 'أعلاف أرانب الإيمان',
    products: ['علف ارانب تسمين', 'علف ارانب مرضعات', 'علف ارانب سوبر مرضعات'],
  },
  {
    id: 'namaa',
    brand: 'علف نماء',
    title: 'علف نماء',
    products: ['سوبر بادي % 23', 'سوبر نامى%21', 'سوبر ناهي 19 %', 'سوبر بادي نامي %21 10ك', 'بادي نامي 21 % منزلي', 'بياض 10 %14ك', 'بياض %25 14ك', 'بياض %16', 'بياض %18'],
  },
  {
    id: 'fajr',
    brand: 'أعلاف الفجر',
    title: 'أعلاف الفجر',
    products: [],
  },
  {
    id: 'El-bremo',
    brand: 'أعلاف البريمو',
    title: 'أعلاف البريمو',
    products: ['خلطة اعلاف البريمو تسمين'],
  },
{
  id: 'raw-materials',
  brand: 'خامات',
  title: 'خامات',
  products: [
    'دشيشه ناعم',
    'دشيشة خشن',
    'صويا ٤٦',
    'شامى مستورد',
    'شامي مطحون',
    'شامي حصى',
    'شامى محلى',
  ],
},

];

const productImages: Record<string, string> = {
  'علف بادى نامى':
    `${import.meta.env.BASE_URL}images/products/bady-namy-eman.jpg`,

  'سوبر بادى':
    `${import.meta.env.BASE_URL}images/products/bady-eman.jpg`,

  'خلطة بط الهرم سوبر':
    `${import.meta.env.BASE_URL}images/products/duck-super.jpg`,

  'علف سوبر نامى':
    `${import.meta.env.BASE_URL}images/products/namy-eman.jpg`,
  
  'خلطة اعلاف البريمو تسمين':
    `${import.meta.env.BASE_URL}images/products/EL-bremo.jpg`,
  'كسب العز ٥٠ ك ١٦٪؜ بروتين':
    `${import.meta.env.BASE_URL}images/products/EZZ-16proten.jpg`,
  'بياض العز ١٠ك &٢٥ ك' :
    `${import.meta.env.BASE_URL}images/products/EZZ-14proten.jpg`,
  'بادي نامي ٢٥ك ٢١٪؜ بروتين' :
    `${import.meta.env.BASE_URL}images/products/EZZ-bady-namy.jpg`,
};
const defaultProductImage =
  `${import.meta.env.BASE_URL}images/products/default.jpeg`;

function BrandWordmark({ size = 'small' }: { size?: 'small' | 'large' | 'hero' }) {
  return (
    <span className={`brand-wordmark brand-wordmark--${size}`} role="img" aria-label="الهرم">
      <span className={`brand-symbols brand-symbols--${size}`} aria-hidden="true">
        <Bird className="brand-animal-icon" strokeWidth={1.7} />
        <Wheat className="brand-wheat-icon" strokeWidth={1.7} />
        <Rabbit className="brand-animal-icon" strokeWidth={1.7} />
      </span>
      <span className="brand-wordmark-text" aria-hidden="true">الهرم</span>
    </span>
  );
}

function App() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLocaleLowerCase('ar');
  const displayedGroups = useMemo(
    () =>
      groups.map((group) => ({
        ...group,
        visibleProducts: group.products.filter((product) =>
          `${product} ${group.brand} ${group.title}`.toLocaleLowerCase('ar').includes(normalizedQuery),
        ),
      })),
    [normalizedQuery],
  );
  const totalProducts = groups.reduce((sum, group) => sum + group.products.length, 0);

  return (
    <>
    <div className="page-shell" dir="rtl">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand-mark" href="#home" aria-label="الهرم، الصفحة الرئيسية">
            <BrandWordmark size="small" />
            <span className="brand-caption">خير الأرض... لقوتها</span>
          </a>
          <nav className="nav-links" aria-label="التنقل الرئيسي">
            <a href="#catalog">المنتجات</a>
            <a href="#about">عن الهرم</a>
            <a href="#contact">تواصل معنا</a>
          </nav>
          <a className="nav-contact" href="#contact">بيانات المتجر <span aria-hidden="true">←</span></a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">من قلب الأرض المصرية</span>
            <h1>غذاءٌ يصنع<br /><em>فرقاً في كل يوم.</em></h1>
            <p>اختيارات موثوقة من أعلاف الهرم والعلامات التي نعتز بتوفيرها. منتجات متنوعة للدواجن والمواشي والطيور، لتجد ما يناسب تربيتك في مكان واحد.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#catalog">تصفّح المنتجات <span>←</span></a>
              <a className="text-link" href="#contact">معلومات التواصل</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="sun-disc" />
            <div className="wordmark-scene"><BrandWordmark size="hero" /></div>
            <div className="hero-seal"><span><strong>ثقة</strong>من أرضنا<br />منذ البداية</span></div>
          </div>
        </section>

        <section className="catalog" id="catalog">
          <div className="section-heading">
            <div>
              <span className="eyebrow">دليل المنتجات</span>
              <h2>اختيارات لكل تربية</h2>
            </div>
            <p>كتالوج واضح يجمع منتجاتنا وما نوفره من علامات موثوقة. اختر المجموعة المناسبة، أو ابحث عن الصنف مباشرة.</p>
          </div>
          <div className="catalog-tools">
            <label className="search-wrap">
              <Search size={17} strokeWidth={1.7} aria-hidden="true" />
              <input
                type="search"
                aria-label="ابحث في المنتجات"
                placeholder="ابحث عن منتج أو مجموعة..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <span className="catalog-meta">تشكيلة متنوعة · {totalProducts} صنفاً معروضاً</span>
          </div>

          <div>
            {displayedGroups.map((group, index) => (
              <section className="product-group" id={group.id} key={group.id}>
                <div className="group-head">
                  <div className="group-title-wrap">
                    <span className="group-index">{String(index + 1).padStart(2, '٠')}</span>
                    <div>
                      <h3 className="group-title">{group.title}</h3>
                      {group.brand !== group.title && <div className="group-sub">العلامة التجارية: {group.brand}</div>}
                    </div>
                  </div>
                  <span className="group-count">{group.products.length ? `${group.visibleProducts.length} أصناف` : 'قريباً'}</span>
                </div>
                {group.products.length === 0 ? (
                  <div className="empty-group">
                    <span className="empty-symbol"><Package size={18} strokeWidth={1.5} /></span>
                    <div><strong>لا توجد أصناف مدرجة حالياً</strong><p>سيتم تحديث هذه المجموعة عند إضافة المنتجات.</p></div>
                  </div>
                ) : group.visibleProducts.length > 0 ? (
                  <div className="products-grid">
                    {group.visibleProducts.map((product, productIndex) => (
                      <article className="product-card" key={product}>
                        

<div
  className={`photo-slot ${
    productImages[product] ? 'has-product-photo' : 'has-default-photo'
  }`}
  aria-label={`صورة ${product}`}
>
  <img
    className={`product-photo ${
      productImages[product] ? '' : 'product-photo--default'
    }`}
    src={productImages[product] ?? defaultProductImage}
    alt={productImages[product] ? `صورة ${product}` : ''}
    aria-hidden={productImages[product] ? undefined : true}
    loading="lazy"
  />
</div>


                        {/* <div className="photo-slot" aria-label={`مساحة مخصصة لصورة ${product}`}>
                          <span className="slot-code">{String(productIndex + 1).padStart(2, '٠')} / صورة</span>
                          <span className="slot-mark"><Image size={19} strokeWidth={1.4} /></span>
                          <span className="slot-caption">مساحة صورة المنتج</span>
                        </div> */}
                        <div className="product-info">
                          <h4>{product}</h4>
                          <span className="product-type">{group.brand}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="no-results">لا توجد منتجات مطابقة في هذه المجموعة.</div>
                )}
              </section>
            ))}
          </div>
        </section>

        <section className="story-strip" id="about">
          <div className="story-emblem"><BrandWordmark size="large" /></div>
          <div className="story-copy">
            <span className="eyebrow">حكاية الهرم</span>
            <h3>اسمٌ من أرضنا، واختيارٌ لكل مربي.</h3>
            <p>الهرم يجمع خطه الخاص من الأعلاف مع علامات متنوعة تخدم احتياجات التربية. نؤمن أن الاختيار الواضح والجودة التي تعرفها هما بداية كل دورة ناجحة.</p>
          </div>
        </section>
      </main>

      <footer className="contact" id="contact">
        <div className="contact-inner">
          <div>
            <span className="eyebrow">نحن هنا لخدمتك</span>
            <h2 className="contact-title">تواصل مع الهرم</h2>
            <p className="contact-intro">نرحب باستفساراتكم عن الأصناف المتوفرة ومجموعات الأعلاف. يمكنكم التواصل معنا عبر الهاتف.</p>
          </div>
          <div className="contact-fields">
            <div className="contact-field">
              <span className="field-label">أرقام التواصل</span>
              <div className="phone-links" dir="ltr">
                <a href="tel:+201225916800">01225916800</a>
                <span aria-hidden="true">&amp;</span>
                <a href="tel:+201287561570">01287561570</a>
              </div>
            </div>
            <div className="contact-field">
              <span className="field-label"><MapPin size={12} style={{ verticalAlign: 'middle', marginLeft: 5 }} /> الموقع والعنوان</span>
              
<a
  className="field-placeholder location-link"
  href="https://maps.app.goo.gl/dWeCdeb4dKt28Xsm7?g_st=ic"
  target="_blank"
  rel="noopener noreferrer"
>
  <span> المنيا - بني محمد سلطان </span>
  <span className="location-link-hint">
    اضغط لفتح الموقع على خرائط Google ↗
  </span>
</a>

            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span><strong>الهرم</strong> · أعلاف ومنتجات تربية</span>
          <span>كتالوج تعريفي · البيانات قيد الاستكمال</span>
        </div>
      </footer>
    </div>
      {/* Permanent developer credit */}
    <div className="developer-credit" dir="ltr">
      Made by <strong>Eng. Steven Ibrahim</strong>
    </div>
  </>
  );
}

export default App;
