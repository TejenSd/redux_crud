import { useEffect } from "react";
import { connect } from "react-redux";
import { FetchUserList } from "../Redux/Action";
import { Link } from "react-router-dom";

const ListingUser = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])
    return (
        props.user.loading ? <div><h1>Loading...</h1></div> :
            props.user.errmessge ? <div><h1>{props.user.errmessge}</h1></div> :
                <div>
                    <div className="card">
                        <div className="card-header">
                            <h1>Listing User</h1>
                        </div>
                        <div className="card-header">
                            <table className="table table-bordered">
                                <thead className=" bg-dark text-white">
                                    <tr>
                                        <td>Code</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone</td>
                                        <td>Role</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.user.userlist && props.user.userlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.role}</td>
                                                <td>
                                                    <Link className="btn btn-primary">Edit</Link>
                                                    &nbsp;
                                                    <Link className="btn btn-danger">Delete</Link>

                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingUser);


