import React from 'react';
import Flag from '../Images/flag.mp4';
import Mecot from '../Images/Mecot.jpg';

const About = () =>(
  <div style={{backgroundColor:'#fafafa'}} id='Top'>
    <header>
      <div className='overlay'></div>
        <video autoPlay muted loop id='myVideo'>
          <source src={Flag} type='video/mp4'></source>
        </video>
        <div className='container h-100'>
          <div className='d-flex h-100 text-center align-items-center'>
            <h1 className='display-2' style={{color:'#fff'}}>American Brother* Foundation</h1>
          </div>
        </div>
    </header>
    <section className='my-5' id='About'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'>
            <img src={Mecot} alt='Mecot' className='img-fluid'></img>
          </div>
          <div className='col-md-10 mx-auto' style={{fontFamily:'Coda'}}>
            <p>
              <span className='logoName'>AMERICAN BROTHER FOUNDATION</span> was created in honor of United States Marine Corps Sgt. Mecot Camara. His life, including 240 servicemen, was taken on October 23, 1983 in the Beirut Bombing.
            </p>
            <p>
              To ensure they are never forgotten, this foundation offers support to our military families (active Duty, Veteran & Gold Star), by providing scholarships to further their education and offer assistance where needed.
            </p>
            <p>
              <span className='logoName'>AMERICAN BROTHER FOUNDATION</span> will also distribute books, create film documentaries and perform school programs designed exclusively to teach patriotism to students from preschool to college.
            </p>
            <p>
              <span className='logoName'>AMERICAN BROTHER FOUNDATION</span> - Help us teach patriotism to our children.
            </p>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default About;
