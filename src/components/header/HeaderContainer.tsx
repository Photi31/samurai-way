import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUser} from "../../redux/reducers/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchPropsType = {
    getAuthUser: () => void
}
type HeaderContainerType = MapStateToPropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        this.props.getAuthUser()
    }

    render() {
        return <Header isAuth={false} //fix me: this.props.isAuth
                       login={this.props.login}
        />
    }
}

const mapStateToProps = (state: any): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUser})(HeaderContainer)