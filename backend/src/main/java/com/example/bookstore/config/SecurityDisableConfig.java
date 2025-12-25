package com.example.bookstore.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@Configuration
@EnableAutoConfiguration(exclude = {
        SecurityAutoConfiguration.class
})
public class SecurityDisableConfig {
}
