import Logo from "../logo";
import Nav from "../nav";
import * as S from "./style"
export default function Header(){
    return(
        
        <S.HeaderContainer>
           <Logo/> 
           <Nav/>
        </S.HeaderContainer>
        
      
    )
}