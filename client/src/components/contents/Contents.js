import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contents extends Component {
  render() {
    return (<div>

      <body>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-6 is-offset-3">
                <h1 className="title">
                  BeGreen
                        </h1>
                <h2 className="subtitle">
                  Quote aleatoria y muy ecológica
                        </h2>
                <div className="box">
                  <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                      <a className="button">
                        Entra aquí para ver los productos</a>
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