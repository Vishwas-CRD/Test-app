import React from 'react'
import { shallow } from 'enzyme';
import Header from '../Header';

describe ('Heder Component',()=>
{
    it('It should render without crash', ()=>
    {
        const component=shallow(<Header/>);
        console.log(component.debug())
        //Shallow returns the whole tags structure that are present inside the header//
        const headerWrapper= component.find('.headerComponent')
        expect(headerWrapper.length).toBe(1)

    });
   
});