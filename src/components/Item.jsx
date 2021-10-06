import { useSelector, connect } from 'react-redux';
import React from 'react';
import { dataRequest } from '../actions/actionCreators';
import Loader from './Loader.jsx';
import ReloadButton from './ReloadButton.jsx';


function Item(props) {
    const { item, loading, error } = useSelector((state) => state.item);
    const { getItem } = props;

    React.useEffect(() => {
        getItem();
    },[getItem]);

    if (loading) return (<Loader/>);
    if (error) return (<ReloadButton fn={getItem}/>);
    return (
        <React.Fragment>
            <dl className="row">
                <dt className="col-sm-3">Name</dt>
                <dd className="col-sm-9">{item.name}</dd>
                <dt className="col-sm-3">Price</dt>
                <dd className="col-sm-9">{item.price} p.</dd>
                <dt className="col-sm-3">Description</dt>
                <dd className="col-sm-9">{item.content}</dd>
            </dl>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    const { item, loading, error } = state.item;
    return { item, loading, error };
  };
  
const mapDispatchToProps = (dispatch,ownProps) => ({
    getItem() { dispatch(dataRequest(`http://localhost:7070/api/services/${ownProps.match.params.id}`)) }
  });

export default connect(mapStateToProps,mapDispatchToProps)(Item);