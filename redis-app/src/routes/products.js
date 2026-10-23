import { Router } from "express";
import { cached } from "../cache.js";
import { getProductsSlowly } from "../data.js";

export const productsRouter = Router();

// GET /products - the product list.
// TASK 3: serve this through cached("products:all", 60, getProductsSlowly) so repeated
// reads come from Redis instead of calling the slow data source every time.
productsRouter.get("/", async (req, res, next) => {
  try {
    // TODO (Task 3): replace this direct call with cached("products:all", 60, getProductsSlowly)
    const products = await getProductsSlowly();

    res.json(products);
  } catch (err) {
    next(err);
  }
});
