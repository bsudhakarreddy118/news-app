package com.stackroute.searchservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@RestController
@RequestMapping("api/v1")
public class SearchController {
    @Value("${api.key}")
    private String apiKey;

    private RestTemplate restTemplate;

    @Autowired
    public SearchController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/welcome")
    public String getSearchPage() {
        return "landingPage.js";
    }

    @GetMapping("/news")
    public Object getNews() {

        HttpHeaders headers = new HttpHeaders();

        //API URL
        String url = "https://newsapi.org/v2/everything?q=tesla&from=2021-05-30&sortBy=publishedAt&apiKey=c7fb3e12bd34490dac98a1d5408896fd";
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>(headers);

        return this.restTemplate.exchange(url, HttpMethod.GET, entity, Object.class);
    }

    //Rest template for sports news
    @GetMapping("/snews")
    public ResponseEntity<?> getSportsNews() {
        HttpHeaders headers = new HttpHeaders();
        //API URL
        String url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=" + apiKey;
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>(headers);

        return this.restTemplate.exchange(url, HttpMethod.GET, entity, Object.class);

    }

    @GetMapping("/countries/{countriesname}/{categoryName}")
    public ResponseEntity<?> getSportsNews(@PathVariable String countriesname, @PathVariable String categoryName) {
        String url = "https://newsapi.org/v2/top-headlines?country=" + countriesname + "&category=" + categoryName + "&apiKey=" + apiKey;
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>(headers);

        return this.restTemplate.exchange(url, HttpMethod.GET, entity, Object.class);
    }


}

