import SignIn from '../../customer/component/CustomerSign';
import { useHistory, useLocation } from 'react-router-dom'
import web3 from '../../common/gifs/seeyousson.gif'


const SellerLogout = () => {
    const history = useHistory()
    localStorage.removeItem('seller')
    return (
        <div className="col-lg-7" >
            <div className="right-center">
                <button
                    onClick={() => {
                        history.push(`/home`)
                    }}
                    className="btn btn-success btn-sm">
                    SignIn Again
                </button>        </div>
            <br />
            <blockquote className="blockquote mb-0" style={{ paddingLeft: "100px" }}>
                <p className="text-center" >
                    {' '}
                    <h2><i>   Have a nice day!!.<br />
                        You are successfully logged out.</i></h2> {' '}
                </p>
                <img src={web3} alt="web" style={{ paddingLeft: "200px" }} />


            </blockquote>


        </div>

    )
}
export default SellerLogout