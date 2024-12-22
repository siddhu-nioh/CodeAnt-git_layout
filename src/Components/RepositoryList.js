import React from 'react';
import { AiOutlineSearch,AiOutlinePlus, AiOutlineSync } from 'react-icons/ai';
import { BiDatabase } from 'react-icons/bi';
import { FaDatabase } from 'react-icons/fa';

import { BiDatabaseAlt } from 'react-icons/bi';


const repositories = [
  { name: 'design-system', type: 'Public', language: 'React', size: '7320 KB', updated: '1 day ago' },
  { name: 'codeant-ci-app', type: 'Private', language: 'JavaScript', size: '5871 KB', updated: '2 days ago' },
  { name: 'analytics-dashboard', type: 'Private', language: 'Python', size: '4521 KB', updated: '5 days ago' },
  { name: 'mobile-app', type: 'Public', language: 'Swift', size: '3096 KB', updated: '3 days ago' },
  { name: 'e-commerce-platform', type: 'Private', language: 'Java', size: '6210 KB', updated: '6 days ago' },
  { name: 'blog-website', type: 'Public', language: 'HTML/CSS', size: '1876 KB', updated: '4 days ago' },
  { name: 'social-network', type: 'Private', language: 'PHP', size: '5432 KB', updated: '7 days ago' },
];

function RepositoryList() {
  return (
    <div className="repository-list">
        <div  className='repository'>
      <div className="repository-header" style={{paddingTop:"20px"}}>
        <div className='name'>
        <h2>Repositories</h2>
        <span style={{color:'#666',fontSize:'1.2vw',fontWeight:'400'}}>33 total Repositories</span>
        <div class="search-container">
  <AiOutlineSearch className="search-icon" />
  <input type="text" placeholder="Search Repositories" />
</div>
 
        </div>
        <div className="repository-actions">
          <button className='refresh'><AiOutlineSync /> Refresh All</button>
          <button><AiOutlinePlus /> Add Repository</button>
        </div>
      </div>
      
      <ul>
        {repositories.map((repo, index) => (
          <li key={index}>
            <div className='repo-class'>
            <div className="repo-details">
              <h3>{repo.name}</h3>
              <span className={`repo-type ${repo.type.toLowerCase()}`}>{repo.type}</span>
            </div>
            <div className="repo-info">
              <span className="repo-language">{repo.language} <span className="repo-dot">•</span></span>
              
              
              <span><FaDatabase className="repo-icon" /> {repo.size}</span>
    
              <span>Updated {repo.updated}</span>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default RepositoryList;