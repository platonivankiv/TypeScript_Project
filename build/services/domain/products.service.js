import prisma from '../db/prisma.js';
class ProductsService {
    async getProductsList(queryParams) {
        return prisma.product.findMany(queryParams);
    }
    async getOneProduct(id) {
        return prisma.product.findUnique({
            where: { id: +id },
        });
    }
    async createProduct(data) {
        return prisma.product.create({
            data,
        });
    }
    async updateProduct(id, data) {
        return prisma.product.update({
            where: {
                id: +id,
            },
            data,
        });
    }
    async deleteProduct(id) {
        return prisma.product.delete({
            where: { id: +id },
        });
    }
}
export default new ProductsService();
//# sourceMappingURL=products.service.js.map