import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Body from './components/Body'
import Feature from './components/Feature'
import Header from './components/Header'
import Item from './components/Item'

//Mocks
window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

it('renders main App', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Body component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Body />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Header component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Feature component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Feature />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Item component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Item data={{
      "id": 456,
      "indoor": false,
      "insurance": true,
      "price": "18.99 EUR"
  }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
