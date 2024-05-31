import { Prisma, Product } from '@prisma/client'

export interface IProductCreateData
  extends Omit<Prisma.ProductCreateInput, 'id'> {}
export interface IProductUpdateData
  extends Partial<Omit<Prisma.ProductUpdateInput, 'id'>> {}

export interface IProductsService {
  getProductsList(queryParams: Prisma.ProductFindManyArgs): Promise<Product[]>
  getOneProduct(id: number): Promise<Product | null>
  createProduct(data: IProductCreateData): Promise<Product>
  updateProduct(id: number, data: IProductUpdateData): Promise<Product>
  deleteProduct(id: number): Promise<Product>
}
