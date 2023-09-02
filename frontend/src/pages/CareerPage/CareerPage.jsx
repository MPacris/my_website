import React from "react";
import './CareerPage.css'

const CareerPage = () => {



  return (
<div>
    <div>
    <h1>Churches</h1>
    </div>

    <div class="card-container">  
      <div class="card">
        <div class="front">
          <img src="/assets/IRELAND.JPG" alt="ireland" class="image"/>
        </div>
        <div class="back">
          <div class="details">
            <div class="caption">
              " Saint Patrick's Cathedral in Dublin, Ireland, founded in 1191 as a Roman Catholic cathedral, is currently the national cathedral of the Church of Ireland. Christ Church Cathedral, also a Church of Ireland cathedral in Dublin, is designated as the local cathedral of the Diocese of Dublin and Glendalough "
            </div>
            <h2>St. Patrick's Cathedral</h2>
            <span>Dublin, Ireland</span>

          </div>
        </div>
      </div>

      <div class="card">
        <div class="front">
          <img src="./assets/PHILIPPINES.JPG"alt="Philippines" class="image" />
        </div>
        <div class="back">
          <div class="details">
            <div class="caption">
              " The Saint Augustine Church, commonly known as the Paoay Church, is a Roman Catholic church in the Municipality of Paoay, Ilocos Norte in the Philippines. Completed in 1710, the church is famous for its distinct architecture highlighted by the enormous buttresses on the sides and back of the building. "
            </div>
            <h2>Iglesia de San Agustín de Paoay</h2>
            <span>Paoay, Ilocos Norte, Philippines</span>


          </div>
        </div>
      </div>

      <div class="card">
        <div class="front">
            <img src="./assets/PARIS.jpeg"alt="Paris" class="image" />
        </div>
        <div class="back">
          <div class="details">
            <div class="caption">
              " Sacré-Cœur Basilica is located at the summit of the butte of Montmartre. From its dome two hundred meters above the Seine, the basilica overlooks the entire city of Paris and its suburbs. It is the second most popular tourist destination in the capital after the Eiffel Tower.
              The basilica was first proposed by Felix Fournier, the Bishop of Nantes, in 1870 after the defeat of France and the capture of Napoleon III at the Battle of Sedan in the Franco-Prussian War. "
            </div>
            <h2>Basilica of Sacré-Cœur de Montmartre</h2>
            <span>Paris, France</span>


          </div>
        </div>
      </div>
    </div>


  </div>

  );
};

export default CareerPage;