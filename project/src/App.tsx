import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Leaf,
  Menu,
  Package,
  PenLine,
  Search,
  ShoppingBag,
  Sparkles,
  Truck,
  X,
} from 'lucide-react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: string;
  reviews: number;
  image: string;
  badge?: string;
};

const images = {
  hero: 'https://images.pexels.com/photos/12516294/pexels-photo-12516294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  notebook: 'https://images.pexels.com/photos/5712460/pexels-photo-5712460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  planning: 'https://images.pexels.com/photos/5124882/pexels-photo-5124882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  desk: 'https://images.pexels.com/photos/35051393/pexels-photo-35051393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  writing: 'https://images.pexels.com/photos/7319184/pexels-photo-7319184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const products: Product[] = [
  { id: 1, name: 'Canvas Hardcover Journal', category: 'Notebooks', price: 24, rating: '5.0', reviews: 128, image: images.notebook, badge: 'Best seller' },
  { id: 2, name: 'Oak Monitor Stand', category: 'Desk essentials', price: 65, rating: '4.8', reviews: 84, image: images.desk },
  { id: 3, name: 'Brass Mechanical Pencil', category: 'Writing tools', price: 35, rating: '5.0', reviews: 210, image: images.writing },
  { id: 4, name: 'Linen Bound Planner', category: 'Planning', price: 42, rating: '4.9', reviews: 156, image: images.planning },
];

