import { NextFunction, Request, Response } from 'express'

import productsService from '../services/domain/products.service.js'

class ProductsController {
  async getProductsList(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const productsList = await productsService.getProductsList(req.query)

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
      const product = await productsService.getOneProduct(id)
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
      const product = await productsService.createProduct(req.body)
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
      const updatedProduct = await productsService.updateProduct(id, req.body)
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

      await productsService.deleteProduct(id)
      res.send({ status: 200, msg: 'Product deleted successfully.' })
    } catch (error) {
      next(error)
    }
  }
}

export default new ProductsController()
