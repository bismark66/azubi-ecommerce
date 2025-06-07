import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Apptheme } from "./utils/theme";
import AppButton from "./components/atoms/AppButton";
import { Text } from "@mantine/core";
import AppHeader from "./components/molecules/Header";
import { AppFooter } from "./components/molecules/Footer";
import Card from "./components/molecules/Card";
import CategoryCard from "./components/molecules/categoryCard";
import Hero from "./components/molecules/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MantineProvider theme={Apptheme}>
        <AppHeader />
        <Hero />
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          {/* <Button
            color="primary.9"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button> */}

          <AppButton
            size="xl"
            color="secondary.2"
            handleClick={() => setCount((count) => count + 1)}
          >
            <Text fw={700}> COUNT IS {count} </Text>
          </AppButton>

          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        {/* <Card /> */}
        {/* <CategoryCard
          imageSrc={
            "https://images.unsplash.com/photo-1744487347466-9d2087a0fbc1?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Headphones"
          href="/headphones"
          bgColor="bg-[#F1F1F1]"
        /> */}
        <CategoryCard
          image={
            "https://images.unsplash.com/photo-1744487347466-9d2087a0fbc1?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title="Headphones"
          onShopClick="/headphones"
          imageBackground="bg-[#F1F1F1]"
        />
        <AppFooter />
      </MantineProvider>
    </>
  );
}

export default App;
