import { UserCommentsProvider } from '../../context/UserCommentsProvider';
import { CurrentUserProvider } from '../../context/CurrentUserProvider';
import CommentContainer from '../CommentContainer/CommentContainer';

function App() {

  return (
    <CurrentUserProvider> 
      <UserCommentsProvider>
        <CommentContainer />
      </UserCommentsProvider>
    </CurrentUserProvider>
  );
}

export default App;
