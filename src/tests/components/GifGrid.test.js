import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas a componente <GifGrid />', () => {

    const category = 'Los Simpsons';



    test('Debería mostrar el componente correctamente', () => {
        
        useFetchGifs.mockReturnValue( {
            data: [],
            loading: true 
            })
    
    
        const wrapper = shallow( <GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {

        const imgs = [{
            title: 'ABC',
            url: 'https://localhost/img.jpg',
            id: '123123'
        }]
        
        useFetchGifs.mockReturnValue( {
            data: imgs,
            loading: false
            })
    
    
        const wrapper = shallow( <GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false ); //existe un <p> mientras no haya traido los gifs
        expect( wrapper.find('GifGridItem').length ).toBe( imgs.length ); //misma cantidad de comp items que gifs

    })
    
})
