import React, {useRef} from 'react';

import { Work, Services, Banner, Titles, AboutMeHome, Testimonials } from '../components';

import { projects, services, testimonials } from '../data/utils';

import image989 from '../icons/image989.svg';
import image900 from '../icons/image900.svg';
import profilepic from '../img/profilepic.jpg';
import testimonialslogo from '../icons/testimonials.svg';




const Home = () => {
  const scrollDownRef = useRef();

  return (
    <>
      <Banner title="Привет, я Малика!" text="выпускница с рядом показательных проектов" boldText="JS FullStack" buttonScroll scrollDownRef={scrollDownRef}/>
      <Titles name="work" image={image989}/>
      <Work projects = { projects } scrollDownRef = {scrollDownRef}/>
      <AboutMeHome 
        text="Я выпускница курса JS FullStack от ITC BootCamp в Алматы. Изучала как front-end (HTML, CSS, JS, React), так и back-end (Node-js, MongoDB), применяя свои знания в нескольких проектах. Также имеется опыт создания телеграм-ботов и работы со всевозможными API. Я спокойна, быстро-обучаема, легко адаптируюсь к новому и могу работать как одна, так и в команде. Програмирование дает мне возможность воплощать свои идеи в жизнь, требуя большего уровня знаний и опыта, чем я обладаю сейчас. Хотелось бы вырасти профессионально и личностно и иметь возможность видеть результаты таких изменений через програмирование." 
        image={profilepic}
      />
      <Titles name="services" image={image900}/>
      <Services
        items = { services }
      />
      <Titles name="testimonials" image={testimonialslogo}/>
      <Testimonials
        recommendations = { testimonials }
        />
    </>
  )
}

export default Home
