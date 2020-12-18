import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import step3 from './step1.png';
import step2 from './step2.png';
import step1 from './step3.png';
import step4 from './step4.png';

export default function Home(){
    return (
      <div className="bg-home">
        <div>

        <section>
              <article className="home__hero">
                <div className="home__hero--text">
                  <h2 className="heading heading--level1">
                    Explore foods from around the globe
                    <span className="gradient--text"></span>
                  </h2>
                </div>

                {/* <div class="city__list-bg">abcd</div> */}

                <div class="card card-image">
                    <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4" style= {{justifyContent: "center", textAlign: "center"}}>
                        <div>
                            <h6 class="purple-text"><i class="fas fa-plane" style= {{fontSize: "26px"}} ></i><strong> Explore</strong></h6>
                            <h3 class="card-title py-3 font-weight-bold" style= {{fontSize: "24px"}}><strong>Find your favourite food here!</strong></h3>
                            <p class="pb-3" style= {{fontSize: "24px"}}>Nothing brings people together like good food</p>
                            <a href="./Search" class="buttonSearch"><i class="far fa-clone left"></i>  Search Now </a>
                        </div>
                    </div>
                </div>

                <div class="card card-image2" style= {{ marginTop: "180px" }}>
                    <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4" style= {{justifyContent: "center", textAlign: "center"}}>
                        <div>
                            <h6 class="purple-text"><i class="fas fa-plane" style= {{fontSize: "26px"}} ></i><strong style={{color:"Black"}}> Search NOW! </strong></h6>
                            <h3 class="card-title py-3 font-weight-bold" style= {{fontSize: "24px", color: "Black"}}><strong>Find Low diet, Balanced, or High diet food</strong></h3>
                            <p class="pb-3" style= {{fontSize: "24px", color: "Black" }}>Anything you want!</p>
                            <a href="./Balanced" class="buttonSearch"><i class="far fa-clone left"></i>  Balanced Food </a>
                            <a href="./HighProtein" class="buttonSearch"><i class="far fa-clone left"></i>  High-Protein Food </a>
                            <a href="./Lowfat" class="buttonSearch"><i class="far fa-clone left"></i>  Low-Fat Food </a>
                            <a href="./Lowcarb" class="buttonSearch"><i class="far fa-clone left"></i>  Low-Carb Food </a>
                        </div>
                    </div>
                </div>

                <div class="card card-image3" style= {{ marginTop: "180px" }}>
                    <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4" style= {{justifyContent: "center", textAlign: "center"}}>
                        <div>
                            <h6 class="purple-text"><i class="fas fa-plane" style= {{fontSize: "26px"}} ></i><strong> Analysis! </strong></h6>
                            <h3 class="card-title py-3 font-weight-bold" style= {{fontSize: "24px"}}><strong>Find out more about your favourite food</strong></h3>
                            <p class="pb-3" style= {{fontSize: "24px", color:"white"}}>Know what you eat!</p>
                            <a href="./Nutrition" class="buttonSearch"><i class="far fa-clone left"></i> Nutrition Analysis </a>
                        </div>
                    </div>
                </div>
                

                <div className="headparagraph container">
                  <p className="paragraph">
                    Whether you're looking for healthy recipes, or ideas on how to use
                    leftovers from your fridge, we've numerous recipes to choose from,
                    so you'll be able to find the perfect dish.
                  </p>
                </div>
                
               
              </article>

              <article className="home__about container container--withPadding">
                <h2 className="heading heading--level2">How it works</h2>
                <p className="paragraph home__subtitle color--gray--light">
                  It only takes a few simple steps to find the recipe you're looking
                  for.
                </p>

                <div className="home__wrapper">
                  <div className="home__card">
                    <img alt="Coffee cup" className="home__image" src={step1} />
                    <h3 className="heading heading--level3 home__title">
                      Search recipe
                    </h3>
                    <p className="paragraph color--gray--light">
                      Already know what you're looking for? Just type the recipe name in
                      search and choose a recipe.
                    </p>
                  </div>

                  <div className="home__card">
                    <img alt="Bowl of rice" className="home__image" src={step3} />
                    <h3 className="heading heading--level3 home__title">
                      Filter recipes
                    </h3>
                    <p className="paragraph color--gray--light">
                      Want to keep only certain recipes? We have both diet and health
                      filters to help you find the perfect recipe for you.
                    </p>
                  </div>

                  <div className="home__card">
                    <img alt="Turkey lunch" className="home__image" src={step2} />
                    <h3 className="heading heading--level3 home__title">
                      Save your Recipes!
                    </h3>
                    <p className="paragraph color--gray--light">
                      Found something interesting? SAVE IT!
                    </p>
                  </div>

                  <div className="home__card">
                    <img alt="Turkey lunch" className="home__image" src={step4} style={{width:"85px", height:"90px"}}/>
                    <h3 className="heading heading--level3 home__title">
                      Wonder what substance that your food contains?
                    </h3>
                    <p className="paragraph color--gray--light">
                      Analysis the nutrition on your food!
                    </p>
                  </div>

                </div>
              </article>
         </section>

      </div>

      <footer>
        <div class="row mt-5">
          <div class="mt-5 mb-3 col-sm-12" style={{ 
            textAlign: "center", 
            padding: "5px",
            textShadow: "0 0 12px rgba(114,71,21,0.68), 0 0 10px rgba(114,71,21,0.68)" 
            }}>
              <h3>Created By</h3>
              <p style={{ color:"white" }}>&copy; Team REMBO<br></br>2020</p>
          </div>
        </div>
      </footer>
    </div>

    
        
    );
}
