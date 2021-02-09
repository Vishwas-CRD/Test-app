import React from 'react'
import { shallow } from 'enzyme';
import Header from '../Header';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import {findByTestArr} from './../../../../Utils/index'

const setUp=(props={})=>
{
 const component=shallow(<Header {...props}/>);
  //Shallow returns the whole tags structure that are present inside the header//
 return component;
}

describe ('Heder Component',()=>
{
    let component;
    beforeEach(()=>
    {
        component=setUp();
    });
    test('It should render without crash', ()=>
    {
        const headerWrapper=findByTestArr(component,'header_wrapper')
        expect(headerWrapper.length).toBe(1)

    });
    it('It should render logo without crash',()=>
    {
        const logo=findByTestArr(component,'logo_img')
        expect(logo.length).toEqual(1)
    })
   
});