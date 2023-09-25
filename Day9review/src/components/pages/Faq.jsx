import React from 'react';
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Header from '../layout/Header';

function Faq() {
  return (
    <div>
    <Header/>
    <div>
      <section id="faq" className="py-md-5">
        <h2 className="my-5 text-center">FAQ</h2>
        <div className='container'>
        <div className="accordion w-75 mx-auto" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How often should I water my plants?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The frequency of watering your plants can vary depending on the type of plant, soil, and weather conditions.
                It's essential to check the soil's moisture level regularly. As a general rule, water your plants when the top inch of soil feels dry.
                However, some plants prefer to dry out partially between waterings, while others like consistently moist soil.
                Research the specific needs of your plants for the best results.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What are the best plants for low-light indoor spaces?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Not all indoor spaces receive ample sunlight. If you have a low-light area in your home, consider low-light-tolerant plants like snake plants, pothos, peace lilies, or ZZ plants.
                These plants can thrive with minimal sunlight and are perfect for brightening up darker corners of your home.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How can I prevent common garden pests and diseases?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Preventing garden pests and diseases is crucial for a healthy garden. Some preventive measures include:
                <ul>
                  <li>Regularly inspecting your plants for signs of pests or diseases.</li>
                  <li>Promoting good air circulation around plants.</li>
                  <li>Using organic pesticides or insecticidal soaps when necessary.</li>
                  <li>Properly spacing and pruning plants to reduce overcrowding.</li>
                  <li>Maintaining healthy soil with good drainage.</li>
                  <li>Rotating crops to reduce the risk of soil-borne diseases.</li>
                  <li>Researching the specific pests and diseases common in your region for targeted prevention.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Fourth Question */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                What should I do to prepare my garden for the winter season?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Preparing your garden for winter can help protect your plants from cold temperatures and frost damage. Here are some winter preparation tips:
                <ul>
                  <li>Mulch the soil around your plants to insulate them from the cold.</li>
                  <li>Trim back any dead or damaged branches.</li>
                  <li>Bring sensitive potted plants indoors or into a sheltered area.</li>
                  <li>Clean and store garden tools properly.</li>
                  <li>Drain and store hoses to prevent freezing and damage.</li>
                  <li>Consider planting cold-tolerant varieties or cover plants with frost cloth.</li>
                </ul>
              </div>
            </div>
            </div>
            <div className="accordion-item">
  <h2 className="accordion-header">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseFive"
      aria-expanded="false"
      aria-controls="collapseFive"
    >
      How do I choose the right soil for my plants?
    </button>
  </h2>
  <div
    id="collapseFive"
    className="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div className="accordion-body">
      Selecting the right soil is essential for the health of your plants. Consider the following factors:
      <ul>
        <li>Understand your plant's specific soil requirements in terms of acidity (pH) and drainage.</li>
        <li>Use a high-quality potting mix for container plants.</li>
        <li>Amend garden soil with organic matter like compost for improved fertility and moisture retention.</li>
        <li>Regularly test your soil's pH and nutrient levels to ensure it meets your plants' needs.</li>
      </ul>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseSix"
      aria-expanded="false"
      aria-controls="collapseSix"
    >
      What are some natural ways to fertilize my garden?
    </button>
  </h2>
  <div
    id="collapseSix"
    className="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div className="accordion-body">
      Natural fertilizers can enrich your garden's soil without harmful chemicals. Consider these options:
      <ul>
        <li>Compost: Create your compost pile using kitchen scraps and yard waste.</li>
        <li>Manure: Well-aged animal manure provides essential nutrients.</li>
        <li>Coffee grounds: Used coffee grounds can improve soil texture and add nutrients.</li>
        <li>Bone meal: A natural source of phosphorus for flowering plants.</li>
        <li>Fish emulsion: A liquid fertilizer rich in nutrients derived from fish.</li>
      </ul>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseSeven"
      aria-expanded="false"
      aria-controls="collapseSeven"
    >
      How can I create a garden that attracts beneficial insects?
    </button>
  </h2>
  <div
    id="collapseSeven"
    className="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div className="accordion-body">
      Beneficial insects like ladybugs and bees play a vital role in pollination and pest control. To attract them:
      <ul>
        <li>Plant native flowers that provide nectar and pollen for pollinators.</li>
        <li>Include a variety of flowering plants with different bloom times to offer food year-round.</li>
        <li>Avoid using pesticides that can harm beneficial insects.</li>
        <li>Provide shelter and nesting sites for insects, such as brush piles or insect hotels.</li>
        <li>Maintain a diverse garden ecosystem with a mix of plants and habitats.</li>
      </ul>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
}

export default Faq;
