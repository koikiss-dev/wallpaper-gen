import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import useBlurData from "use-next-blurhash";
const CardContainer = styled.div`
  margin-bottom: 10px;
  .image_card {
    border-radius: 10px;
  }
`;
const CardImageInfo = styled.div`
  position: relative;
  cursor: pointer;
`;
const ContainerUsuario = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 3.5px;
  @media (min-width: 1000px) {
    padding: 10px 30% 10px 15px;
  }
  box-shadow: 0px 2px 100px 30px rgba(0, 0, 0, 0.6) inset;
  -webkit-box-shadow: 0px 2px 100px 30px rgba(0, 0, 0, 0.6) inset;
  -moz-box-shadow: 0px 2px 100px 30px rgba(0, 0, 0, 0.6) inset;
  border-radius: 0 10px 0 10px;
  padding: 5px 30% 5px 15px;
  display: flex;
  align-items: center;

  .spanInfo {
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 0 15px;
    @media (min-width: 1000px) {
      font-size: 18px;
    }
  }
  .image_card {
    border-radius: 100px;
  }
`;
const Card = ({
  image,
  blur,
  w,
  h,
  user,
  user_image,
  id_user,
  user_name,
  id_image,
}) => {
  const [blurDataUrl] = useBlurData(blur);
  return (
    <CardContainer>
      <CardImageInfo>
        <Link href={`/photo/${id_image}`} passHref>
          <Image
            className="image_card"
            src={image}
            alt={id_image}
            width={w}
            height={h}
            quality={50}
            /*loading={lazy o eager} */
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </Link>
        <ContainerUsuario>
          <Image
            className="image_card"
            src={user_image}
            alt={id_user}
            width={30}
            height={30}
            placeholder="blur"
            blurDataURL
          />
          <Link href={`/user/${user_name}`} passHref>
            <span className="spanInfo">{user}</span>
          </Link>
        </ContainerUsuario>
        {/* <FavoriteContainer value={id_image} onClick={handleFavorite}>
          {favorite ? (
            <box-icon
              id={id_image}
              name="heart"
              color="#fff"
              type="solid"
            ></box-icon>
          ) : (
            <box-icon
              id={id_image}
              name="heart"
              color="#fff"
              type="regular"
            ></box-icon>
          )}
        </FavoriteContainer> */}
      </CardImageInfo>
    </CardContainer>
  );
};

export default Card;
