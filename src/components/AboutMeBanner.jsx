import React from 'react';
import { Link } from 'react-router-dom';

// import MyCV from "../files/CV_tr.pdf";
import profilepic2 from '../img/profilepic2.png';
import hornsign from '../icons/Sign of the Horns.svg';

const AboutMeBanner = () => {
  return (
    <div>
      <section className="about-me-banner">
            <div className="container-xl">
                <div className="about-me-banner__wrapper">
                    <div className="about-me-banner__profilepic">
                        <img src={profilepic2} alt="profilepic" className="about-me-banner__image"/>
                    </div>
                    <div className="about-me-banner__content">
                        <div className="about-me-banner__content-info">
                            <h2 className="about-me-banner__content-info-title">Привет, я Малика! <img src={hornsign} alt="hornsign"/></h2>
                            <p className="about-me-banner__content-info-text">Я выпускница программы JS FullStack. На данный момент нахожусь в поиске работы, где смогу как применить имеющиеся навыки, так и приобрести новые. Если вы ищете быстро адаптируемого и универсального работника - свяжитесь со мной!
                            <br/><br/>
                            На протяжении своей жизни я выбирала разные сферы обучения, чтобы попробовать себя в разных поприщах. В школе я занималась математикой и участвовала в городских и международных олимпиадах, посвятив себя изучению бухгалтерского отчета для получения степени Бакалавра. Заинтересовалась программированием во время учебы в магистратуре, так как моя программа совмещала финансы и IT. Теперь же хочу связать свою профессиональную жизнь с программированием, что и послужило причиной прохождения курса JS FullStack в ITC BootCamp.
                            <br/><br/>
                           </p>
                        </div>
                        <div className="about-me-banner__content-btns">
                            {/* <a href={MyCV} className="btn btn-black">Resume</a> */}
                            <Link to="https://www.linkedin.com/in/abdymalik-batyrkulov" className="btn">LinkedIn</Link>
                            <Link to="https://www.instagram.com/nvintufviv" className="btn">Instagram</Link>
                            <Link to="https://github.com/abdymaleeq925" className="btn">GitHub</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutMeBanner
