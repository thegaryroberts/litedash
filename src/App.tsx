import "Themes/globals"

import { ThemeProvider } from "emotion-theming"
import React, { SFC } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import { Errors } from "Components/errors"
import { Navigation } from "Components/navigation"
import { Headers } from "Components/structure/headers"
import { Pages } from "Pages"
import { theme } from "Themes"

const App: SFC = () => (
    <ThemeProvider theme={theme}>
        <>
            <Headers.Site>ROYAL SAMPLER</Headers.Site>
            <Errors.Boundary>
                <Router>
                    <>
                        <Navigation.SiteSet>
                            <Navigation.LinkItem to="/" name="Home" exact={true} />
                            <Navigation.LinkItem to="/ucp" name="Demos" />
                            <Navigation.LinkItem to="/faq" name="F.A.Q." />
                        </Navigation.SiteSet>
                        <Switch>
                            <Route path="/" exact={true} component={Pages.Home} />
                            {/*<Route path="/demos" component={Demos} />*/}
                            <Route path="/faq" exact={true} component={Pages.FAQ.Root} />
                            <Route path="/faq/tech" component={Pages.FAQ.Tech} />
                            <Route path="/ucp" component={Pages.UCP} />
                            <Route component={Pages.FourOhFour} />
                        </Switch>
                    </>
                </Router>
            </Errors.Boundary>
        </>
    </ThemeProvider>
)

export default App
