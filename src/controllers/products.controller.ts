import { NextFunction, Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { IProductsService } from '../interfaces/services/products.service.interface.js'

@injectable()
export class ProductsController {
  constructor(
    @inject('IProductsService') private productsService: IProductsService,
  ) {}

  async getProductsList(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const productsList = await this.productsService.getProductsList(req.query)

      res.json(productsList)
    } catch (error) {
      next(error)
    }
  }

  async getOneProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const id = parseInt(req.params.id)
      const product = await this.productsService.getOneProduct(id)
      res.send(product)
    } catch (error) {
      next(error)
    }
  }

  async createProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const product = await this.productsService.createProduct(req.body)
      res.send(product)
    } catch (error) {
      next(error)
    }
  }

  async updateProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const id = parseInt(req.params.id)
      const updatedProduct = await this.productsService.updateProduct(
        id,
        req.body,
      )
      res.send(updatedProduct)
    } catch (error) {
      next(error)
    }
  }

  async deleteProduct(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const id = parseInt(req.params.id)

      await this.productsService.deleteProduct(id)
      res.send({ status: 200, msg: 'Product deleted successfully.' })
    } catch (error) {
      next(error)
    }
  }
}
