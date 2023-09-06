import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";

const UpdateUser = () => {
    const [id, idChange] = useState(0);
    const [name, nameChange] = useState('');
    const [email, emailChnage] = useState('');
    const [phone, phoneChange] = useState('');
    const [role, roleChange] = useState('Staff');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const userObj = useSelector((state) => state.user.userObj)

    const handlesubmit = (e) => {
        e.preventDefault();
        const useObj = { id, name, email, phone, role };
        dispatch(FunctionUpdateUser(useObj,id));
        // console.log(useObj);
        navigate('/user');
    };

    useEffect(() => {
        dispatch(FetchUserObj(code));
    }, [])

    useEffect(() => {
        if (userObj) {
            idChange(userObj.id);
            nameChange(userObj.name);
            emailChnage(userObj.email);
            phoneChange(userObj.phone);
            roleChange(userObj.role);

        }
    }, [userObj])

    return (
        <>
            <form onSubmit={handlesubmit}>

                <div className="card-header" style={{ textAlign: 'left' }}>
                    <h2>Add User</h2>
                </div>
                <div className="card-body" style={{ textAlign: 'left' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Id</label>
                                <input value={id || ''} disabled="disabled" className="form-control" placeholder="Enter Name" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Name</label>
                                <input value={name || ''} onChange={(e) => nameChange(e.target.value)} className="form-control" placeholder="Enter Name" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input value={email || ''} onChange={(e) => emailChnage(e.target.value)} className="form-control" placeholder="Enter Email" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Phone</label>
                                <input value={phone || ''} onChange={(e) => phoneChange(e.target.value)} className="form-control" placeholder="Enter Phone" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Role</label>
                                <select value={role || ''} onChange={(e) => roleChange(e.target.value)} className="form-control">
                                    <option>Please Select</option>
                                    <option>Admin</option>
                                    <option>Staff</option>
                                </select>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" type="submit">Submit</button> |
                    <Link className="btn btn-danger" to="/user">Cancel</Link>
                </div>

            </form>
        </>
    );
}

export default UpdateUser;