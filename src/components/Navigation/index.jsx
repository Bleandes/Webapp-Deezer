import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Tab, TabIcon, TabName } from "./style";

const Navigation = (props) => {
  const history = useHistory();
  const [currentPath, setCurrentPath] = useState(undefined);
  const { tabs } = props;

  const handleTab = useCallback((path) => {
    history.push(path);
  }, [history]);

  useEffect(() => {
    setCurrentPath(history.location.pathname);
  }, [history]);

  return (
    <Container>
      {tabs.map(({ name, path, icon }) => (
        <Tab key={name + path} onClick={() => handleTab(path)}>
          <TabIcon
            style={{
              fill: currentPath === path ? "#FFFFFF" : "#8D8D8D",
            }}
          >
            {icon}
          </TabIcon>
          <TabName>{name}</TabName>
        </Tab>
      ))}
    </Container>
  );
};

Navigation.defaultProps = {
  tabs: [],
};

export default Navigation;
