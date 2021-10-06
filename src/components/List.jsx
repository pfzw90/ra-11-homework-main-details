import { useSelector, connect } from 'react-redux';
import React from 'react';
import { dataRequest } from '../actions/actionCreators';
import Loader from './Loader.jsx';
import ReloadButton from './ReloadButton.jsx';


function List(props) {
    const { items, loading, error } = useSelector((state) => state.list);
    const { getItems } = props;
    
    React.useEffect(() => {
        getItems();
      },[getItems]);

    if (loading) return (<Loader/>);
    if (error) return (<ReloadButton fn={getItems}/>);
    return (
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((i) => 

                        (<tr key={i.id}>
                            <th scope="row">{i.id}</th>
                            <td><a href={`/${i.id}/details`}>{i.name}</a></td>
                            <td>{i.price}р.</td>
                        </tr>)

                    )}
                    
                </tbody>
            </table>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    const { items, loading, error } = state.list;
    return { items, loading, error };
  };
  
const mapDispatchToProps = (dispatch) => ({
    getItems () { dispatch(dataRequest(`http://localhost:7070/api/services`)) }
  });

export default connect(mapStateToProps,mapDispatchToProps)(List);