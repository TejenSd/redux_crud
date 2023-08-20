import { useEffect } from "react";
import { connect } from "react-redux";
import { FetchUserList, RemoveUser } from "../Redux/Action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ListingUser = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])
    const handledelete = (code) => {
        if(window.confirm('Are you sure to delete?')){
            props.RemoveUser(code);
            toast.success("User Deleted Successfully");
            props.loaduser();
            
        }
    }
    
    return (
        props.user.loading ? <div><h1>Loading...</h1></div> :
            props.user.errmessge ? <div><h1>{props.user.errmessge}</h1></div> :
                <div>
                    <div className="card">
                        <div className="card-header">
                            <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link>
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
                                                    <Link to={'/user/edit/'+item.id} className="btn btn-primary">Edit</Link>
                                                    &nbsp;
                                                    <Link onClick={() => {handledelete(item.id)}} className="btn btn-danger">Delete</Link>

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
        RemoveUser:(code) => dispatch(RemoveUser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingUser);