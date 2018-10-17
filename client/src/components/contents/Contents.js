import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contents extends Component {
  render() {
    return (<div>
      <p>Esto es una landing page to guapa</p>

      <body>

        <section className="hero is-info is-fullheight">


          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-6 is-offset-3">
                <h1 className="title">
                  Coming Soon
                        </h1>
                <h2 className="subtitle">
                  Probando ideas para landpage
                        </h2>
                <div className="box">
                  <div className="field is-grouped">
                    <p className="control is-expanded">
                      <input className="input" type="text" placeholder="Enter your email" />
                    </p>
                    <p className="control">
                      <a className="button is-info">
                        Entra aquí para ver los productos
                                    </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </body>
    </div>);

  }
}

export default Contents;