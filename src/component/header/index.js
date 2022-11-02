import { Link } from "react-router-dom";
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Burger,
  Text,
  List,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "./index.css";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
      backgroundColor: "white",
      color: "white",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "white",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "#555555",
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export default function HeaderVar({ links }) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} sx={{ color: "white" }}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Link to={link.link} className={classes.link}>
            <Center>
              <span className={classes.linkLabel}>{link.label}</span>
            </Center>
          </Link>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <Header
      className="header"
      height={HEADER_HEIGHT}
      sx={{
        borderBottom: 0,
        backgroundColor: "#333333",
        marginBottom: "0px!important",
      }}
      mb={120}
    >
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <Text
            sx={{
              color: "rgb(142, 229, 146)",
              fontSize: "1.5em",
              fontWeight: "bold",
            }}
          >
            QR PLANNER
          </Text>
          <Group
            spacing={10}
            className={classes.links}
            sx={{ paddingLeft: "20px" }}
          >
            {items}
          </Group>
        </Group>
        <Menu>
          <Menu.Target>
            <span className="user-avatar">
              <img src="/assets/img/img_default_avatar.png" alt="user" />
            </span>
          </Menu.Target>
          <Menu.Dropdown
            sx={{
              transform: "translate(-20px, -10px)",
              width: "180px!important",
            }}
          >
            <Menu.Item sx={{ fontWeight: "bold", fontSize: "0.8em" }}>
              Tom James
            </Menu.Item>
            <Menu.Divider />
            <Link to="/profile">
              <Menu.Item sx={{ fontSize: "0.8em", height: "30px" }}>
                Profile
              </Menu.Item>
            </Link>
            <Menu.Item sx={{ fontSize: "0.8em", height: "30px" }}>
              Billing
            </Menu.Item>
            <Link to="/changepassword">
              <Menu.Item sx={{ fontSize: "0.8em", height: "30px" }}>
                Change Password
              </Menu.Item>
            </Link>
            <Menu.Divider />
            <Link to="/landing">
              <Menu.Item sx={{ fontSize: "0.8em", height: "30px" }}>
                Getting Started
              </Menu.Item>
            </Link>
            <Menu.Divider />
            <Link to="/signin">
              <Menu.Item sx={{ fontSize: "0.8em", height: "30px" }}>
                Sign out
              </Menu.Item>
            </Link>
          </Menu.Dropdown>
        </Menu>
      </Container>
      {opened && <List sx={{ backgroundColor: "#333333" }}>{items}</List>}
    </Header>
  );
}
