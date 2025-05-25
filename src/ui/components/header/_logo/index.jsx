import * as img  from "../../../../assets/images/index"
import * as S from "./style"
export default function Logo(){
    return(
        <S.LogoContainer>
        <img src={img.logo} alt="Rose"/>
        <h1>MIDNIGHT ROSE</h1>
        </S.LogoContainer>
    )
}