const categories = [
  { name: 'Notebooks', image: images.notebook, count: '18 pieces' },
  { name: 'Writing tools', image: images.writing, count: '24 pieces' },
  { name: 'Desk essentials', image: images.desk, count: '12 pieces' },
  { name: 'Planning', image: images.planning, count: '16 pieces' },
];

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [toast, setToast] = useState('');

  const filteredProducts = useMemo(
    () => products.filter((product) => `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const addToCart = (product: Product) => {
    setCart((current) => [...current, product]);
    setToast(`${product.name} added to your bag`);
    window.setTimeout(() => setToast(''), 2600);
  };

  const removeFromCart = (index: number) => setCart((current) => current.filter((_, itemIndex) => itemIndex !== index));
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <div className="announcement">Free shipping on orders over $75 <span>•</span> Designed for focus</div>
      <header className="sticky top-0 z-40 border-b border-sage/10 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="flex items-center gap-2 text-sage" aria-label="StudySpace home">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-sage text-cream"><PenLine size={19} strokeWidth={2.2} /></span>
            <span className="font-display text-xl font-semibold tracking-[-0.03em]">StudySpace</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            <a href="#shop" className="nav-link">Shop</a>
            <a href="#categories" className="nav-link">Collections</a>
            <a href="#story" className="nav-link">Our story</a>
          </nav>
          <div className="flex items-center gap-1 text-sage">
            <button onClick={() => setSearchOpen((value) => !value)} className="icon-button" aria-label="Search"><Search size={19} /></button>
            <button className="icon-button hidden sm:inline-flex" aria-label="Your profile"><CircleUserRound size={19} /></button>
            <button onClick={() => setCartOpen(true)} className="icon-button relative" aria-label="Shopping bag">
              <ShoppingBag size={19} />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </button>
            <button onClick={() => setMobileOpen((value) => !value)} className="icon-button md:hidden" aria-label="Open menu"><Menu size={21} /></button>
          </div>
        </div>
        {searchOpen && <div className="border-t border-sage/10 px-5 py-4 lg:px-10"><div className="mx-auto flex max-w-7xl items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"><Search size={18} className="text-muted" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search journals, planners, desk essentials..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted/70" /><button onClick={() => { setQuery(''); setSearchOpen(false); }} aria-label="Close search"><X size={18} /></button></div></div>}
        {mobileOpen && <nav className="border-t border-sage/10 px-5 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm font-medium"><a href="#shop" onClick={() => setMobileOpen(false)}>Shop</a><a href="#categories" onClick={() => setMobileOpen(false)}>Collections</a><a href="#story" onClick={() => setMobileOpen(false)}>Our story</a></div></nav>}
      </header>

      <main id="top" className="mx-auto max-w-7xl px-5 lg:px-10">
        <section className="hero-section">
          <div className="relative z-10 max-w-xl px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-24">
            <div className="eyebrow"><Sparkles size={14} /> Tools for a quieter mind</div>
            <h1 className="mt-6 font-display text-[clamp(2.7rem,6vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.065em] text-ink">Make room for <em className="text-sage">good work.</em></h1>
            <p className="mt-6 max-w-md text-base leading-7 text-muted sm:text-lg">Thoughtfully designed stationery and desk essentials for the ideas that deserve your full attention.</p>
            <a href="#shop" className="button-primary mt-8 inline-flex">Explore the collection <ArrowRight size={17} /></a>
          </div>
          <div className="hero-photo" style={{ backgroundImage: `url(${images.hero})` }} aria-label="Warm study desk with notebooks and a lamp" />
          <div className="hero-stamp"><span>EST.</span><strong>2024</strong><small>FOR FOCUSED MINDS</small></div>
        </section>

        <section id="categories" className="section-space">
          <div className="section-heading"><div><p className="eyebrow">Find your focus</p><h2>Shop by ritual</h2></div><a href="#shop" className="text-link">View all <ArrowRight size={16} /></a></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {categories.map((category) => <a href="#shop" key={category.name} className="category-card group"><div className="category-image" style={{ backgroundImage: `url(${category.image})` }} /><div className="p-4 sm:p-5"><h3>{category.name}</h3><p>{category.count}</p></div><ArrowRight className="category-arrow" size={18} /></a>)}
          </div>
        </section>

        <section id="shop" className="section-space pt-2">
          <div className="section-heading"><div><p className="eyebrow">The essentials</p><h2>{query ? 'Search results' : 'Made for your desk'}</h2></div>{query && <button className="text-link" onClick={() => setQuery('')}>Clear search <X size={15} /></button>}</div>
          {filteredProducts.length === 0 ? <div className="rounded-2xl bg-white p-12 text-center text-muted">No pieces match that search yet.</div> : <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={addToCart} />)}</div>}
        </section>

        <section id="story" className="story-section"><div className="story-image" style={{ backgroundImage: `url(${images.planning})` }} /><div className="p-8 sm:p-12 lg:p-16"><p className="eyebrow">A slower way to work</p><h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.05] tracking-[-0.05em] sm:text-5xl">Your desk should feel like an invitation.</h2><p className="mt-6 max-w-md text-base leading-7 text-muted">We believe the objects around you shape the work within you. That’s why every StudySpace piece is chosen to bring a little more intention to the everyday.</p><a href="#newsletter" className="text-link mt-8 inline-flex">Read our story <ArrowRight size={16} /></a></div></section>

        <section className="perks-section"><div><Leaf size={22} /><strong>Thoughtfully sourced</strong><span>Materials chosen with care</span></div><div><Truck size={22} /><strong>Simple delivery</strong><span>Free shipping over $75</span></div><div><Package size={22} /><strong>Made to last</strong><span>Quality you can feel</span></div></section>

        <section id="newsletter" className="newsletter-section"><div className="eyebrow justify-center">The focus letter</div><h2>Good things, occasionally.</h2><p>New pieces, desk rituals, and a little encouragement for your inbox. Plus 10% off your first order.</p>{subscribed ? <div className="success-message"><Check size={18} /> You’re on the list. Welcome to the quiet side.</div> : <form onSubmit={(event) => { event.preventDefault(); setSubscribed(true); }} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"><input type="email" required placeholder="Your email address" className="newsletter-input" /><button className="button-primary justify-center">Subscribe <ArrowRight size={16} /></button></form>}</section>
      </main>

      <footer className="mt-20 border-t border-sage/10 bg-white/50"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10"><div><a href="#top" className="font-display text-lg font-semibold text-sage">StudySpace</a><p className="mt-1 text-xs text-muted">Designed for focus, made for living.</p></div><div className="flex gap-6 text-xs font-medium text-muted"><a href="#shop" className="nav-link">Shop</a><a href="#story" className="nav-link">Shipping</a><a href="#newsletter" className="nav-link">Contact</a></div><p className="text-xs text-muted">© 2024 StudySpace</p></div></footer>

      {cartOpen && <div className="fixed inset-0 z-50"><button aria-label="Close cart" onClick={() => setCartOpen(false)} className="absolute inset-0 bg-ink/25 backdrop-blur-sm" /><aside className="cart-drawer"><div className="flex items-center justify-between border-b border-sage/10 pb-5"><div><p className="eyebrow">Your selection</p><h2 className="mt-1 font-display text-2xl">Shopping bag</h2></div><button onClick={() => setCartOpen(false)} className="icon-button" aria-label="Close cart"><X size={20} /></button></div>{cart.length === 0 ? <div className="grid flex-1 place-items-center text-center text-muted"><div><ShoppingBag className="mx-auto mb-4 text-sage/40" size={36} /><p>Your bag is waiting for something good.</p><a href="#shop" onClick={() => setCartOpen(false)} className="text-link mt-4 inline-flex">Browse essentials <ArrowRight size={15} /></a></div></div> : <><div className="flex-1 space-y-4 overflow-y-auto py-6">{cart.map((product, index) => <div key={`${product.id}-${index}`} className="flex gap-3"><img src={product.image} alt={product.name} className="h-20 w-20 rounded-xl object-cover" /><div className="flex-1"><div className="flex justify-between gap-3"><p className="text-sm font-medium">{product.name}</p><span className="text-sm font-semibold">${product.price}</span></div><p className="mt-1 text-xs text-muted">{product.category}</p><button onClick={() => removeFromCart(index)} className="mt-2 text-xs text-muted underline underline-offset-2">Remove</button></div></div>)}</div><div className="border-t border-sage/10 pt-5"><div className="mb-4 flex justify-between text-sm"><span className="text-muted">Subtotal</span><strong>${total.toFixed(2)}</strong></div><button className="button-primary w-full justify-center">Checkout <ArrowRight size={16} /></button></div></>}</aside></div>}
      {toast && <div className="toast"><Check size={16} /> {toast}</div>}
    </div>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: (product: Product) => void }) {
  return <article className="product-card group"><div className="product-image-wrap"><img src={product.image} alt={product.name} className="product-image" />{product.badge && <span className="product-badge">{product.badge}</span>}<button onClick={() => onAdd(product)} className="quick-add">Add to bag <ArrowRight size={15} /></button></div><div className="mt-4 flex items-start justify-between gap-3"><div><h3 className="text-sm font-medium text-ink sm:text-base">{product.name}</h3><p className="mt-1 text-xs text-muted">{product.category}</p></div><span className="whitespace-nowrap text-sm font-semibold text-sage">${product.price}</span></div><div className="mt-3 flex items-center gap-2 text-xs text-muted"><span className="tracking-[0.16em] text-sage">★★★★★</span><span>{product.rating} · {product.reviews}</span></div></article>;
}

export default App;
