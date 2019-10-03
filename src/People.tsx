import * as React from 'react';
import { IPerson, IGotPeopleAction, IPostPerson, IPostedPersonAction, IAppState, getPeopleActionCreator, postPersonActionCreator, configureStore } from './store/store';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect, Provider } from 'react-redux';

interface IProps {
    getPeople: () => Promise<IGotPeopleAction>;
    people: IPerson[];
    peopleLoading: boolean;
    postPerson: (person: IPostPerson) => Promise<IPostedPersonAction>;
    personPosting: boolean;
  }
  
  const People: React.FC<IProps> = ({
    getPeople,
    people,
    peopleLoading,
    postPerson,
    personPosting,
  }) => {
    React.useEffect(() => {
      getPeople();
    }, []);
  
    const handleClick = () => {
      postPerson({
        toPost: {
            id: 4,
            name: 'Tom',
            age: 22
        }
      });
    };
  
    return (
        <div>
            {peopleLoading && <div>Loading...</div>}
            <ul>
            {people.map(person => (
                <li key={person.id}>{person.name}</li>
            ))}
            </ul>
            {personPosting ? (
            <div>Posting...</div>
            ) : (
            <button onClick={handleClick}>Add</button>
            )}
        </div>
    );
  };
  
  const mapStateToProps = (store: IAppState) => {
    return {
      people: store.peopleState.people,
      peopleLoading: store.peopleState.loading,
      personPosting: store.peopleState.posting,
    };
  };
  
  const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
      getPeople: () => dispatch(getPeopleActionCreator()),
      postPerson: (person: IPostPerson) => dispatch(postPersonActionCreator(person)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(People);