import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate }= renderHook( () => useFetchGifs('The Simpsons'))
        const {data, loading } = result.current;

        await waitForNextUpdate();
        
        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    })
    
    test('Debe retornar un arreglo de gifs y loading en false', async() => {

        const { result, waitForNextUpdate }= renderHook( () => useFetchGifs('The Simpsons'))
        await waitForNextUpdate();
        
        const {data, loading } = result.current;

        
        expect( data.length ).toBe( 10 ); //espero los 10 gifs al hacer un fetch
        expect( loading ).toBe( false );

        
    })
    
    
})
