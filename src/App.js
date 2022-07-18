import React, { useState, lazy, Suspense } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Toolbar from "@material-ui/core/Toolbar";

function App() {
  const [activTab, setActivTab] = useState(0);
  const handleChange = (event, newValue) => {
    setActivTab(newValue);
  };

  const tabs = [
      { id: "AddPlusBeforeWords", name: "Добавить +" },
      { id: "MinusWords", name: "МинусСлова+" },
      { id: "AddMinusBeforeWords", name: "Добавить -" },
  ];

  const tabsItems = tabs.map((tab) => <Tab label={tab.name} key={tab.id} />);

  const Panel = lazy(() => import(`./${tabs[activTab].id}`));

  return (
    <>
      <AppBar position="static">
        <Tabs value={activTab} onChange={handleChange}>
          {tabsItems}
        </Tabs>
      </AppBar>
      <Suspense fallback={<h1>Still Loading…</h1>}>
          <Toolbar />
          <Panel />
      </Suspense>
    </>
  );
}

export default App;
