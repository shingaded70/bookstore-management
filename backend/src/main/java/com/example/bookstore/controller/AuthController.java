package com.example.bookstore.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AuthController {

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> req) {
        String email = req.get("email");

        if ("admin@bookstore.com".equals(email)) {
            return Map.of("email", email, "role", "ADMIN");
        }
        return Map.of("email", email, "role", "USER");
    }
}
