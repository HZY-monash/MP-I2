import Barcharts from "../components/Barcharts";
import Piecharts from "../components/Piechart";
import NavBar from "../components/NavBar";
import "./Visualization.css";

import Footer from "../components/Footer";

import { useEffect } from "react";

export default function Visualization() {
  useEffect(() => {
    document.title = "Composting Hero - Visual";
  }, []);
  return (
    <>
      <NavBar />
      <div className="counter">
        <iframe
          title="Tons of waste dumped"
          src="https://www.theworldcounts.com/embeds/counters/104?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=24"
          style={{
            border: "none",
            height: "200px",
            width: "300px",
          }}
        ></iframe>
      </div>

      <div className="container">
        <div className="vsl-title">
          The benefits of using compost for mitigating climate change
        </div>
        <div className="vsl-text">
          <p>
            In Australia during the year 2007-08, about 3.7 million tonnes of
            organic waste like garden leftovers, food scraps, and some wood
            waste were recycled instead of being dumped into landfills. This
            recycling effort helped avoid creating methane gas, which is much
            more harmful than carbon dioxide, equivalent to around 4.28 million
            tonnes of carbon dioxide. Methane is created when organic material
            decays in landfills, and it's a lot more damaging to our climate
            than carbon dioxide.
          </p>
          <p>
            Even though capturing gas from landfills reduced greenhouse gas
            emissions by about 4.5 million tonnes, the emissions would have been
            nearly double if we hadn't recycled those organics. If we managed to
            recycle 50% of all the organic waste we still send to landfills
            (about 9.68 million tonnes), we could prevent over 5 million tonnes
            of methane emissions every year, essentially doubling our methane
            savings to around 10 million tonnes.
          </p>
          <p>
            Aside from managing waste, improving how we farm, especially the
            management of crop-growing land, offers a big chance to cut down on
            greenhouse gases. In 2008, emissions from farming activities (not
            counting those from changing land use and forest management) and
            waste handling were responsible for 15.2% and 2.5%, respectively, of
            Australia's total greenhouse gas emissions. By 2030, most of the
            potential to reduce these emissions from agriculture could come from
            storing more carbon in the soil, which can be done by adding more
            carbon to it or losing less, alongside efforts to reduce emissions
            from nitrous oxide, another potent greenhouse gas.
          </p>
        </div>
        <div className="vsl-part">
          <Barcharts />
          <Piecharts />
          {/* <img src={vsBins} alt="" className="vsl-bins" /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
