import { ArrowUpOutlined, PieChartFilled } from "@ant-design/icons";
import React, { useState } from 'react';
import { AiOutlineKey } from 'react-icons/ai';
function Login() {
    const [isSaaS, setIsSaaS] = useState(true);
  
    const toggleMode = () => {
      setIsSaaS(!isSaaS);
    };
  
    return (
      <div className="login-page">
        <img src="https://codeantai.gallerycdn.vsassets.io/extensions/codeantai/codeantai/0.0.67/1732474308491/Microsoft.VisualStudio.Services.Icons.Default" alt="Ant Logo" className="Ant" />
      <div className="left-section">
        <div className='stats-container'>
      <div className="stats-header">
        <img  src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww" alt="Ant Logo" className="ant-logo" />
        <h2>AI to Detect & Autofix Bad Code</h2>
      </div>
      <div className="stats-metrics">
        <div className="metric">
          <h3>30+</h3>
          <p>Language Support</p>
        </div>
        <div className="metric">
          <h3>10K+</h3>
          <p>Developers</p>
        </div>
        <div className="metric">
          <h3>100K+</h3>
          <p>Hours Saved</p>
        </div>
      </div>
      </div>
<div className="issues-fixed">
      <div className="icon-container">
        <div className="icon-background">
          <PieChartFilled className="pie-chart-icon" />
        </div>
        <div className="issue-metric">
          <p>Issues Fixed</p>
          <h3>500K+</h3>
        </div>
      </div>
      <div className="issue-content">
       
        <div className="issue-growth">

          <span className="growth-percentage"> <ArrowUpOutlined className="growth-icon" />14%</span>
          <span className="growth-text">This week</span>
        </div>
        
      </div>
    </div>
      </div>
  
       
      <div className="login-section">
       
        <div className='login'>
        <div className='login-header'>
        <h2>
          <img src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww" alt="Ant Logo" className="ant-logo" /> CodeAnt AI
        </h2>
        <h1>Welcome to CodeAnt AI</h1>
        <div className="toggle-buttons">
          <button
            className={isSaaS ? "toggle-button active" : "toggle-button"}
            onClick={() => setIsSaaS(true)}
          >
            SAAS
          </button>
          <button
            className={!isSaaS ? "toggle-button active" : "toggle-button"}
            onClick={() => setIsSaaS(false)}
          >
            Self Hosted
          </button>
        </div>
        </div>

        {isSaaS ? (
          <div className="login-options">
            <button className="login-button github">
              <img src="https://s3-alpha-sig.figma.com/img/31a8/f303/4ea68f153c473a98ea172c4b3a624f10?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6BISfmLPPFUiBdZtQMQq71aYEjeZAOuVkz01q5pymHE0Incd8-GgCh4AOAWOsJXi-iN1E8jvkr7Fn4es9DVbokLNJZjuxI2YESxTVUwDwWSGcA9RuCfdT53ZUOvYl3zzUF8MGy3DobOXBHg4o-EMj0NhAz5aAy6GurDfBfJTsV21dWiHfB3XpIbWaJtwlJwbD1LjgWiWM8r2D8wtkWXoC5BzhLhUbPVMntLJ6UU0J3~Xurk7dDuAQEV-bkaa~ygwaG0ysy3HNPxgfI9T8RsGzz0QF~BXgmMQBtaxIIoR4PqbYCDzwg2~kBczEn2wRmKowAd5XM6MEByAyb18D-7sQ__" alt="Github" className="icon" /> Sign in with Github
            </button>
            <button className="login-button bitbucket">
              <img src="https://s3-alpha-sig.figma.com/img/51ba/b679/cc2a304a91ce52088b0b9217405c6da9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b-uIyXNzaR5FgBgfdDPzsqjThxHcNJ6ly58M1ukt7HRwcSxAW4jzCLyLOMcdzn1MPYIDY021ethlH-s8eWCTIb-L-TgMcgYIqqq5aCkNHFHYZy7j461~osYaSs3BKXm~JaZ0KyfaCbw5nGgMdUToUuo1qukbAxFOShdjhIscDUAfOS8aC1JR561Ne5kznfxDREktaOpUVxD19iPLdrsWED61TuMAL3y15aH3U9yMPtdNVM1L7xnnthN6LvFXToSIKemxHEErqr-0XC0v2jsS01avI8QUAK3oMi0sHVc9S99lx6HXv7LTocMd-ruA2Jea996VGuPCI7DAhnd32-LWdg__" alt="Bitbucket" className="icon" /> Sign in with Bitbucket
            </button>
            <button className="login-button azure">
              <img src="https://s3-alpha-sig.figma.com/img/bed8/e269/8628a1e9773da28a87ab5c0148428ab6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PvKbzuC223phBpnbGPHvAP3Mp2ggs2zjn30L4RzmkTulPIkGR8gL4d-o8w-bTYi1j~uwL4w0bqonSHDOCWlJUqJJnzbcM2V5OfVNeWar-sJLrAjEVVMwMf8jAWEofteDaVNceX9TLjcl9WZngSgckrrr6-jawSP32YLoU46KG38miWWSfNUqAWDj55VjmKUxwUMKkVPZiVk1Zd~jc7fgvXfux9tE9V5a0o71j1aHmHL1iNWMg5hGxpWAI-OyZl036HIWsvk639nP6EPypOZA~YNpDcIlqH805ogNn~U6UuMcqrqYn85Y74fKI1O3yaa9eZ~me0uFaXYfoJK7M-EKKw__" alt="Azure DevOps" className="icon" /> Sign in with Azure DevOps
            </button>
            <button className="login-button gitlab">
              <img src="https://s3-alpha-sig.figma.com/img/3d0d/fd55/d42e5934f560acdcfb255f59bf8a3f8c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LC-WcuU-G7Kro6uDnBgLnIXnkZOkyBHwdD1wJp2v~fv9TodnzI3OaoYZr8pyt2NKfRPTxwdmEmugLcAoklcbo3p6cgg873EkudE7Uhu-2j~l9CSel~5yrPVab~o4sApF-MnsgNp5gfJx~H8ip5L7sz9gcC14gWcBunI5auDA-fpRctpqJof9JIb22D-tBe5rZ6xTa3cOQl9GI9x2L9rE98vaLBAHV1tCCl7whwjcOi14jqfkrhykx~1F0QlMD593uQPRqTML2I7C43If1LhojqQ9GPAAqE6mjhIvWv0j-Vq~A09S0rN53U2bPQAHHZVU~vTytiOwcgj~WFMo4DOVCg__" alt="GitLab" className="icon" /> Sign in with GitLab
            </button>
          </div>
        ) : (
          <div className="login-options">
            <button className="login-button gitlab">
              <img src="https://s3-alpha-sig.figma.com/img/3d0d/fd55/d42e5934f560acdcfb255f59bf8a3f8c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LC-WcuU-G7Kro6uDnBgLnIXnkZOkyBHwdD1wJp2v~fv9TodnzI3OaoYZr8pyt2NKfRPTxwdmEmugLcAoklcbo3p6cgg873EkudE7Uhu-2j~l9CSel~5yrPVab~o4sApF-MnsgNp5gfJx~H8ip5L7sz9gcC14gWcBunI5auDA-fpRctpqJof9JIb22D-tBe5rZ6xTa3cOQl9GI9x2L9rE98vaLBAHV1tCCl7whwjcOi14jqfkrhykx~1F0QlMD593uQPRqTML2I7C43If1LhojqQ9GPAAqE6mjhIvWv0j-Vq~A09S0rN53U2bPQAHHZVU~vTytiOwcgj~WFMo4DOVCg__" alt="GitLab" className="icon" /> Self Hosted GitLab
            </button>
            <button className="login-button sso">
              <AiOutlineKey size={24} color="black" /> Sign in with SSO
            </button>
          </div>
        )}
        </div>

        <p>
          By signing up you agree to the <a href="#">Privacy Policy</a>.
        </p>
      </div>
      </div>
    );
  }
  

export default Login