import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Loader from "react-loaders";
import { useEffect, useState } from "react";
import qrcode from "../../assets/images/qrcode.png";
import { MapContainer, TileLayer, Marker, Popup, Circle, LayersControl, LayerGroup } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const fillBlueOptions = { fillColor: 'blue' }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    // Return a cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  const handleCopyEmail = (event) => {
    event.preventDefault();
    const email = 'seanmcnt@gmail.com'; // Change this to your actual email address
    navigator.clipboard.writeText(email);
    // Optionally, you can provide some visual feedback to the user after copying
    alert(`Email address ${email} copied to clipboard!`);
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Please do not hesitate to reach out with any questions or
            opportunities.
          </p>
          <br />
          <h3>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["L","i","n", "k", "e", "d", "I","n"]}
              idx={24}/>
          </h3>
          <p className="info-linked">
            <i>Scan the QR code to find me on LinkedIn.</i>
          </p>
          <img className="qrcode" src={qrcode} alt="LinkedIn" />
        </div>
        <div className="info-map">
            Sean McNutt
            <br />
            Clarksboro, NJ 08020
            <br />
            <a href="/#" onClick={handleCopyEmail}>
            seanmcnt@gmail.com
          </a> 
        </div>
        <div className="map-wrap">
            <MapContainer center={[39.819270, -75.235145]} zoom={11}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LayersControl position="topright">
                <LayersControl.Overlay checked name="Sean's Location">
                    <Marker position={[39.819270, -75.235145]}>
                        <Popup>Clarksboro, NJ</Popup>
                    </Marker>
                </LayersControl.Overlay>
                <LayersControl.Overlay unchecked name="Hybrid work radius">
                    <LayerGroup>
                    <Circle center={[39.819270, -75.235145]} pathOptions={fillBlueOptions} radius={125000} />
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  );
};

export default Contact;
