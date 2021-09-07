import React from "react";
import { Switch, Route } from "react-router";
import { Provider as StacksProvider } from "react-stacks";
import { Container, View, Heading, Link } from "react-essentials";
import AlertsStack from "./components/AlertsStack";
import ToastsStack from "./components/ToastsStack";
import Elements from "./pages/Elements";
import FormElements from "./pages/FormElements";

const stacks = {
  alerts: AlertsStack,
  toasts: ToastsStack,
};

function App() {
  return (
    <StacksProvider stacks={stacks} autoDismiss={3000}>
      <Container styleName="my-5">
        <View styleName="flex-row jc-center">
          <Heading size={3} styleName="mb-5">
            <Link to="/elements">Elements</Link> |{" "}
            <Link to="/form-elements">Form Elements</Link>
          </Heading>
        </View>
        <Switch>
          <Route exact path="/">
            <Elements />
          </Route>
          <Route path="/elements">
            <Elements />
          </Route>
          <Route path="/form-elements">
            <FormElements />
          </Route>
        </Switch>
      </Container>
    </StacksProvider>
  );
}

export default App;
