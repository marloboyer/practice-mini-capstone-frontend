function Header() {
  return (
    <h1>
      <a href="#">Home</a> | <a href="products_new">ProductsNew</a> |<a href="products_index">ProductIndex</a>
    </h1>
  );
}

function ProductsNew() {}

function ProductsIndex() {}

function Footer() {
  return (
    <footer>
      <p> Copywrite 2023 </p>
    </footer>
  );
}

function Content() {
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
