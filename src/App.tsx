import { Footer } from "./common/components/footer/footer.component";
import { Header } from "./common/components/header/header.component";
import { MenuList } from "./modules/menu/components/menu-list/menu-list.component";
import pizzaMenu from '@app/moсks/plants.json'


export const App =() => {
  return <div>
    <Header />
    <div className="mx-12 mb-24">
 <MenuList items={pizzaMenu} />
    </div>
    <Footer/>
   
  </div>
}

export default App;
