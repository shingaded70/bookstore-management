package com.example.bookstore.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin
public class CartController {

    private final Map<Long, CartItem> cart = new HashMap<>();

    @PostMapping("/add/{id}")
    public void addToCart(@PathVariable Long id) {
        cart.compute(id, (k, v) -> {
            if (v == null) {
                return new CartItem(id, "Book " + id, 30.0, 1);
            }
            v.quantity++;
            return v;
        });
    }

    @GetMapping
    public Collection<CartItem> getCart() {
        return cart.values();
    }

    @DeleteMapping("/remove/{id}")
    public void removeItem(@PathVariable Long id) {
        cart.remove(id);
    }

    @DeleteMapping("/clear")
    public void clearCart() {
        cart.clear();
    }

    @GetMapping("/total")
    public Map<String, Double> total() {
        double total = cart.values().stream()
                .mapToDouble(i -> i.price * i.quantity)
                .sum();
        return Map.of("total", total);
    }

    static class CartItem {
        public Long id;
        public String title;
        public double price;
        public int quantity;

        public CartItem(Long id, String title, double price, int quantity) {
            this.id = id;
            this.title = title;
            this.price = price;
            this.quantity = quantity;
        }
    }
}
