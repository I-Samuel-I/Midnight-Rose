import Logo from "./_logo";
import Nav from "./_nav";
import * as S from "./style"
export default function Header(){
    return(
        
        <S.HeaderContainer>
           <Logo/> 
           <Nav/>
        </S.HeaderContainer>
        
      
    )
}