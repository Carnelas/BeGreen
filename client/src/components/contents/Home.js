import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <body>
        <div>
          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="column is-6 is-offset-3">
                  <h1>
                    BeGreen
                        </h1>
                  <h2 className="subtitle">
                    Come lechugas antes de que las lechugas te coman a ti
                        </h2>
                  <div className="field is-grouped is-grouped-centered">
                    <p className="semueve control">
                      
                        <Link to='/items' className="button is-rounded is-focused is-hovered is-light">Productos a la venta</Link> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>)
  }
}

export default Home;