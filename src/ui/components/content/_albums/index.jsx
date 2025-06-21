import * as img from "../../../../assets/images/index";
import * as S from "./style";

import { albums } from "./albumsData";
export default function Albums() {
  return (
    <S.AlbumsContainer>
      <S.AlbumsAside id="albums">
        <h1>ALBUMS</h1>
        <div>
          <a
            href="https://open.spotify.com/intl-pt/artist/6mEQK9m2krja6X1cfsAjfl/discography/album"
            target="_blank"
            rel="noopener noreferrer"
          >
            SPOTIFY
          </a>
          <a href="https://www.youtube.com/@Ado1024/releases" target="_blank">
            YOUTUBE
          </a>
        </div>
      </S.AlbumsAside>
      <S.AlbumsList>
        {albums.map((album) => (
          <figure key={album.title}>
            <div className="ImageContainer">
              <a href={album.spotify} target="_blank" rel="noopener noreferrer">
                <img src={img[album.image]} alt={album.title} />
              </a>
              <div className="Overlay">
                <h1>{album.title}</h1>
                <a
                  href={album.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
            <figcaption>{`${album.title} · ${album.year}`}</figcaption>
          </figure>
        ))}
      </S.AlbumsList>
    </S.AlbumsContainer>
  );
}
