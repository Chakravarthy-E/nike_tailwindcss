import {
  Hero,
  Services,
  SpecialOffer,
  CustomerReviews,
  Footer,
  PopulerProduct,
  SuperQuality,
  Subscribe,
} from "./sections/index.js";
import Nav from "./components/Nav.jsx";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b bg-black">
      <Hero />
    </section>
    <section className="padding bg-black">
      <PopulerProduct />
    </section>
    <section className="padding bg-black">
      <SuperQuality />
    </section>
    <section className="padding-x py-10 bg-black">
      <Services />
    </section>
    <section className="padding bg-black">
      <SpecialOffer />
    </section>
    <section className="padding bg-black ">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full bg-black">
      <Subscribe />
    </section>
    <section className="padding-x bg-black padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
