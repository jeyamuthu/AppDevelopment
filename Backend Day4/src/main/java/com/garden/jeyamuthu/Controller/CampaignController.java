package com.garden.jeyamuthu.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.garden.jeyamuthu.Model.Campaign;
import com.garden.jeyamuthu.Service.CampaignService;
import com.garden.jeyamuthu.dto.request.CampaignRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/Campaign")	
@RequiredArgsConstructor
public class CampaignController {
	
	private final CampaignService templateService;
	
	@PostMapping("/create")
	  public ResponseEntity<String> register(
	      @RequestBody CampaignRequest request
	  ) {
	      boolean isSaved = templateService.registertemp(request);
	        return isSaved ? ResponseEntity.status(201).body("Campaign created successfully!")
	                : ResponseEntity.badRequest().build();
	  }
	
	@GetMapping("/get")
	 public ResponseEntity<List<Campaign>> getAllProducts() {
        List<Campaign> productList = templateService.getAllProducts();
        return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
                : ResponseEntity.noContent().build();
    }
	
//	  @PutMapping("/edit/{pid}")
//	    public ResponseEntity<TemplateResponse> updateProduct(@RequestBody TemplateRequest request, @PathVariable Long pid) {
//	        TemplateResponse productResponse = templateService.updateProduct(request, pid);
//	        return productResponse != null ? ResponseEntity.ok().body(productResponse) : ResponseEntity.notFound().build();
//	    }
	

}