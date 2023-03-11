import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";
import { navigationItems } from "data/navigation";
import { DateTime } from "luxon";
import { RoutePath } from "types/routes";
import * as S from "./style";

const Home = () => {

  const dataDescription = DateTime.now().toLocaleString({ ... DateTime.DATE_SHORT, weekday: 'long'});

  return (
    <S.Home>
      <Menu 
      active={RoutePath.HOME}
      navItems={navigationItems}/>
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dataDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              {<Search/>}
              <input type="text" placeholder="Qual sabor" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Pizzas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>Lista de produtos</p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>detalhes dos pedidos</p>
      </aside>
    </S.Home>
  );
};

export default Home;
