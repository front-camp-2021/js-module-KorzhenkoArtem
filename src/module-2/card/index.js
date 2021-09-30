export default class Card {
  element;

  constructor({
    id = "",
    images = [],
    title = "",
    rating = 0,
    price = 0,
    category = "",
    brand = "",
  } = {}) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.brand = brand;

    this.render();
  }

  getTemplate() {
    return `           
    <div id="product-${this.id}" class="card-container">
    <div class="card-container-inner">
      <div class="card-top">
        <div class="card-image">
          <img src="${this.images[0]}" alt="Les Paul Custom" />
        </div>
        <div class="rate-and-price">
          <span class="rate">${this.rating}</span>
          <span class="price">$${this.price}</span>
        </div>
        <div class="card-description">
          <h4>${this.title}</h4>
          <p>The Iconic Les Paul at Its Classiest</p>
        </div>
      </div>
      <div class="card-bottom">
        <a href="#" class="wishlist">
          <span>Wishlist</span>
         </a>
        <a href="#" class="add-to-cart">
          <span>Add to cart</span></a>
      </div>
    </div>
  </div>`;
  }

  render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
