package com.example.bookstore;

import com.example.bookstore.model.User;
import com.example.bookstore.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner load(UserRepository repo) {
        return args -> {
            if (repo.findByEmail("admin@bookstore.com").isEmpty()) {
                User admin = new User();
                admin.setEmail("admin@bookstore.com");
                admin.setName("Admin");
                admin.setPasswordHash(new BCryptPasswordEncoder().encode("admin123"));
                admin.setRole("ROLE_ADMIN");
                repo.save(admin);
            }
        };
    }
}
