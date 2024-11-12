class ProductBuilder {
  #name;
  #category_id;
  #manufacturer_id;
  #description;
  #price;
  #photo;
  #photos;

  constructor(
    name,
    category_id,
    manufacturer_id,
    description,
    price,
    photo,
    photos
  ) {
    this.#name = name;
    this.#category_id = category_id;
    this.#manufacturer_id = manufacturer_id;
    this.#description = description;
    this.#price = price;
    this.#photo = photo;
    this.#photos = photos;
  }

  setName(name) {
    this.#name = name;
    return this;
  }
  setCategory_id(category_id) {
    this.#category_id = category_id;
    return this;
  }
  setManufacturer_id(manufacturer_id) {
    this.#manufacturer_id = manufacturer_id;
    return this;
  }
  setDescription(description) {
    this.#description = description;
    return this;
  }
  setPrice(price) {
    this.#price = price;
    return this;
  }
  setPhoto(photo) {
    this.#photo = photo;
    return this;
  }
  setPhotos(photos) {
    this.#photos = photos;
    return this;
  }
  build() {
    return {
      name: this.#name,
      category_id: this.#category_id,
      manufacturer_id: this.#manufacturer_id,
      description: this.#description,
      price: this.#price,
      photo: this.#photo,
      photos: this.#photos,
    };
  }
}
export const productBuilder = new ProductBuilder();
