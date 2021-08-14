import React, { useState } from 'react';
import Select, { OptionsType } from 'react-select';
import ReactDOMServer from "react-dom/server";
import fileDownload from 'js-file-download';
import prettier from 'prettier';
import Button from '../components/button';
import Wrapper from '../components/wrapper';
// import Input from '../components/input';
import { PlanetList } from '../constants';
import DND from '../components/dnd';

const MainPage = (): React.ReactElement => {
  const [planets, setPlanets] = useState<OptionsType<IPlanet>>([]);
  const [resultList, setResultList] = useState<IPlanetList[]>([]);

  const generatePlanetsList = () => {
    const lists: IPlanetList[] = planets.map(
      (item: IPlanet, index: number) => ({
        id: index,
        ...item,
      })
    );
    setResultList(lists);
  };

  const handleRLDDChange = (reorderedItems: IPlanetList[]) => {
    setResultList(reorderedItems);
  };

  const downloadPlanets = () => {
    const html = ReactDOMServer.renderToStaticMarkup(<MainPage />);
    const htmlWDoc = `<!DOCTYPE html><body>${html}</body></html>`;
    const blob = new Blob([htmlWDoc]);
    fileDownload(blob, `export-${new Date().getTime()}.html`);
  };

  return (
    <div className="container mx-auto bg-gray-500">
      <Wrapper>
        <Select
          isMulti
          options={PlanetList}
          name="planets"
          classNamePrefix="planets"
          onChange={setPlanets}
        />
        {/* <Input placeholder="Jupiter, Earth" /> */}
        <Button onClick={generatePlanetsList}>Generate</Button>
        <DND items={resultList} handleRLDDChange={handleRLDDChange} />
        <Button onClick={downloadPlanets}>Download</Button>
      </Wrapper>
    </div>
  );
};

export default MainPage;
