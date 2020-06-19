import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import Project from './projectCard';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { APIresponse } from './__snapshots__/resp';
let container = null;
let spy;
// jest.mock('axios');
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
// it('snap shot test', () => {
//     act(() => {
//         render(
//             <Project />
//             , container);
//     });
//     expect(pretty(container.innerHTML)).toMatchSnapshot();
// });

describe('getInitails', () => {
    beforeEach(() => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet('https://api.github.com/users/keith3895/starred?per_page=6').reply(200, data);
    });
    it('positive test of _getUserDetails with "Keith Franklin"', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance._getInitials('Keith Franklin');
        expect(resp).toBe('KF');
    });
    it('positive test of _getUserDetails with "Keith-Franklin"', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance._getInitials('Keith-Franklin');
        expect(resp).toBe('KF');
    });
    it('positive test of _getUserDetails with "Keith_Franklin"', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance._getInitials('Keith-Franklin');
        expect(resp).toBe('KF');
    });
    it('positive test of _getUserDetails with "OneWord"', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance._getInitials('OneWord');
        expect(resp).toBe('ON');
    });
    it('positive test of _getUserDetails with ""', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance._getInitials('');
        expect(resp).toBe('');
    });
    it('positive test of _getUserDetails with null|undefined', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance._getInitials(null);
        expect(resp).toBe('');
        resp = instance._getInitials(undefined);
        expect(resp).toBe('');
    });
    it('negative test of _getUserDetails with "Super Admin" ', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance._getInitials('Super Admin');
        expect(resp).not.toBe('KF');
    });
});

describe('getProjects', () => {
    var mock;
    beforeEach(() => {
        mock = new MockAdapter(axios);
        mock.onGet('https://api.github.com/users/keith3895/starred?per_page=6').reply(200, APIresponse);
    });
    it('axios mock and check if call is made', () => {
        // spy.then((res)=>{
        //     console.log(res);
        // });
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        instance._getProject().then(res => {
            expect(mock.history.get.length).toBe(2);
            expect(instance.state['projects']).toStrictEqual(APIresponse);
        }).catch(e => expect(e).toMatch('error'));
    });

});

describe('languageColor', () => {
    it('with js', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance.languageColor('JavaScript');
        const tree = renderer
            .create(resp)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('with TS', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance.languageColor('TypeScript');
        const tree = renderer
            .create(resp)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('with ""', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance.languageColor('');
        const tree = renderer
            .create(resp)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('showCard', () => {
    it('with empty list', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance.showCard([]);
        const tree = renderer
            .create(resp)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('with full list', () => {
        let wrapper = shallow(<Project />);
        const instance = wrapper.instance();
        let resp = instance.showCard(APIresponse);
        const tree = renderer
            .create(resp)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});