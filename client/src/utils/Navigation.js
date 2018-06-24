import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Menu,
  Dropdown,
  Icon,
  Button,
} from 'semantic-ui-react';

class Navigation extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Menu borderless stackable attached="top" color="orange">
              <Container>
                <Menu.Item header>
                  <Link to="/">
                    <img
                      src="/logo.png"
                      style={{ height: 32 }}
                      alt="logo"
                    />
                  </Link>
                </Menu.Item>
                <Menu.Item header>
                  SomeShit
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item>
                    <Button as="a" href="http://localhost:3000/auth/facebook" color="facebook">
                      <Icon name="facebook square" />
                      Login with facebook
                    </Button>
                  </Menu.Item>
                  <Dropdown
                    text="Consumer"
                    pointing="top right"
                    className="link item"
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item
                        as={Link}
                        to="/user/register"
                      >
                        Signup
                      </Dropdown.Item>
                      <Dropdown.Item
                        as={Link}
                        to="/user/login"
                      >
                        Login
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Menu>
                <Menu.Item
                  as={Link}
                  to="/user/logout"
                >
                  Logout
                </Menu.Item>
              </Container>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};

export default Navigation;
