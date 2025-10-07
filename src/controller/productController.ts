import { Request, Response} from 'express';
import {Product} from '../models/Product';

const products: Product[] = [
    {id: 1, name: 'Mouse Logitech Sem Fio', price: 5500.50},
    {id: 2, name: 'Teclado Razer Nitro', price: 120.75},
    {id: 3, name: 'Mousepad Red 1', price: 350.00}
];

export const getAllProducts = (req: Request, res: Response) => {
    return res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
    const productId= parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado'})
    }
    return res.json(product);
};