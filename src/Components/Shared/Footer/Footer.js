import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";
import { useForm } from "react-hook-form";

const Footer = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <footer class="page-footer font-small stylish-color-dark pt-4 text-light">
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="col-md-4 mx-auto">
            <a class="navbar-brand" href="#">Cyber<span class="text-hightlight-1">Crime</span></a>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur
            adipisicing elit.</p>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-2 mx-auto">
            <h5 class="fw-bold text-uppercase mt-3 mb-4">PRIVACY & TOS</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Advertiser Agreement</a>
              </li>
              <li>
                <a href="#!">Acceptable Use Policy</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Technology Privacy</a>
              </li>
            </ul>

          </div>

          <hr class="clearfix w-100 d-md-none" />

          <div class="col-md-2 mx-auto">

            {/* Links  */}
            <h5 class="fw-bold text-uppercase mt-3 mb-4">NAVIGATE</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Advertisers</a>
              </li>
              <li>
                <a href="#!">Developers</a>
              </li>
              <li>
                <a href="#!">Resources</a>
              </li>
              <li>
                <a href="#!">Company</a>
              </li>
            </ul>

          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-2 mx-auto">

            {/* Links  */}
            <h5 class="fw-bold text-uppercase mt-3 mb-4">CONTACT US</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">ratnarani.cse@gmail.com</a>
              </li>
              <li>
                <a href="#!">Suite 1100. Denver,CO </a>
              </li>
              <li>
                <a href="#!">+999 90932 627</a>
              </li>
              <li>
                <a href="#!">support@rani.com</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <hr />
      <ul class="list-unstyled list-inline text-center py-2">
        <li class="list-inline-item">
          <h5 class="mb-1">Register for free</h5>
        </li>
        <li class="list-inline-item">
          <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
        </li>
      </ul>
      <hr />

      {/* Social buttons  */}
      <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
          <a class="btn-floating btn-fb mx-1">
            <i class="fab fa-facebook-f"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-tw mx-1">
            <i class="fab fa-twitter"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-gplus mx-1">
            <i class="fab fa-google-plus-g"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-li mx-1">
            <i class="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-dribbble mx-1">
            <i class="fab fa-dribbble"> </i>
          </a>
        </li>
      </ul>

      {/* Copyright */}
      <div class="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
      <a href="https://ratnaportfolio.netlify.app/"> Ratna Rani</a>
      </div>
      {/* Copyright  */}

    </footer>
  );
};

export default Footer;
