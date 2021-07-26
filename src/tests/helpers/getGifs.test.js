import { getGifs } from "../../helpers/getGifs"


describe('Pruebas en getGifs fetch', () => {

    test('Debe de traer 10 elementos', async() => {

        const gifs = await getGifs('Los Simpsons');

        expect( gifs.length ).toBe( 10 );
        
    })
    
    test('Si el input está vacío, no traer ningún elemento', async() => {

        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
        
    })
    

})
