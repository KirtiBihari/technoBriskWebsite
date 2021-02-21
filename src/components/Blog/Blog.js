import React, {useState} from 'react';
import './Blog.scss';
import blogImg1 from '../../assets/images/blog/1.jpg';
import blogImg2 from '../../assets/images/blog/2.jpg';
import blogImg3 from '../../assets/images/blog/3.jpg';


const Blog = (props) => {

    const {} = props;

    return (
        <div id="blog" class="blog-area">
        <div class="blog-inner area-padding">
          <div class="blog-overly"></div>
          <div class="container ">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="section-headline text-center">
                  <h2>Latest News</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog.html">
                      <img src={blogImg1} alt="" />
                    </a>
                  </div>
                  <div class="blog-meta">
                    <span class="comments-type">
                      <i class="fa fa-comment-o"></i>
                      <a href="#">13 comments</a>
                    </span>
                    <span class="date-type">
                      <i class="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div class="blog-text">
                    <h4>
                      <a href="blog.html">Assumenda repud eum veniam</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" class="ready-btn">Read more</a>
                  </span>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog.html">
                      <img src={blogImg2} alt="" />
                    </a>
                  </div>
                  <div class="blog-meta">
                    <span class="comments-type">
                      <i class="fa fa-comment-o"></i>
                      <a href="#">130 comments</a>
                    </span>
                    <span class="date-type">
                      <i class="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div class="blog-text">
                    <h4>
                      <a href="blog.html">Explicabo magnam quibusdam.</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" class="ready-btn">Read more</a>
                  </span>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog.html">
                      <img src={blogImg3} alt="" />
                    </a>
                  </div>
                  <div class="blog-meta">
                    <span class="comments-type">
                      <i class="fa fa-comment-o"></i>
                      <a href="#">10 comments</a>
                    </span>
                    <span class="date-type">
                      <i class="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div class="blog-text">
                    <h4>
                      <a href="blog.html">Lorem ipsum dolor sit amet</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" class="ready-btn">Read more</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;