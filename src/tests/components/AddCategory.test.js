import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import '@testing-library/jest-dom';
import '@testing-library/react';
import '@testing-library/user-event'

describe('Pruebas en <AddCategory />', () => {

        const setCategories = jest.fn(); 

        const wrapper = shallow(<AddCategory  setCategories={ setCategories } />);

    test('Debe mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('Al tener 3 caracteres o más en el texfield, debería llamar el submit', () => {

        const input = wrapper.find('input');

        const value = 'Hola mundo';

        input.simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).toHaveBeenCalled()
    })

    test('Al tener menos de 3 caracteres en el texfield, no debería llamar el submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('Debe llamar a setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input')
        
        const value = 'busqueda random';

        input.simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled(); //espera ser llamado 1 o más veces

        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function)); //espera ser llamado solo con una función

        expect( input.prop('value') ).toBe( '' );
        
    })
    
    
})
