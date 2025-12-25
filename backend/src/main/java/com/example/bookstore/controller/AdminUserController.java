package com.example.bookstore.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/admin/users")
@CrossOrigin
public class AdminUserController {

    private final List<Map<String, String>> users = new ArrayList<>();

    @PostMapping
    public void addUser(@RequestBody Map<String, String> user) {
        users.add(user);
    }

    @DeleteMapping("/{index}")
    public void deleteUser(@PathVariable int index) {
        users.remove(index);
    }

    @GetMapping
    public List<Map<String, String>> getUsers() {
        return users;
    }
}
