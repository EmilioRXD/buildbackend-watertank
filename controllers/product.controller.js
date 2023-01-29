import { request } from "express";
import Product from "../models/product.model.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    return res.status(500).json({
      mesagge: error.mesagge
    });
  }
};
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price
    } = req.body;
    const product = new Product({
      name,
      description,
      price
    });
    await product.save();
    return res.json(product);
  } catch (error) {
    return res.status(500).json({
      mesagge: error.mesagge
    });
  }
};
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      price: req.params.id
    });
    if (!product) return res.satus(404).json({
      message: "Element does not exists"
    });
    return res.json(product);
  } catch (error) {
    return res.status(500).json({
      mesagge: error.mesagge
    });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const query = {
      price: req.params.id
    };
    const productUpdate = await Product.findOneAndUpdate(query, req.body, {
      new: true
    });
    return res.json(productUpdate);
  } catch (error) {
    return res.status(500).json({
      mesagge: error.mesagge
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      price: req.params.id
    });
    if (!product) return res.satus(404).json({
      message: "Element does not exists"
    });
    return res.json(product);
  } catch (error) {
    return res.status(500).json({
      mesagge: error.mesagge
    });
  }
};