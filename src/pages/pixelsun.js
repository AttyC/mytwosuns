import * as React from "react"
import { Link } from "gatsby"

import Particles from 'react-particles-js';
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../components/pixelart.scss'


const particleParams = {
  "particles": {
    "number": {
      "value": 2000,
      "density": {
        "enable": true,
        "value_area": 200
      }
    },
    color: {
      value: ["#FFD300", "#E86363"]
    },
    "shape": {
      "type": "square",
      "stroke": {
        "width": 1,
        "color": "hotpink"
      },
      "polygon": {
        "nb_sides": 8
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 3,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 8,
        "sync": true
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": false,
      "speed": 1,
      "direction": "right",
      "random": false,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse",
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 20,
        "duration": 2,
        "opacity": 0.8,
        "speed": 1
      },
      "repulse": {
        "distance": 50,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <p>Welcome to pixelsun</p>
    <div class="pixelart">
      <Particles params={particleParams} />
    </div>
    <a href="http://una.im/sass-pixel-art">Read the blog post!</a>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
