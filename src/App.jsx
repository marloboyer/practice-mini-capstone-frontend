function Header() {
  return (
    <h1>
      <a href="#">Home</a> | <a href="products_new">ProductsNew</a> |<a href="products_index">ProductIndex</a>
    </h1>
  );
}

function ProductsNew() {
  return (
    <div>
      <h2>New Product</h2>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name"></input>
        <label for="description">Description</label>
        <input type="text" id="description" name="description"></input>
        <label for="price">Price</label>
        <input type="text" id="price" name="price"></input>
        <label for="image_url">Image URL</label>
        <input type="url" id="homepage" name="homepage"></input>
      </form>
    </div>
  );
}

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
