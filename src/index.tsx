import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GIFCard } from './types';
import { getGifProps } from './data/transformations';
import { Section } from './components/section';

let gifCards: GIFCard[] = [
  {
    id: "iJyDdK1q9zdnLtzOBO",
    title: "Jill Scott Shimmy GIF by BET",
    url: "https://media3.giphy.com/media/YrenQlURSKKbZXjtyB/200.webp?cid=11c8cb106b5ec6d33822cfd1dba00c806e896429ab751b63&rid=200.webp",
    importedDaysAgo: "2 days ago",
    isLiked: false
  },
  {
    id: "2ishoJbg7ljjAwZ1Q6",
    title: "Adorable GIF by MOODMAN",
    url: "https://media2.giphy.com/media/1fY6aevf8CBIK5XMs1/200.gif?cid=11c8cb106b5ec6d33822cfd1dba00c806e896429ab751b63&rid=200.gif",
    importedDaysAgo: "3 days ago",
    isLiked: false
  },
  {
    id: "wzxK9cmYgIPDy",
    title: "Brady Bunch K GIF",
    url: "https://media1.giphy.com/media/SXUlcDoE1Bl6xsjNr6/200.gif?cid=11c8cb106b5ec6d33822cfd1dba00c806e896429ab751b63&rid=200.gif",
    importedDaysAgo: "6 days ago",
    isLiked: false
  },
  {
    id: "ZYETZYvIk3L2CoSxIM",
    title: "John Mulaney Snl GIF by Saturday Night Live",
    url: "https://media2.giphy.com/media/322FvxfciE8UsYvILG/200.gif?cid=11c8cb106b5ec6d33822cfd1dba00c806e896429ab751b63&rid=200.gif",
    importedDaysAgo: "9 days ago",
    isLiked: false
  }
];

ReactDOM.render(
  <React.StrictMode>
    <Section title="Trending" />
  </React.StrictMode>,
  document.getElementById("root")
);
