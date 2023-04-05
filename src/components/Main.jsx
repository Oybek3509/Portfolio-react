import imgl from "../assets/images/heroimg.png";
import imgs from "../assets/images/1.png";
import imgss from "../assets/images/2.png";
import imgsss from "../assets/images/3.png";


const Main = () => {
    return (
        <>
            <section className="hero_section">

                <div className="container">

                    <div className="hero_wrapper">
                        <div className="hero_item">
                            <h2>Hi, I am John,
                                Creative Technologist</h2>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <button>Download Resume</button>
                        </div>
                        <div className="hero_img">
                            <img src={imgl} alt="rasm" />

                        </div>

                    </div>
                </div>


            </section>

            <section className="Posts">
                <div className="container">
                    <div className="Posts_title">
                        <h2>Recent posts</h2>
                        <p>View all</p>
                    </div>
                    <div className="posts_wrap">
                          <div className="posts_wrap_one">
                            <h3>Making a design system from scratch</h3>
                            <p>12 Feb 202012      |    Design, Pattern</p>
                            <p className="posts_wrap_one_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                          </div>
                          <div className="posts_wrap_two">
                            <h3>Creating pixel perfect icons in Figma</h3>
                            <p>12 Feb 202012    |    Design, Pattern</p>
                            <p className="posts_wrap_two_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                          </div>
                    </div>
                </div> 
            </section>
            <section className="future_section">
              <div className="container">
                <h2>Featured works</h2>
                <div className="future_wrapper">
                   <div className="furute_item_box">
                       
                        <img className="box_img" src={imgs} alt=""/>
                     
                       <div className="box_wrap">
                        <h3>Designing Dashboards</h3>
                        <div className="box_item">
                            <p>2020</p>
                            <p>Dashboard</p>
                        </div>
                        <p className="box_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                       </div>

                   </div>
                   <div className="line"></div>
                   <div className="furute_item_box">
                       
                       <img className="box_img" src={imgss} alt=""/>
                    
                      <div className="box_wrap">
                       <h3>Vibrant Portraits of 2020</h3>
                       <div className="box_item">
                           <p>2018</p>
                           <p>Illustration</p>
                       </div>
                       <p className="box_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                      </div>

                  </div>
                  <div className="line"></div>
                  <div className="furute_item_box">
                       
                       <img className="box_img" src={imgsss} alt=""/>
                    
                      <div className="box_wrap">
                       <h3>36 Days of Malayalam type</h3>
                       <div className="box_item">
                           <p>2018</p>
                           <p>Typography</p>
                       </div>
                       <p className="box_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                      </div>

                  </div>
                  <div className="lines"></div>

                </div>
              </div>



            </section>


        </>
    )
}
export default Main;