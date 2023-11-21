
class ProductManager {

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        const id = this.products.length + 1;
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("ingrese todos los parametros del producto (titulo, descripción, precio, link a imagen, codigo unico y stock")
        } else if (this.products.some(e => e.code === code)) {
            throw new Error(`el codigo ingresado: ${code}  ya existe, por favor cambielo`)
        } else {
            this.products.push(product);
            return product;
        }
    }

    getProducts() {
        try {
            return this.products
        } catch (error) {
            return []
        }
    }

    getProductByID(id) {
        const products = this.getProducts()
        const product = products.find((product) => product.id == id)
        if (!product) {
            return "no existe un producto con este codigo"
        } else {
            return product
        }
    }

}

const pm = new ProductManager();

pm.addProduct("manzana", "roja", 500, "link1", 100, 100);
pm.addProduct("banana", "amarilla", 200, "link2", 101, 200);
pm.addProduct("ajo", "italiano", 100, "link3", 102, 300);
pm.addProduct("papa", "lavada", 90, "link4", 104, 200);

console.log(pm.getProducts())
console.log(pm.getProductByID(4));