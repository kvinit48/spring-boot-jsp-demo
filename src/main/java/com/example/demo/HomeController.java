package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("message", "Hello from Spring Boot with HTML!");
        model.addAttribute("timestamp", LocalDateTime.now());
        model.addAttribute("appName", "Simple Spring App");
        return "index"; // This looks for index.html in static or templates
    }

    @GetMapping("/api/hello")
    @ResponseBody
    public Map<String, String> hello() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from API!");
        response.put("status", "success");
        response.put("time", LocalDateTime.now().toString());
        return response;
    }

    @GetMapping("/api/health")
    @ResponseBody
    public Map<String, String> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("service", "spring-boot-app");
        return response;
    }
}