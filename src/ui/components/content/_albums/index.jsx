import * as img from "../../../../assets/images/index";
import * as S from "./style";
export default function Albums() {
  return (
    <S.AlbumsContainer>
      <S.AlbumsAside>
        <h1>ALBUMS</h1>
        <div>
          <a href="https://open.spotify.com/intl-pt/artist/6mEQK9m2krja6X1cfsAjfl/discography/album" target="_blank">SPOTIFY</a>
          <a href="https://www.youtube.com/@Ado1024/releases" target="_blank">YOUTUBE</a>
        </div>
      </S.AlbumsAside>
      <S.AlbumsList>
        <figure>
          <div className="ImageContainer">
            <img src={img.kyougen} alt="KYOUGEN" />
            <div className="Overlay">
              <h1>KYOUGEN</h1>
              <a href="https://open.spotify.com/intl-pt/album/4muEF5biWb506ZojGMfHb7?si=sgRLUFLUTJKk6U96unxePw"target="_blank">
                VIEW MORE
              </a>
            </div>
          </div>
          <figcaption>KYOUGEN · 2022</figcaption>
        </figure>
        <figure>
          <div className="ImageContainer">
            <img src={img.uta} alt="UTA SONGS" />
            <div className="Overlay">
              <h1>UTA SONGS</h1>
              <a href="https://open.spotify.com/intl-pt/album/7Ixqxq13tWhrbnIabk3172?si=OeBJXX1qSVOE594KqyMbFg" target="_blank"> 
                VIEW MORE
              </a>
            </div>
          </div>

          <figcaption>UTA SONGS · 2022</figcaption>
        </figure>
        <figure>
          <div className="ImageContainer">
            <img src={img.utattemita} alt="UTATTEMITA" />
            <div className="Overlay">
              <h1>UTATTEMITA</h1>
              <a href="https://open.spotify.com/intl-pt/album/2tGokYNjX87AAodtbLBYuf?si=couTBLCGQaSqwyQoMAbs1g" target="_blank"> 
                VIEW MORE
              </a>
            </div>
          </div>
          <figcaption>UTATTEMITA · 2023</figcaption>
        </figure>
        <figure>
          <div className="ImageContainer">
            <img src={img.adoShow} alt="ADO SHOW" />
            <div className="Overlay">
              <h1>ADO SHOW</h1>
               <a href="https://open.spotify.com/intl-pt/album/31LvSRXGPVhYs2EZFK0BEU?si=-MnhfiiTSL6-goNwWHRZpQ" target="_blank"> 
                VIEW MORE
              </a>
            </div>
          </div>
          <figcaption>ADO SHOW · 2024</figcaption>
        </figure>
        <figure>
          <div className="ImageContainer">
            <img src={img.zanmu} alt="ZANMU" />
            <div className="Overlay">
              <h1>ZANMU</h1>
              <a href="https://open.spotify.com/intl-pt/album/3YQA0MVV7U5puzsxGSOhlU?si=lcw_ZdcdSuWQVMxpYKa2qA" target="_blank"> 
                VIEW MORE
              </a>
            </div>
          </div>
          <figcaption>ZANMU · 2024</figcaption>
        </figure>
        <figure>
          <div className="ImageContainer">
            <img src={img.adoBest} alt="ADO'S BEST" />
            <div className="Overlay">
              <h1>ADO'S BEST</h1>
               <a href="https://open.spotify.com/intl-pt/album/4G1L7sZheq5RAFNbqSbp3O?si=edk58GRUQJytGSi55L6aKA" target="_blank"> 
                VIEW MORE
              </a>
            </div>
          </div>
          <figcaption>ADO' BEST · 2025</figcaption>
        </figure>
      </S.AlbumsList>
    </S.AlbumsContainer>
  );
}
