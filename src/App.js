import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '@css/style.css';
import BoardList from '@components/BoardList';
import BoardNew from '@components/BoardNew';
import BoardContent from '@components/BoardContent';
import Footer from '@components/Footer';
import axios from 'axios';


// mysql 연동 과정 

import './App.css';
import HomeImage from './home.png';
import TodayImage from './today.png';
import CHImage from './ch.png';
import RingImage from './ring.png';
import ComImage from './com.png';
// import 이미지 들 

function App() {
    useEffect(()) => {
        axiois.get('/api/test')
        .then(res => console.log(res))
        .catch()

    }
    
    const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between', // 수직 방향 중앙 정렬
    height: '100vh',
    flexGrow: 1, // 컨텐츠가 더 커져도 화면 크기만큼 컨텐츠 영역을 확장

  };
 


  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    background: '#F7D358',
    padding : '40px 0 120px 0'
  };
 

  const centerWhiteStyle = {
    width: '80%',
    height: 'auto',
    background: 'white',
    display: 'flex',
    margin: '0 auto', // 가운데 정렬을 위해 margin 추가
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // 테두리 추가
  };

  const homeWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const homeImageStyle = {
    width: '45px',
    height: '45px',
  };
  
  const homeTextStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: '4px',
  };

  const tabImageStyle = {
    width: '35px',
    height: '35px',
    margin: '7px',
    padding: '5px 20px 20px 20px'
  };

  const tabtext = {
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '-25px 0 3px 0',
  };

  const bottomTabStyle = {
    width: '100%',
    height: 'auto',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px',
    position: 'fixed',
    bottom: '0',
    zIndex: '1',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // 테두리 추가

  };

  const appBackgroundStyle = {
    width: '90%',
    height: 'auto',
    background: 'transparent',
    border: '1px solid grey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    zIndex: '0',
    position: 'relative',
    margin:'10px' // 변경된 위치 속성
  };


  const handleHomeImageClick = () => {
    window.location.href = '/App.js';
  };

  const handleTodayImageClick = () => {
    window.location.href = '/App.js';
  };

  const handleCHImageClick = () => {
    window.location.href = '/ch.js';
  };

  const handleRingImageClick = () => {
    window.location.href = '/ring.js';
  };

  const handleComImageClick = () => {
    window.location.href = '/com.js';
  };

  
  return (
    <div className="App" style={containerStyle}>
        <Router>
            <div>
                <Switch>
                    <Route path='/' component={BoardList} exact/>
                    <Route path='/BoardNew' component ={BoardNew} exact/>
                    <Route path ='/BoardContent' component={BoardContent} exact />
                </Switch>
            </div>
        </Router>
         


      <div style={contentWrapperStyle}>
        <div style={centerWhiteStyle}>
          <div style={homeWrapperStyle}>
            <img
              src={HomeImage}
              alt="home"
              style={{  ...homeImageStyle }}
              onClick={handleHomeImageClick}
            />
            <span style={homeTextStyle}>오늘의 소식</span>
          </div>

          <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={appBackgroundStyle}><p>내용 1</p></div>
      <div style={appBackgroundStyle}><p>내용 2</p></div>
      <div style={appBackgroundStyle}><p>내용 3</p></div>
      <div style={appBackgroundStyle}><p>내용 4</p></div>
      <div style={appBackgroundStyle}><p>내용 5</p></div>
      <div style={appBackgroundStyle}><p>내용 6</p></div>
      <div style={appBackgroundStyle}><p>내용 7</p></div>
      <div style={appBackgroundStyle}><p>내용 8</p></div></div>
      </div>
      </div>
      <div style={bottomTabStyle}>
        <div>
          <img
            src={TodayImage}
            alt="Today"
            style={tabImageStyle}
            onClick={handleTodayImageClick}
          />
          <p style={tabtext}>투데이</p>
        </div>
        <div>
          <img
            src={CHImage}
            alt="CH"
            style={tabImageStyle}
            onClick={handleCHImageClick}
          />
          <p style={tabtext}>추천</p>
        </div>
        <div>
          <img
            src={RingImage}
            alt="Ring"
            style={tabImageStyle}
            onClick={handleRingImageClick}
          />
          <p style={tabtext}>알림</p>
        </div>
        <div>
          <img
            src={ComImage}
            alt="Com"
            style={tabImageStyle}
            onClick={handleComImageClick}
          />
          <p style={tabtext}>소통</p>
        </div>
      </div>
    </div>
  );
}

export default App;
