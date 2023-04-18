export function ProductsNew() {
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
