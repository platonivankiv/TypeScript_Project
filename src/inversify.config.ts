import { Container } from 'inversify'
import 'reflect-metadata'
import { ProductsController } from './controllers/products.controller.js'
import { IProductsService } from './interfaces/services/products.service.interface.js'
import { ProductsService } from './services/domain/products.service.js'

const container = new Container()
container.bind<IProductsService>('IProductsService').to(ProductsService)
container.bind<ProductsController>(ProductsController).toSelf()

export { container }
