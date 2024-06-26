package com.example.Generative;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TextController {
    @GetMapping("/api/text")
    public String getText() {
        return "Hello, this is a placeholder text.";
    }
}
