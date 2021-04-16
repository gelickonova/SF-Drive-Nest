import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Footer from "./Footer";
import FaqMain from "./FaqMain";
import AboutUsMain from "./AboutUsMain"
import '../../scss/aboutus.scss'
import '../../scss/faq.scss';
import '../../scss/header.scss';
import '../../scss/footer.scss';
import '../../scss/register.scss';
import '../../scss/registertwo.scss';
import Header from "./Header";
import RegisterOneMain from "./RegisterOneMain";
import RegisterTwoMain from "./RegisterTwoMain";
import RegisterThreeMain from "./RegisterThreeMain"
import RegisterSuccess from "./RegisterSuccess";

export default class SFDrive extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<React.Fragment>
            <Header/>
            <Switch>
                <Route path="/aboutus">
                    <AboutUsMain/>
                    <Footer/>
                </Route>
                <Route path="/faq">
                    <FaqMain/>
                    <Footer/>
                </Route>
                <Route path="/registration/step1" component={RegisterOneMain}/>
                <Route path="/registration/step2" component={RegisterTwoMain}/>
                <Route path="/registration/step3" component={RegisterThreeMain}/>
                <Route path="/registration/done" component={RegisterSuccess}/>
                <Route path="/">
                    <AboutUsMain/>
                    <Footer/>
                </Route>
            </Switch>
        </React.Fragment>);
    }
}
