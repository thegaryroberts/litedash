import "Themes/globals"

import { ThemeProvider } from "emotion-theming"
import React, { SFC } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"

import { Errors } from "Components/errors"
import { Headers } from "Components/headers"
import { Navigation } from "Components/navigation"
import { Demos } from "Demos"
import { Pages } from "Pages"
import { theme } from "Themes"

const App: SFC = () => (
    <ThemeProvider theme={theme}>
        <>
            <Headers.Site>ROYAL SAMPLER</Headers.Site>
            <Errors.Boundary>
                <Router>
                    <>
                        <Navigation.Site.Set>
                            <Navigation.Site.LinkItem to="/" name="Home" exact={true} />
                            <Navigation.Site.LinkItem to="/demos" name="Demos" />
                            <Navigation.Site.LinkItem to="/faq" name="F.A.Q." />
                        </Navigation.Site.Set>
                        <Switch>
                            <Route path="/" exact={true} component={Pages.Home} />
                            <Route path="/demos" exact={true} component={Demos.Root} />
                            <Route path="/demos/color-wheel" component={Demos.ColorWheel} />
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
