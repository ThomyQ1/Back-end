class Product {
  static events = [];

  constructor(data) {
    this.id =
      Product.events.length === 0
        ? 1
        : Product.events[Product.events.length - 1].id + 1;
    this.title = data.title;
    this.photo = data.photo;
    this.price = data.price;
    this.stock = data.stock;
  }
}

class User {
  static events = [];

  constructor(data) {
    this.id =
      User.events.length === 0 ? 1 : User.events[User.events.length - 1].id + 1;
    this.name = data.name;
    this.photo = data.photo;
    this.email = data.email;
  }
}

class ProductManager {
  constructor() {
    this._products = [];
  }

  create(data) {
    const product = new Product(data);
    product.id = this._products.length + 1;
    this._products.push(product);
  }

  read() {
    return this._products.map((product) => ({ ...product }));
  }

  readOne(product_id) {
    const product = this._products.find((product) => product.id === product_id);
    return product ? { ...product } : null;
  }
}
class UserManager {
  constructor() {
    this._users = [];
  }

  create(data) {
    const user = new User(data);
    user.id = this._users.length + 1;
    this._users.push(user);
  }

  read() {
    return this._users.map((user) => ({ ...user }));
  }

  readOne(user_id) {
    const user = this._users.find((user) => user.id === user_id);
    return user ? { ...user } : null;
  }
}

const ProductManagerInstance = new ProductManager();
const UserManagerInstance = new UserManager();

ProductManagerInstance.create({
  title: "Azucar",
  photo: "/desktop/imagenazucar.jpg",
  price: 1000,
  stock: 10,
});

UserManagerInstance.create({
  name: "Javier Maciel",
  photo: "/desktop/imagenjavier/",
  email: "javimaciel@gmail.com",
});

ProductManagerInstance.create({
  title: "Caja de Jugos Tang Naranja",
  photo: "/desktop/cajajugostang.jpg",
  price: 800,
  stock: 35,
});

UserManagerInstance.create({
  name: "Miguel Ferrari",
  photo: "/desktop/imagenferrari/",
  email: "mferrari@outlook.com.ar",
});

console.log(ProductManagerInstance.readOne(1));
console.log(UserManagerInstance.readOne(1));
console.log(ProductManagerInstance.readOne(2));
console.log(UserManagerInstance.readOne(2));

