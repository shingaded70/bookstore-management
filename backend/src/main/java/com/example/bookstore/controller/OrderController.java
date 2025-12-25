package com.example.bookstore.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin
public class OrderController {

    private final List<Map<String, Object>> orders = new ArrayList<>();

    @PostMapping
    public void placeOrder(@RequestBody List<Map<String, Object>> cart) {
        orders.add(Map.of(
                "id", orders.size() + 1,
                "items", cart,
                "date", new Date()
        ));
    }

    @GetMapping
    public List<Map<String, Object>> getOrders() {
        return orders;
    }
}
