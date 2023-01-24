import React from 'react';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import { Article } from '../../components';
import './blog.css';

const blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happing, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Sep 20,1990" title="New Article"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={blog02} date="Sep 20,1990" title="New Article"/>
        <Article imgUrl={blog03} date="Sep 20,1990" title="New Article"/>
        <Article imgUrl={blog04} date="Sep 20,1990" title="New Article"/>
        <Article imgUrl={blog05} date="Sep 20,1990" title="New Article"/>
        </div>
      </div>
    </div>
  )
}

export default blog