import { Global, css } from '@emotion/css'
import { Gblfont } from '../fonts/Montserrat'
import { Thaifont } from '../fonts/Prompt'

export function GlobalStylesKuy() {
    return (
        <>
            <Gblfont />
            <Thaifont />
            <Global
                styles={css`
                @tailwind base;
                @tailwind components;
                @tailwind utilities;

                * {
                  cursor: none !important;
                  font-family: 'Prompt', sans-serif !important;
                }

                body {
                
                  background-color: black;
                  color: white;
                  font-family: 'Prompt', sans-serif !important;
                  overflow-x: hidden;
                  width: 100vw;
                  height: 100vh;
                  transition-duration: 250ms;
                }



                *::-webkit-scrollbar {
                  width: 5px;
                  transition-duration: 250ms;
                
                }

                /* Track */
                *::-webkit-scrollbar-track {
                  background: #ffffff1a;
                  transition-duration: 250ms;
                
                }
 
                /* Handle */
                *::-webkit-scrollbar-thumb {
                  background: rgb(255, 255, 255);
                  transition-duration: 250ms;
                
                }

                /* Handle on hover */
                *::-webkit-scrollbar-thumb:hover {
                  background: rgb(0, 247, 255); 
                  transition-duration: 250ms;
                
                } `}
            />
        </>
    )
}