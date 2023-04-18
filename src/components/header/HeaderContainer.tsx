import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/auth-reducer";
import {headerAPI} from "../../api/api";

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
        headerAPI.get()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
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