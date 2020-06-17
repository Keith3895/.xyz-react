import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NavBar from './navbar';
import pretty from "pretty";
import { BrowserRouter as Router } from 'react-router-dom';
let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Hamburger icon', () => {
    it('Is hamburger rendered', () => {
        act(() => {
            render(
                <Router>
                    <NavBar />
                </Router>
                , container);
        });
        let a = container.querySelector('.cd-3d-nav-trigger span');
        expect(a).toBeTruthy();
        let navbar = container.querySelector('.cd-3d-nav-container.nav-is-visible');
        expect(navbar).toBeFalsy();
    });
    it('on cilck of hamburger', () => {
        act(() => {
            render(
                <Router>
                    <NavBar active={()=>{}}/>
                </Router>
                , container);
        });
        let a = container.querySelector('.cd-3d-nav-trigger');
        a.click();
        let span = container.querySelector('.nav-is-visible .cd-3d-nav-trigger span');
        expect(span).toBeTruthy();
        let navbar = container.querySelector('.cd-3d-nav-container.nav-is-visible');
        expect(navbar).toBeTruthy();
    });
    
    it('on cilck of X', () => {
        act(() => {
            render(
                <Router>
                    <NavBar active={()=>{}}/>
                </Router>
                , container);
        });
        let a = container.querySelector('.cd-3d-nav-trigger');
        a.click();
        let span = container.querySelector('.nav-is-visible .cd-3d-nav-trigger span');
        expect(span).toBeTruthy();
        let navbar = container.querySelector('.cd-3d-nav-container.nav-is-visible');
        expect(navbar).toBeTruthy();
        a.click();
        span = container.querySelector('.nav-is-visible .cd-3d-nav-trigger span');
        expect(span).toBeFalsy();
        navbar = container.querySelector('.cd-3d-nav-container.nav-is-visible');
        expect(navbar).toBeFalsy();
    });
    it('render all item.', () => {
        act(() => {
            render(
                <Router>
                    <NavBar active={()=>{}}/>
                </Router>
                , container);
        });
        let a = container.querySelector('.cd-3d-nav-trigger');
        a.click();
        let span = container.querySelector('.nav-is-visible .cd-3d-nav-trigger span');
        expect(span).toBeTruthy();
        let navbar = container.querySelector('.cd-3d-nav-container.nav-is-visible');
        expect(navbar).toBeTruthy();
        let list =  container.querySelectorAll('li');
        expect(list.length).toBe(4);
    });
    it('onclick line item of navbar',()=>{
        act(() => {
            render(
                <Router>
                    <NavBar active={()=>{}}/>
                </Router>
                , container);
        });
        let a = container.querySelector('.cd-3d-nav-trigger');
        a.click();
        let span = container.querySelector('.nav-is-visible .cd-3d-nav-trigger span');
        expect(span).toBeTruthy();
        let marker = container.querySelector('.cd-marker.color-1');
        let active = container.querySelector('.el.cd-selected');
        let list =  container.querySelectorAll('li');
        list[1].firstElementChild.click();
        expect(list[1].firstElementChild.className).toBe('el cd-selected');
        span = container.querySelector('.nav-is-visible .cd-3d-nav-trigger span');
        expect(span).toBeFalsy();
    });
    it('snap shot test',()=>{
        act(() => {
            render(
                <Router>
                    <NavBar active={()=>{}}/>
                </Router>
                , container);
        });
        expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
});
