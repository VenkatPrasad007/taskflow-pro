package com.taskflow.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI taskFlowOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("TaskFlow Pro API")
                        .description("A Production-grade Task Management REST API"
                                + " Built with Java 17 and Spring Boot 3")
                        .version("v1.0.0")
                        .contact(new Contact()
                                .name("M Venkat Prasad")
                                .url("https://github.com/VenkatPrasad007")
                                .email("vip752020@gmail.com")))
                .servers(List.of(
                        new Server()
                                .url("http://localhost:8080")
                                .description("Local Development")));
    }
}
