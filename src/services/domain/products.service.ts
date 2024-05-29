import { Prisma, Product } from '@prisma/client'
import prisma from '../db/prisma.js'

interface IProductCreateData extends Omit<Prisma.ProductCreateInput, 'id'> {}
interface IProductUpdateData
  extends Partial<Omit<Prisma.ProductUpdateInput, 'id'>> {}

class ProductsService {
  async getProductsList(
    queryParams?: Prisma.ProductFindManyArgs,
  ): Promise<Product[]> {
    return prisma.product.findMany(queryParams)
  }

  async getOneProduct(id: number): Promise<Product | null> {
    return prisma.product.findUnique({
      where: { id: +id },
    })
  }

  async createProduct(data: IProductCreateData): Promise<Product> {
    return prisma.product.create({
      data,
    })
  }

  async updateProduct(id: number, data: IProductUpdateData): Promise<Product> {
    return prisma.product.update({
      where: {
        id: +id,
      },
      data,
    })
  }

  async deleteProduct(id: number): Promise<Product> {
    return prisma.product.delete({
      where: { id: +id },
    })
  }
}

export default new ProductsService()
