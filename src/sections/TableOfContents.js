import '../App.css';;
import '../index.css';

const TableOfContents = () => {
    return (
        <div>
            <ul className="project-body list">
                <li>
                  <a href="#Server-Side_Mods" className="link"><span className="number">1</span><span>Server-Side Mods</span></a>
                  <ul className="list">
                    <li>
                      <a href="#Infiltration" className="link"><span className="number">1.1</span><span>Infiltration</span></a>
                      <ul className="list">
                        <li>
                          <a href="#Firearms" className="link"><span className="number">1.1.1</span><span>Firearms</span></a>
                        </li>
                        <li>
                          <a href="#Helicopters" className="link"><span className="number">1.1.2</span><span>Helicopters</span></a>
                        </li>
                        <li>
                          <a href="#Spatial_Interface" className="link"><span className="number">1.1.3</span><span>Spatial Interface</span></a>
                        </li>
                        <li>
                          <a href="#Screen_Effects" className="link"><span className="number">1.1.4</span><span>Screen Effects</span></a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#Project:_MTF" className="link"><span className="number">1.2</span><span>Project: MTF</span></a>
                      <ul className="list">
                        <li>
                          <a href="#Story" className="link"><span className="number">1.2.1</span><span>Story</span></a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#Unsecured" className="link"><span className="number">1.3</span><span>Unsecured</span></a>
                      <ul className="list">
                        <li>
                          <a href="#Anomalies" className="link"><span className="number">1.3.1</span><span>Anomalies</span></a>
                        </li>
                        <li>
                          <a href="#Map" className="link"><span className="number">1.3.2</span><span>Map</span></a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <a href="#Games" className="link"><span className="number">2</span><span>Games</span></a>
                  <ul className="list">
                    <li>
                      <a href="#SCP:_Descent" className="link"><span className="number">2.1</span><span>SCP: Descent</span></a>
                    </li>
                  </ul>
                </li>
              </ul>
        </div>
    );
}

export default TableOfContents;