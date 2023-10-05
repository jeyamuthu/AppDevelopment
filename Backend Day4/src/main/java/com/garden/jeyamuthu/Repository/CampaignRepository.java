package com.garden.jeyamuthu.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.garden.jeyamuthu.Model.Campaign;




public interface CampaignRepository extends JpaRepository<Campaign,Long> {
//	  List<Template> findByPid(Long id);

}