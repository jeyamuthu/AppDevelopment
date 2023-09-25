import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Link } from 'react-router-dom';
function Plant() {
  return (
    <div>
    <Header/>
    <section className="featured-products">
    <h2>Plant Details</h2>
    <input type='text' className='search'></input><i class='bx bx-search'></i>
    <div className="product-list">
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/edited_blackberry/eb8ddee17ea1743be543d3617a3a72b6.jpg"
          alt="Blackberry"
          className="product-image"
        />
        <h3>Blackberry</h3>
        <p>At the end of the season, prune the Blackberry bush in order to remove old or unproductive wood. Open up the centre to let light and air in by removing any overlapping branches, this will help to prevent disease and increase growth and fruit production in the next season. </p> 

        <Link to="#">View More</Link>
      
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20201203_200613_934/76aa6e67c7982df25e8afda193fd1732.jpg"
          alt="Chamomile"
          className="product-image"
        />
        <h3>Chamomile</h3>
        <p>There are two types of Chamomile - Roman and German. Both varieties are commonly used for their medicinal properties. 

        Roman Chamomile is a perennial, growing from the same rooting stems year after year. 
        
        German Chamomile is an annual, so will have to be re-planted yearly. It will generally come back on it's own if left to self-seed in the garden. </p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/jerusalem-artichoke-3703002_1920/acfa0295179fac3d32eeb2aea37ca460.jpg"
          alt="Jerusalem Artichoke"
          className="product-image"
        />
        <h3>Jerusalem Artichoke</h3>
        <p>Think carefully about where you plant Jerusalem Artichoke as they can grow quite tall. They can be used to shade heat sensitive plants in summer, however keep them away from sun loving plants as they may shade them out.</p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20230604_205029_190/bcaf6e9ae3234fc4ac08ed89c9d100e2.jpg"
          alt="Lettuce"
          className="product-image"
        />
        <h3>Lettuce</h3>
        <p>Lettuce is a cool season crop which grows best from autumn through to spring.

        Loose Leaf lettuce grows best in full to part sun, however will also tolerate part shade. Headed lettuce, such as Iceberg requires a full sun position in order to form a head.  
        
        Lettuce can be inter planted between larger crops in warmer seasons to shade it from the sun.  </p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/apricot-871493_1920/17e6891076c1de5c11b6653fed73c841.jpg"
          alt="Apricot"
          className="product-image"
        />
        <h3>Apricot</h3>
        <p>Late autumn or early spring is the best time to transplant dormant Apricot trees. Trees, with the exception of bare-root, can be transplanted at anytime between when the ground thaws and when it freezes (so anytime if you are in a frost free climate). However, if transplanting in the heat of summer, you'll need to be diligent in watering and provide extra shade for your plant in the first few weeks after transplanting.</p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/vines-1747224_1920/493ffb6f5a6b59571e7ddb3b5ce5091b.jpg"
          alt="Vines"
          className="product-image"
        />
        <h3>Grape</h3>
        <p>Late autumn or early spring is the best time to transplant most dormant plants. Plants, with the exception of bare-root, can be transplanted at anytime between when the ground thaws and when it freezes (so anytime if you are in a frost free climate). However, if transplanting in the heat of summer, you'll need to be diligent in watering and provide extra shade for your plant in the first few weeks after transplanting. </p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/mango-51995_1920/83f3e99f0bf754b0d707b6d2aa9ab430.jpg"
          alt="Mango"
          className="product-image"
        />
        <h3>Mango</h3>
        <p>The best time to harvest Mangoes is when the pointy end of the fruit, opposite the stem, fills out and becomes slightly rounded. The fruit is usually harvested when it’s still firm and showing signs of colour. Depending on the variety, the mango should have begun to change colour from being completely green to yellow, orange or red (usually with a slight blush). The interior of the fruit should be yellow. The Mango will begin to soften after harvest.  </p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/oranges-1117628_1920/962d0a1762bbd767888d2765c7e351ac.jpg"
          alt="Orange"
          className="product-image"
        />
        <h3>Orange</h3>
        <p>Orange trees require warm, moist soil, enriched with plenty of compost. 

        Like most fruit trees, Oranges require deep, well draining soil. They will not tolerate waterlogged soil and will develop root rot as a result. Avoid planting in heavy clay unless the soil has been amended. Heavy soils can be improved by incorporating gypsum, organic matter and by mounding the soil before planting to improve drainage. </p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/redcurrant-166372_1920/9f4bf4c4e8433ce13b1914e971fa899e.jpg"
          alt="Redcurrants"
          className="product-image"
        />
        <h3>Redcurrant</h3>
        <p>Late autumn or early spring is the best time to transplant most dormant plants. Plants, with the exception of bare-root, can be transplanted at anytime between when the ground thaws and when it freezes (so anytime if you are in a frost free climate). However, if transplanting in the heat of summer, you'll need to be diligent in watering and provide extra shade for your plant in the first few weeks after transplanting. </p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/currants-447438_1920/57b1cb54f7572efdc790408e576d01e1.jpg"
          alt="White Currants"
          className="product-image"
        />
        <h3>whiteCurrants</h3>
        <p>Top dress with soil around the White Currant plant with a fresh layer of well rotted compost, some potash and some organic fertiliser. Mulch well. Use an organic fertiliser through the season, particularly if leaves start showing signs of nutrient deficiency. </p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/turnip/b88db289bc22ac51482b9c7697f28d69.jpg"
          alt="Turnip"
          className="product-image"
        />
        <h3>Turnip</h3>
        <p>Turnips are a cool season crop, usually sown in autumn through to spring when soil temperatures are approximately 10-25°C (50-77°C). 

        Turnips do not respond well to transplanting, it is best to direct sow the seeds.  </p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20200107_080202_1/7217444af935ab29ce7b93f85c094b3f.jpg"
          alt="Corn"
          className="product-image"
        />
        <h3>Corn</h3>
        <p>Corn are a cool season crop, usually sown in autumn through to spring when soil temperatures are approximately 10-25°C (50-77°C). 

       Corn do not respond well to transplanting, it is best to direct sow the seeds.  </p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
         src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/cape_goose/fc0915a6126e2b4e00f93e15fa9072b2.jpg"
          alt="Cape Gooseberry"
          className="product-image"
        />
        <h3>Cape Gooseberry</h3>
        <p>Cape Gooseberry are a cool season crop, usually sown in autumn through to spring when soil temperatures are approximately 10-25°C (50-77°C). 

        Cape Gooseberry do not respond well to transplanting, it is best to direct sow the seeds.  </p>
        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/3386358205_f6a92104be_o/91b72b890d2e10a66965e218badcfec9.jpg"
          alt="Chives"
          className="product-image"
        />
        <h3>Chives</h3>
        <p>Think carefully about where you plant Chives as they can grow quite tall. They can be used to shade heat sensitive plants in summer, however keep them away from sun loving plants as they may shade them out.</p>

        <Link to="#">View More</Link>
      </div>
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/lemonverberna/c783730161db3a774c3ac4dfc1b9bcca.jpg"
          alt="Lemon Verberna"
          className="product-image"
        />
        <h3>Lemon Verberna</h3>
        <p>Think carefully about where you plant lemonverberna as they can grow quite tall. They can be used to shade heat sensitive plants in summer, however keep them away from sun loving plants as they may shade them out.</p>

        <Link to="#">View More</Link>
      </div>

      
      <div className="product-card">
        <img
          src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/nuts-315687_1280_ReBtroD/319ec0ca58c089b13c4affebb5d338af.jpg"
          alt="Pecan"
          className="product-image"
        />
        <h3>Pecan</h3>
        <p>Pecan trees generally take 6 to 10 years after planting before they begin to produce a good crop.

        Pecans have both male and female flowers but they do not bloom at the same time, this makes pollination quite difficult. To ensure successful pollination, at least 2 trees from different types should be planted, one that has its male flowers open first and one that has its female flowers open first. Clarify with your local tree nursery before purchasing to ensure that you have the right trees.</p>
        <Link to="#">View More</Link>
      </div>
     
    
    </div>
  </section>
  <Footer/>
    
    </div>
  )
}

export default Plant