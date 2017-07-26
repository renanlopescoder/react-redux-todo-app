import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
  <div>
    <PageHeader name='About' small='React Redux Todo App'></PageHeader>
    <div className="row">
      <img className='col-md-6' src="http://renanlopes.com/img/external-logos/react-redux.png" alt="React Logo" />
      <h2><i className="fa fa-calendar-check-o"></i> TodoApp</h2>
    </div>
    <br />
    <br />
    <p>By: <a href="http://renanlopes.com">Renan Lopes</a></p>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-primary">Description</h2>

          <ul className="list-group">
            <li className="list-group-item justify-content-between">
              <p>
                This is a simple "Todo List" project using Back End with NodeJS Express MongoDB and Front End with WebPack, babel and React to share with the developers community the usage of these technologies.
            </p>
              <div className="text-center">
                <a href="https://github.com/renanlopescoder/react-todo-app" className="btn btn-default primary-color"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div className="container col-md-5">
      <h3 className="text-center text-primary">Back End Dependencies</h3>

      <ul className="list-group">
        <li className="list-group-item justify-content-between">
          npm i --save-dev body-parser
        </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev express
        </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev mongoose
        </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev node-restful
        </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev pm2
        </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev nodemon
        </li>
      </ul>
    </div>
    <div className="col-md-2"></div>
    <div className="container col-md-5">
      <h3 className="text-center text-primary">Front End Dependencies</h3>

      <ul className="list-group">
        <li className="list-group-item justify-content-between">
          npm i --save-dev webpack@1.14.0
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev webpack-dev-server@1.16.2
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev extract-text-webpack-plugin@1.0.1
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev babel-core
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev babel-loader
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev babel-plugin-react-html-attrs
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev babel-plugin-transform-object-rest-spread
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev babel-preset-es2015
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev babel-preset-react
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev css-loader@0.26.1
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev style-loader@0.13.1
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev file-loader
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev bootstrap@3.3.7
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev font-awesome@4.7.0
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev react
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev react-dom
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev react-router@3.0.2
    </li>
        <li className="list-group-item justify-content-between">
          npm i --save-dev axios
    </li>
      </ul>
    </div>

  </div>
)