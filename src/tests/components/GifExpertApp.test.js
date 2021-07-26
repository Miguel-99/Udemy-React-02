import { shallow } from 'enzyme'
import GifExpertApp from '../../GifExpertApp'



describe('Pruebas a componente <GifExpertApp />', () => {

    const categories = ['Los simpsons', 'Art Attack' ];

    const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);

    test('Debería mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length ); 
        //Si hay misma cantidad de <GifGrid> que cagetorias, entonces pasa

    })
    
    
})
