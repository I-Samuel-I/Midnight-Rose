import * as img from "../../../assets/images/index"
import * as S from "./style"
export default function Nav(){
    return(
        <>
        <S.NavContainer>
            <ul>
                <a href="https://github.com/I-Samuel-I" target="_blank">
                 <img src={img.github} alt="Github"/>   
                </a>
                
               <li>ABOUT</li> 
               <li>WORKS</li>
               <li>CONTACT</li>
            </ul>
            
        </S.NavContainer>
        </>
    )
}