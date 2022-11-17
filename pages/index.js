import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";
import userData from "@constants/data";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


export default function Home() {
  return (
    <ContainerBlock
      title="Adnan Ahmed - Developer, Writer, Creator"
      description="Portolio Website"
    >
    <RoughNotationGroup show={true}>
      <Hero />
      <FavouriteProjects />
    </RoughNotationGroup>
    </ContainerBlock>
  );
}


