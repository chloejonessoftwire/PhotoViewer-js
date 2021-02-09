import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

import React from 'react';


/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

describe('Unit Tests for App', () => {
  test('Test Rendering', () => {
    const {getByTestId} = render(<App/>)
    expect(getByTestId('content')).toBeInTheDocument()
  })

  test('Test images are in document', ()=>{
    const {getByTestId} = render(<App/>)
    //const firstImage = <img alt="photo" class="selected-pic" data-testid="ButtonImage" src="https://placedog.net/400/400/id=0" />
    expect(getByTestId('ButtonImagehttps://placedog.net/400/400/id=0')).toBeInTheDocument();

  })

  test('Onclick Event is working', () => {
    const {getByTestId} =render(<App/>)
    const button = getByTestId('ButtonImagehttps://placedog.net/400/400/id=1')
    expect(button.className).toBe('un-selectedpic')
    fireEvent.click(button)
    expect(button.className).toBe('selected-pic')
  })

  test('Onclick Event is cause picture to update', () => {
    const {getByTestId} =render(<App/>)
    const button = getByTestId('ButtonImagehttps://placedog.net/400/400/id=3')
    const mainimage = getByTestId("main-image")
    expect(button.className).toBe('un-selectedpic')
    fireEvent.click(button)
    expect(button.className).toBe('selected-pic')
    expect(mainimage.src).toBe('https://placedog.net/400/400/id=3')
  })
})

