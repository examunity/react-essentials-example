import React from "react";
import {
  Collapse,
  View,
  Text,
  Grid,
  Nav,
  Progress,
  Spinner,
  Button,
  Dropdown,
  Card,
  Link,
  BlockLink,
  Tab,
  Badge,
  injectTooltip,
  injectPopover,
} from "react-essentials";
import { Route, Switch as RouteSwitch } from "react-router";
import useAlerts from "../../hooks/useAlerts";
import useToasts from "../../hooks/useToasts";
import ControlledModal from "./ControlledModal";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const TooltipButton = injectTooltip(Button);
const PopoverButton = injectPopover(Button);

function Elements() {
  const alerts = useAlerts();
  const toasts = useToasts();

  const handleAddCreatedAlertClick = () => {
    alerts.add({
      color: "success",
      content: "Sheet has been created.",
    });
  };

  const handleAddDeletedAlertClick = () => {
    alerts.add({
      color: "danger",
      title: "Error",
      content: "Resource could not be loaded.",
      dismissible: false,
    });
  };

  const handleAddToastClick = () => {
    toasts.add({
      title: "Toast",
      content:
        "Mirko hat für Alte Klausur in Business Decision Making eine Lösung erstellt.",
      link: "/",
    });
  };

  const handleAddSimpleToastClick = () => {
    toasts.add({
      content:
        "Mirko hat für Alte Klausur in Business Decision Making eine Lösung erstellt.",
      dismissible: false,
    });
  };

  return (
    <>
      <Card styleName="mb-3">
        <Card.Header>
          <Text>Basic components</Text>
        </Card.Header>
        <Card.Body>
          <Text styleName="mb-3">Test {"<Link>...</Link>"}</Text>
          <Text styleName="mb-3">
            <Link to="/form-elements">Link to form elements page</Link>
          </Text>
          <Text styleName="mb-3">
            <Link to="https://www.examunity.com" external={{ target: "self" }}>
              Link to external page (same browser window)
            </Link>
          </Text>
          <Text styleName="mb-3">Test {"<Link>...</Link>"}</Text>
          <Text styleName="mb-3">
            <Link onPress={handleAddToastClick}>
              Add alert on action link click
            </Link>
          </Text>
          <BlockLink onPress={handleAddToastClick} styleName="mb-3">
            <Text>Add alert on action link click (block link)</Text>
          </BlockLink>
          <Text styleName="mb-3">Test {"<Button>...</Button>"} (large)</Text>
          <View styleName="flex-row mb-3">
            <Button onPress={() => {}} size="lg">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="secondary" size="lg">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="link" size="lg">
              <Text>Test</Text>
            </Button>
          </View>
          <Text styleName="mb-3">Test {"<Button>...</Button>"}</Text>
          <View styleName="flex-row mb-3">
            <Button onPress={() => {}}>
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="secondary">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="success">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="info">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="warning">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="danger">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="dark">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="light">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="link">
              <Text>Test</Text>
            </Button>
          </View>
          <View styleName="flex-row mb-3">
            <Button outline onPress={() => {}}>
              <Text>Test</Text>
            </Button>
            <Button outline onPress={() => {}} color="secondary">
              <Text>Test</Text>
            </Button>
            <Button outline onPress={() => {}} color="success">
              <Text>Test</Text>
            </Button>
            <Button outline onPress={() => {}} color="info">
              <Text>Test</Text>
            </Button>
            <Button outline onPress={() => {}} color="warning">
              <Text>Test</Text>
            </Button>
            <Button outline onPress={() => {}} color="danger">
              <Text>Test</Text>
            </Button>
            <Button outline onPress={() => {}} color="dark">
              <Text>Test</Text>
            </Button>
          </View>
          <Text styleName="mb-3">Test {"<Button>...</Button>"} (small)</Text>
          <View styleName="flex-row mb-3">
            <Button onPress={() => {}} size="sm">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="secondary" size="sm">
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="link" size="sm">
              <Text>Test</Text>
            </Button>
          </View>
          <Text styleName="mb-3">
            Test {"<Button>...</Button>"} (disabled/active)
          </Text>
          <View styleName="flex-row mb-3">
            <Button onPress={() => {}} disabled>
              <Text>Test</Text>
            </Button>
            <Button onPress={() => {}} color="secondary" active>
              <Text>Test</Text>
            </Button>
          </View>
          <Text styleName="mb-3">Test {"<Progress />"}</Text>
          <Progress styleName="mb-3">
            <Progress.Bar value={50} />
          </Progress>
          <Progress styleName="mb-3">
            <Progress.Bar value={33} color="success" />
            <Progress.Bar value={25} color="danger" />
            <Progress.Bar value={12.5} striped />
          </Progress>
          <Text styleName="mb-3">Test {"<Spinner />"}</Text>
          <Grid>
            <Grid.Box size={3}>
              <Spinner />
            </Grid.Box>
            <Grid.Box size={3}>
              <Spinner variant="grow" />
            </Grid.Box>
            <Grid.Box size={3}>
              <Spinner color="danger" />
            </Grid.Box>
            <Grid.Box size={3}>
              <Spinner size="sm" />
            </Grid.Box>
          </Grid>
        </Card.Body>
      </Card>
      <Card styleName="mb-3">
        <Card.Header>
          <Text>Overlay components</Text>
        </Card.Header>
        <Card.Body>
          <Text styleName="mb-3">Test {"<Modal>...</Modal>"}</Text>
          <ControlledModal />
          <Text styleName="mb-3">Test {"<Dropdown>...</Dropdown>"}</Text>
          <View styleName="flex-row mb-3">
            <Dropdown>
              <Button
                toggle={Dropdown}
                color="secondary"
                styleName="flex-row ai-center"
                caret
              >
                <Text>Dropdown</Text>
              </Button>
              <Dropdown.Menu>
                <Dropdown.Header>
                  <Text>Header</Text>
                </Dropdown.Header>
                <Dropdown.Item onPress={() => {}}>
                  <Text>Test 1</Text>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.TextItem>
                  <Text>Test 2</Text>
                </Dropdown.TextItem>
              </Dropdown.Menu>
            </Dropdown>
          </View>
          <Text styleName="mb-3">
            Test {"<TooltipButton>...</TooltipButton>"} (delay on hide: 1000ms)
          </Text>
          <View styleName="flex-row mb-3">
            <TooltipButton
              color="secondary"
              id="TooltipExample2"
              tooltip={{
                title: "HelloWorld",
                placement: "top",
                delay: {
                  hide: 1000,
                },
              }}
            >
              <Text>Tooltip (hover focus)</Text>
            </TooltipButton>
          </View>
          <Text styleName="mb-3">
            Test {"<PopoverButton>...</PopoverButton>"}
          </Text>
          <View styleName="flex-row mb-3">
            <PopoverButton
              color="secondary"
              id="PopoverExample2"
              popover={{
                title: "Test",
                content: (
                  <Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet.
                  </Text>
                ),
                placement: "top",
                fallbackPlacement: "flip",
              }}
            >
              <Text>Popover (click)</Text>
            </PopoverButton>
          </View>
          <Text styleName="mb-3">Test alerts</Text>
          <View styleName="flex-row">
            <Button color="success" onPress={handleAddCreatedAlertClick}>
              <Text>Success Alert</Text>
            </Button>
            <Button color="danger" onPress={handleAddDeletedAlertClick}>
              <Text>Error Alert</Text>
            </Button>
            <Button color="warning" onPress={handleAddToastClick}>
              <Text>Toast I</Text>
            </Button>
            <Button color="warning" onPress={handleAddSimpleToastClick}>
              <Text>Toast II</Text>
            </Button>
          </View>
        </Card.Body>
      </Card>
      <Card styleName="mb-3">
        <Card.Header>
          <Text>Collapse components</Text>
        </Card.Header>
        <Card.Body styleName="ai-start">
          <Collapse.Provider>
            <Button toggle={Collapse} styleName="mb-3">
              <Text>Collapse</Text>
            </Button>
            <Collapse>
              <Text>Collapsible text</Text>
            </Collapse>
          </Collapse.Provider>
        </Card.Body>
      </Card>
      <Card styleName="mb-3">
        <Card.Header>
          <Text>Navigation components</Text>
        </Card.Header>
        <Card.Body>
          <Text styleName="mb-3">Test {"<Nav>...</Nav>"}</Text>
          <Nav variant="tabs" styleName="flex-row mb-3">
            <Nav.Link exact to="/elements">
              <Text>Page 1</Text>
            </Nav.Link>
            <Nav.Link to="/elements/page2">
              <Text>Page 2</Text>
            </Nav.Link>
            <Nav.Link to="/elements/page3">
              <Text>Page 3</Text>
            </Nav.Link>
          </Nav>

          <RouteSwitch>
            <Route exact path="/elements" component={Page1} />
            <Route path="/elements/page2" component={Page2} />
            <Route path="/elements/page3" component={Page3} />
          </RouteSwitch>

          <Text styleName="mt-5 mb-3">
            Test {"<Nav>...</Nav>"} in {"<Tab.Provider>...</Tab.Provider>"}{" "}
            (tabs without routing)
          </Text>

          <Tab.Provider defaultActiveTarget="pane-1">
            <Nav variant="tabs" styleName="flex-row mb-3">
              <Nav.Link toggle={Tab} target="pane-1">
                <Text>Page 1</Text>
              </Nav.Link>
              <Nav.Link
                toggle={Tab}
                target="pane-2"
                styleName="flex-row ai-center"
              >
                <Text>Page 2</Text>
                <Badge color="secondary" styleName="ml-2">
                  <Text>8</Text>
                </Badge>
              </Nav.Link>
              <Nav.Link toggle={Tab} target="pane-3">
                <Text>Page 3</Text>
              </Nav.Link>
            </Nav>

            <Tab.Content>
              <Tab.Pane id="pane-1">
                <Text styleName="mb-3">Page Content 1</Text>
              </Tab.Pane>
              <Tab.Pane id="pane-2">
                <Text styleName="mb-3">Page Content 2</Text>
              </Tab.Pane>
              <Tab.Pane id="pane-3">
                <Text styleName="mb-3">Page Content 3</Text>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Provider>
        </Card.Body>
      </Card>
    </>
  );
}

export default Elements;
