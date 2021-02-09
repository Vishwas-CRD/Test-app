export const findByTestArr=(component,attr)=>
{
    const wrapper=component.find(`[data-Testid='${attr}']`);
    return wrapper;
}