import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//Import pages
import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';

//Adiciona pages ao createSwitchNavigator, dando opção do usuário navegar entre as telas
const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    List,
    Book
  })
);

export default Routes;