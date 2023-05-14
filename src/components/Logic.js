import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "./Loading";
import Movie from "./Movie";



export default function Logic(){
  const stories = [
    {
      id: 1,
      title: "How to get away with murder",
      rating: 5,
      img: "https://th.bing.com/th/id/OIP.2F-RhYdxw0nzx2nmj_oGzgHaEK?pid=ImgDet&rs=1",
    },
    {
      id: 2,
      title: "Game of thrones",
      rating: 4,
      img: "https://th.bing.com/th/id/OIP.WnueTgjv2fXTpgxsaF89vAHaEK?pid=ImgDet&rs=1",
    },
    {
      id: 3,
      title: "How i met your mother",
      rating: 5,
      img: "https://th.bing.com/th/id/R.08030b320a0ee69c93ade51717a7a030?rik=7Zt8g0df3Lvo8A&riu=http%3a%2f%2fbenkmoser.com%2fwp-content%2fuploads%2fhow-i-met-your-mother.jpeg&ehk=L86O8fmNfPjMRR2DME6v9nhtJEUreVV8yiu51XXUKAM%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 4,
      title: "Suit",
      rating: 3,
      img: "https://th.bing.com/th/id/R.88c44a0b7ca998d340a62f7903692161?rik=7BJoDloUdL2mQg&riu=http%3a%2f%2fwww.dvdsreleasedates.com%2fposters%2f800%2fS%2fSuits-2011-movie-poster.jpg&ehk=GG38%2b1iFyKazDVovzevjOMrfxNZanSXxmzZ%2fzxovzI8%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 5,
      title: "Morbius",
      rating: 4,
      img: "https://th.bing.com/th/id/R.70a1d9c378b8192546c3c1f40e762bad?rik=0HfXGLkqBvBMqw&pid=ImgRaw&r=0",
    },
  ];

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(stories);

  if (loading) {
    return (
      <>
        <Loading />
        {setLoading(false)}
      </>
    );
  } else {
    return (
      <Container>
        <Row>
          {movies.map((movie) => {
            return (
              <>
                <Movie id={movie.id} title={movie.title} rating={movie.rating} img={movie.img} />
              </>
            );
          })}
        </Row>
      </Container>
    );
  }
};