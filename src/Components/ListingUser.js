import { useEffect } from "react";
import { connect } from "react-redux";
import { FetchUserList } from "../Redux/Action";

const ListingUser = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])
    return (
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
                        <tbody className="">

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


