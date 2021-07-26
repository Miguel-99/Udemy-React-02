import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifExpertApp', () => {
    
    const title = "This is a title";
    const url = "https://www.randomurl.com";

    const wrapper = shallow( <GifGridItem title={ title } url={ url} />);

    test('Debe mostrar <GifExpertApp correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe tener un párrafo con el title', () => {

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title);
    })
    
    test('Debe tener img con atributos src y alt correctamente', () => {

        const img = wrapper.find('img')

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
        
        
    })
    
    test('Debe tener la className animate__fadeIn', () => {

        const div = wrapper.find('div');
        
        expect( div.prop('className').includes('animate__zoomIn') ).toBe( true );
    })
    

})