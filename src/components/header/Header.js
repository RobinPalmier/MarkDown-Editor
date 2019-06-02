import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import fileDownload from 'js-file-download';
import './header.css';
import logo from '../../assets/img/logo.svg'

let downloadMarkdown = () => {
  fileDownload(localStorage.getItem('text'), 'README.md');
}

const Header = () => {
  return(
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <h1>MarkDown Editor</h1>
      <div className='content-option-md'>
        <div className='option-header'>
          <a href='https://www.markdownguide.org/basic-syntax/' title="MarkDown User Guide" className='buttonNav-md' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faQuestionCircle} /></a>
          </div>
          <div className='option-header'>
          <button
            title="Download your document in MarkDown format"
            className='buttonNav-md'
            onClick={() => downloadMarkdown()}
            download>
              <FontAwesomeIcon icon={faFileDownload}/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
