import React from 'react';
import {Header} from "./Header";
import {res} from "../../App";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: string, email: string, login: string) => void
}
type HeaderContainerType = MapStateToPropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        res.get(`auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }
}

const mapStateToProps = (state: any): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)